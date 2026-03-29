'use client';

import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 animate-fade-in-up">
          {/* Brand column */}
          <div className="md:col-span-1 animate-fade-in-left">
            <h2 className="text-2xl font-bold text-white mb-4 animate-bounce-in">LocalHub</h2>
            <p className="text-gray-400 leading-relaxed mb-6 animate-fade-in-up-2">
              Connecting communities through local commerce and sustainable economic growth.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110 animate-fade-in-up-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.02c0-2.77 1.69-4.29 4.16-4.29 1.18 0 2.2.09 2.49.13v2.89h-1.71c-1.34 0-1.6.64-1.6 1.57v2.05h3.2l-.42 3.54h-2.78V20h-2.79z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110 animate-fade-in-up-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110 animate-fade-in-up-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Browse Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  For Sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Newsletter section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-12 hover-lift animate-fade-in-up-4">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 animate-fade-in-left">
              <h3 className="text-2xl font-bold text-white mb-2 animate-fade-in-up">
                Stay updated
              </h3>
              <p className="text-blue-100 animate-fade-in-up-2">
                Get insights on local commerce trends and marketplace updates.
              </p>
            </div>
            <div className="flex gap-2 animate-fade-in-right">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white text-gray-900 flex-1 md:flex-none focus:outline-none focus:ring-2 focus:ring-blue-300 transition-smooth"
              />
              <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition hover-lift animate-bounce-in">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2026 LocalHub. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-300 text-sm py-2 px-3 rounded border border-gray-700 hover:border-gray-600">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-white text-sm transition">
                Dark Mode
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
