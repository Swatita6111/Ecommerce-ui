"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/types/product";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = params;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  // Simple neutral loading skeleton
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="h-[450px] bg-gray-200 rounded-lg animate-pulse shadow"></div>
        <div className="space-y-6">
          <div className="h-6 bg-gray-300 rounded w-32 animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          </div>
          <div className="h-10 bg-gray-300 rounded w-40 animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (error)
    return <p className="text-center py-10 text-red-500 font-semibold">{error}</p>;
  if (!product)
    return <p className="text-center py-10 font-semibold">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="relative group bg-slate-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[450px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Category */}
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
            {product.category}
          </p>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          {/* Price */}
          <p className="text-2xl font-bold text-pink-500">${product.price}</p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => router.back()}
              className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition shadow"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
