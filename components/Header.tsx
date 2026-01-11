"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-gray-900 border-b border-gray-700 shadow-md px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-white">
            COZA STORE
          </h1>
          <p className="text-xs uppercase tracking-widest font-medium mt-1 text-gray-300">
            Modern Fashion Essentials
          </p>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="mt-2 md:mt-0 flex items-center gap-2 px-4 py-2 rounded-md font-medium shadow-md 
                     border transition-all duration-200
                     bg-white dark:bg-gray-800
                     text-gray-900 dark:text-gray-100
                     border-gray-300 dark:border-gray-100
                     hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {dark ? (
            <>
              <Sun size={18} />
              Light
            </>
          ) : (
            <>
              <Moon size={18} />
              Dark
            </>
          )}
        </button>
      </div>
    </header>
  );
}
