"use client";

import { useState } from "react";
import { Heart, ShoppingBag, Search, X } from "lucide-react";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="bg-black px-8 py-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          COZA STORE
        </h1>

        <p className="text-s uppercase tracking-widest font-medium text-gray-200 mt-1">
          modern fashion essentials
        </p>

      </div>
    </header>
  );
}
