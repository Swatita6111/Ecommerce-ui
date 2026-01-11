// import { Heart } from "lucide-react";

// export function ProductCard({ product, isFavorite, onToggleFavorite }: any) {
//   return (
//     <div className="group">
//       <div className="relative overflow-hidden rounded-lg">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-[300px] object-contain bg-white p-4"
//         />

//         <button
//           onClick={() => onToggleFavorite(product.id)}
//           className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
//         >
//           <Heart
//             size={18}
//             className={isFavorite ? "fill-primary text-primary" : ""}
//           />
//         </button>

//         <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-dark text-white px-6 py-2 opacity-0 group-hover:opacity-100 transition shadow">
//           Quick View
//         </button>
//       </div>

//       <div className="mt-4 space-y-1">
//         <p className="text-xs text-gray-500 uppercase">
//           {product.category}
//         </p>
//         <h3 className="text-sm font-medium line-clamp-2">
//           {product.title}
//         </h3>
//         <p className="text-gray-800 font-semibold">
//           ${product.price}
//         </p>
//       </div>
//     </div>
//   );
// }
