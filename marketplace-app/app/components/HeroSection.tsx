'use client';

import Link from 'next/link';
import { useState, useEffect, MouseEvent } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset
  const parallaxOffset = scrollY * 0.5;
  const mouseParallaxX = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * 0.02;
  const mouseParallaxY = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * 0.02;

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center overflow-hidden group">
      {/* Enhanced Background decoration with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving blur circles with mouse tracking */}
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob transition-transform duration-300"
          style={{
            transform: `translate(${mouseParallaxX}px, ${mouseParallaxY - parallaxOffset}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 transition-transform duration-300"
          style={{
            transform: `translate(${-mouseParallaxX * 0.5}px, ${-mouseParallaxY * 0.5 - parallaxOffset}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 transition-transform duration-300"
          style={{
            transform: `translate(${mouseParallaxX * 0.7}px, ${mouseParallaxY * 0.7 - parallaxOffset * 0.7}px)`,
          }}
        ></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${(i + 1) * 15}%`,
              top: `${(i % 2) * 50 + 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-indigo-600 font-semibold text-lg uppercase tracking-widest animate-fade-in-up-1 cursor-default">
                ✨ Support Local. Shop Local. Grow Local.
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight animate-fade-in-up-2">
                Your Local{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient inline-block relative">
                  Marketplace
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg animate-fade-in-up-3 hover:text-gray-800 transition duration-300 cursor-default">
                Connect with local artisans, small businesses, and community members. Discover unique products and services while supporting your neighborhood economy.
              </p>
            </div>

            {/* Feature tabs */}
            <div className="flex gap-3 animate-fade-in-up-2 bg-gray-100 rounded-lg p-1">
              {['Browse', 'Sell', 'Community'].map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 transform ${
                    activeTab === idx
                      ? 'bg-white text-indigo-600 shadow-lg scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:bg-opacity-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* CTA Buttons with advanced interactions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up-3">
              <Link
                href="/auth/login"
                className="group/btn inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover-lift relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Start Shopping
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/auth/signup"
                className="group/btn inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg transition duration-300 hover-lift relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover/btn:opacity-100 transition duration-300"></span>
                <span className="relative group-hover/btn:text-indigo-600 transition duration-300">
                  Become a Seller
                </span>
              </Link>
            </div>

            {/* Stats with interactive hover */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 animate-fade-in-up-4">
              {[
                { value: '500+', label: 'Local Sellers' },
                { value: '10k+', label: 'Products' },
                { value: '25k+', label: 'Customers' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="hover-lift group/stat cursor-default transform transition-all duration-300"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <p className={`text-3xl font-bold transition-all duration-300 ${hoveredCard === idx ? 'text-indigo-600 scale-110' : 'text-gray-900'}`}>
                    {stat.value}
                  </p>
                  <p className={`font-medium transition-all duration-300 ${hoveredCard === idx ? 'text-indigo-600' : 'text-gray-600'}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Enhanced Featured categories */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            {/* Category Card 1 */}
            <div
              className="relative group/card bg-gradient-to-br from-emerald-400 to-teal-600 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in cursor-pointer"
              style={{ animationDelay: '0.1s' }}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-15 transition duration-300"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <svg
                  className="w-12 h-12 mb-4 opacity-80 group-hover/card:scale-125 group-hover/card:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                <h3 className="text-2xl font-bold group-hover/card:text-white transition">Handmade Crafts</h3>
                <p className="text-sm opacity-90 group-hover/card:opacity-100 transition">Unique artisan creations</p>
              </div>
            </div>

            {/* Category Card 2 */}
            <div
              className="relative group/card bg-gradient-to-br from-orange-400 to-red-600 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in cursor-pointer"
              style={{ animationDelay: '0.15s' }}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-15 transition duration-300"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <svg
                  className="w-12 h-12 mb-4 opacity-80 group-hover/card:scale-125 group-hover/card:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.1 0-2.48 1.63-5.16 6-8.97 4.37 3.81 6 6.49 6 8.97 0 3.53-2.65 6.1-6 6.1z" />
                </svg>
                <h3 className="text-2xl font-bold group-hover/card:text-white transition">Fresh Produce</h3>
                <p className="text-sm opacity-90 group-hover/card:opacity-100 transition">Local farm products</p>
              </div>
            </div>

            {/* Category Card 3 */}
            <div
              className="relative group/card bg-gradient-to-br from-purple-400 to-indigo-600 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in cursor-pointer"
              style={{ animationDelay: '0.2s' }}
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-15 transition duration-300"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <svg
                  className="w-12 h-12 mb-4 opacity-80 group-hover/card:scale-125 group-hover/card:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <h3 className="text-2xl font-bold group-hover/card:text-white transition">Services</h3>
                <p className="text-sm opacity-90 group-hover/card:opacity-100 transition">Professional expertise</p>
              </div>
            </div>

            {/* Category Card 4 */}
            <div
              className="relative group/card bg-gradient-to-br from-yellow-400 to-orange-500 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in cursor-pointer"
              style={{ animationDelay: '0.25s' }}
              onMouseEnter={() => setHoveredCard(6)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover/card:opacity-15 transition duration-300"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <svg
                  className="w-12 h-12 mb-4 opacity-80 group-hover/card:scale-125 group-hover/card:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <h3 className="text-2xl font-bold group-hover/card:text-white transition">Premium Items</h3>
                <p className="text-sm opacity-90 group-hover/card:opacity-100 transition">Curated collections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
