import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white pt-12 pb-6 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMzBoMzB2MzBoLTMwek0wIDBoMzB2MzBoLTMweiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"></div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold">Mos Sports Shop</h2>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted cricket equipment store in Meerut — offering premium
              bats, gloves, pads, and accessories to power your game.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Meerut, Uttar Pradesh, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-6 sm:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-gray-300">
              <li>
                <Link
                  href="#products"
                  className="hover:text-emerald-300 transition-colors duration-200 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-emerald-300 transition-colors duration-200 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-300 transition-colors duration-200 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-300 transition-colors duration-200 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-4">
              Follow us for the latest updates and offers.
            </p>
            <div className="flex items-center space-x-3">
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-emerald-600 transition-all duration-200 hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.36 8.47 8.47 0 01-2.7 1.03 4.24 4.24 0 00-7.3 3.86 12.03 12.03 0 01-8.74-4.43 4.25 4.25 0 001.31 5.65 4.2 4.2 0 01-1.92-.53v.05a4.26 4.26 0 003.4 4.18 4.26 4.26 0 01-1.91.07 4.26 4.26 0 003.98 2.96A8.51 8.51 0 012 19.54a12.03 12.03 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.66 8.66 0 0024 5.5a8.6 8.6 0 01-2.54.7z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-emerald-600 transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zm8.43 4c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1a2.1 2.1 0 110-4.2zm-4.18 2.6a5.15 5.15 0 110 10.3 5.15 5.15 0 010-10.3zm0 1.8a3.35 3.35 0 100 6.7 3.35 3.35 0 000-6.7z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-emerald-600 transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48a11.88 11.88 0 00-16.8 0 11.88 11.88 0 000 16.8 11.88 11.88 0 0016.8 0 11.88 11.88 0 000-16.8zm-1.17 15.63c-1.38 1.38-3.18 2.1-5.08 2.1-1.63 0-3.17-.54-4.45-1.55l-3.44 1.14 1.13-3.36a8.22 8.22 0 01-1.61-4.83c0-1.9.72-3.7 2.1-5.08a7.1 7.1 0 015.08-2.1c1.9 0 3.7.72 5.08 2.1a7.1 7.1 0 012.1 5.08c0 1.9-.72 3.7-2.1 5.08z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-emerald-600 transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <h4 className="text-white font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 px-3 py-2 rounded-l-lg text-sm w-full focus:outline-none focus:ring-1 focus:ring-emerald-400 border-0"
                  aria-label="Email for newsletter"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-r-lg text-sm font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-10 pt-4 text-center text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} Mos Sports Shop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
