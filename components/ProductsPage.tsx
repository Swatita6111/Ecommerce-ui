"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { Heart } from "lucide-react";
import { useState } from "react";

type ProductsPageProps = {
  products: Product[];
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
  showFavorites: boolean;
  setShowFavorites: (val: boolean) => void;
  loading: boolean;
};

export default function ProductsPage({
  products,
  favorites,
  setFavorites,
  showFavorites,
  setShowFavorites,
  loading,
}: ProductsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id]
    );
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showEmptyFavorites = showFavorites && favorites.length === 0;
  const showNoResults =
    !loading && filteredProducts.length === 0 && searchTerm;

  return (
    <div className="p-6">
      {/* Search + Toggle */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="px-4 py-3 rounded-md text-sm font-semibold bg-accent text-white
          hover:opacity-90 transition active:scale-[0.97]"
        >
          {showFavorites ? "Back to Products" : "Show Favorites"}
        </button>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64 px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* 🔹 Skeleton Loader (same style as ProductDetailsPage) */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 shadow animate-pulse"
            >
              <div className="w-full h-56 bg-gray-200 rounded mb-4" />
              <div className="h-3 bg-gray-300 rounded w-1/3 mb-2" />
              <div className="h-4 bg-gray-300 rounded mb-2" />
              <div className="h-4 bg-gray-300 rounded w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Empty Favorites */}
      {!loading && showEmptyFavorites && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg font-semibold mb-2">
            No items in favorites ❤️
          </p>
          <p className="text-sm">
            Click the heart icon to add products.
          </p>
        </div>
      )}

      {/* No Search Results */}
      {!loading && showNoResults && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg font-semibold mb-2">
            No products found 🔍
          </p>
          <p className="text-sm">
            Try a different keyword.
          </p>
        </div>
      )}

      {/* Products Grid */}
      {!loading && filteredProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isFav = favorites.includes(product.id);

            return (
              <div
                key={product.id}
                className="relative border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3"
                >
                  <Heart
                    size={20}
                    className={
                      isFav ? "fill-black text-black" : "text-gray-400"
                    }
                  />
                </button>

                <Link href={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-contain mb-4"
                  />

                  <p className="text-xs text-gray-500 uppercase mb-1">
                    {product.category}
                  </p>

                  <h3 className="text-sm font-medium line-clamp-2 mb-2">
                    {product.title}
                  </h3>

                  <p className="text-lg font-semibold text-primary">
                    ${product.price}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
