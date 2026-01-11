"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider"; 

const slides = [
  {
    id: 1,
    title: "Women Collection 2030",
    heading: "NEW SEASON",
    image: "/image1.webp",
  },
  {
    id: 2,
    title: "Men Collection 2030",
    heading: "NEW ARRIVALS",
    image: "/image2.webp",
  },
  {
    id: 3,
    title: "Men New-Season",
    heading: "JACKETS & COATS",
    image: "/image3.webp",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const { dark } = useTheme(); // get dark mode state

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000
            ${index === active ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div
              className={`max-w-7xl mx-28
                transition-all duration-700
                ${index === active ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
              `}
            >
              <p className="text-lg mb-2 text-white">{slide.title}</p>
              <h1 className="text-5xl font-bold mb-6 text-white">{slide.heading}</h1>

              {/* Explore Button */}
              <button
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200
                  ${dark
                    ? "bg-black text-white hover:bg-gray-700 border border-gray-600"
                    : "bg-white text-black hover:bg-gray-200 border border-gray-300"
                  }`}
              >
                Explore Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C12.5523 2 13 2.44772 13 3V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V3C11 2.44772 11.4477 2 12 2Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
