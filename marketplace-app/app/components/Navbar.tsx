'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md bg-opacity-95 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-110 transition-transform">
              🎯 LocalHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-semibold transition">
              Home
            </Link>
            <a href="#stats" className="text-gray-700 hover:text-indigo-600 font-semibold transition">
              Stats
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-semibold transition">
              Reviews
            </a>
            <a href="#faq" className="text-gray-700 hover:text-indigo-600 font-semibold transition">
              FAQ
            </a>
          </div>

          {/* Auth buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/login"
              className="flex items-center gap-2 px-4 py-2.5 text-indigo-600 font-semibold hover:bg-indigo-50 rounded-lg transition group"
            >
              <LogIn size={18} className="group-hover:scale-110 transition-transform" />
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105 group"
            >
              <UserPlus size={18} className="group-hover:rotate-180 transition-transform" />
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-gray-200 animate-fade-in-down">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition font-medium">
              Home
            </Link>
            <a href="#stats" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition font-medium">
              Stats
            </a>
            <a href="#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition font-medium">
              Reviews
            </a>
            <a href="#faq" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition font-medium">
              FAQ
            </a>
            <div className="pt-2 space-y-2 border-t border-gray-200">
              <Link
                href="/auth/login"
                className="block w-full px-4 py-3 text-indigo-600 font-semibold text-center rounded-lg hover:bg-indigo-50 transition"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg text-center hover:shadow-lg transition"
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
