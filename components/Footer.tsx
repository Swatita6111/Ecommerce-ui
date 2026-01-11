export default function Footer() {
  return (
    <footer className="bg-dark dark:bg-gray-900 text-white mt-20 border-t border-gray-300 dark:border-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-accent">COZA STORE</h1>
          <p className="text-sm text-gray-400 dark:text-gray-300">
            Modern fashion essentials delivered to your doorstep. Stay trendy, stay confident.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h2 className="font-semibold text-white">Customer Service</h2>
          <ul className="space-y-1 text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact Support</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-white">Explore</h2>
          <ul className="space-y-1 text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:text-accent transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Gift Cards</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Newsletter</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="space-y-2">
          <h2 className="font-semibold text-white">Follow Us</h2>
          <div className="flex gap-4 text-gray-300 dark:text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-6">
        <p className="text-center text-sm py-4 text-gray-400 dark:text-gray-300">
          &copy; 2026 COZA STORE. All rights reserved.
        </p>
      </div>
    </footer>

  );
}
