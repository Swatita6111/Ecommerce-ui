"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/api";
import ProductsPage from "@/components/ProductsPage";
import { Product } from "@/types/product";
import HeroSlider from "@/components/Hero";
import { useTheme } from "@/components/ThemeProvider";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { dark } = useTheme();

  /* Load products */
  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  /* Load favorites */
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  /* Save favorites */
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = category ? p.category === category : true;
    const matchesFavorite = showFavorites ? favorites.includes(p.id) : true;
    return matchesCategory && matchesFavorite;
  });

  return (
    <>
      <HeroSlider />

      <main
        className={`max-w-7xl mx-auto px-6 py-10 transition-colors duration-300
    ${dark ? "bg-gray-900 text-gray-200" : "bg-light text-gray-900"}`}
      >
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* PRODUCTS */}
          <div className="md:col-span-10">
            {error && !loading && (
              <div className="text-center py-20 text-red-500 font-medium">
                {error}
              </div>
            )}

            <ProductsPage
              products={filteredProducts}
              favorites={favorites}
              setFavorites={setFavorites}
              showFavorites={showFavorites}
              setShowFavorites={setShowFavorites}
              loading={loading}
              dark={dark} // pass dark mode to ProductsPage
            />
          </div>

          {/* SIDEBAR */}
          <aside className="md:col-span-2 space-y-6">
            {/* Favorites Bar */}
            <div
              onClick={() => setShowFavorites(true)}
              className={`flex items-center mt-6 justify-between py-2 px-3 rounded-lg cursor-pointer border transition-all
          ${showFavorites
                  ? dark
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-gray-200 text-black border-gray-300"
                  : dark
                    ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white"
                    : "bg-transparent text-gray-800 border-transparent hover:bg-gray-100 hover:text-accent"
                }
        `}
            >
              <span className="text-base font-bold tracking-wide">FAVORITES</span>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${dark ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-800"
                  }`}
              >
                {favorites.length}
              </span>
            </div>

            {/* Categories */}
            <div>
              <h2 className={`font-semibold mb-4 ${dark ? "text-gray-200" : "text-gray-900"}`}>
                CATEGORIES
              </h2>

              {categories.map((c) => (
                <div
                  key={c}
                  onClick={() => {
                    setCategory(c);
                    setShowFavorites(false);
                  }}
                  className={`text-sm px-3 py-2 rounded-md cursor-pointer transition
              ${category === c
                      ? dark
                        ? "text-accent bg-gray-700"
                        : "text-accent bg-gray-100"
                      : dark
                        ? "text-gray-400 hover:text-white hover:bg-gray-700"
                        : "text-muted hover:text-accent hover:bg-gray-100"
                    }
            `}
                >
                  {c}
                </div>
              ))}

              <div
                onClick={() => {
                  setCategory("");
                  setShowFavorites(false);
                }}
                className={`inline-block mt-4 px-4 py-2 rounded-md text-sm font-medium cursor-pointer shadow-sm transition
            ${dark ? "bg-accent text-black hover:bg-accent-dark" : "bg-accent text-white hover:bg-accent-dark"}`}
              >
                Reset
              </div>
            </div>
          </aside>
        </section>
      </main>

    </>
  );
}
