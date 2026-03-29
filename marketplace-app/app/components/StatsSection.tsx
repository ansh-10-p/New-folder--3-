'use client';

import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      id: 1,
      label: 'Active Sellers',
      value: '500',
      suffix: '+',
      icon: '👥',
      growth: '+45%',
    },
    {
      id: 2,
      label: 'Products Listed',
      value: '10',
      suffix: 'k+',
      icon: '📦',
      growth: '+120%',
    },
    {
      id: 3,
      label: 'Happy Customers',
      value: '50',
      suffix: 'k+',
      icon: '😊',
      growth: '+89%',
    },
    {
      id: 4,
      label: 'Transactions',
      value: '125',
      suffix: 'k+',
      icon: '💳',
      growth: '+156%',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up-1">
            By the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up-2">
            Our growing community making a real impact on local economies
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${stat.id * 0.12}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center hover:border-indigo-300 transition duration-300 hover-lift">
                {/* Icon */}
                <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${stat.id * 0.2}s` }}>
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="mb-2 animate-count-up">
                  <span className="text-5xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-2xl font-bold text-indigo-600">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-gray-600 font-medium mb-4">{stat.label}</p>

                {/* Growth */}
                <div className="flex items-center justify-center gap-2 animate-fade-in-up">
                  <svg className="w-4 h-4 text-green-500 animate-pop" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 14c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V2h3v13.17c1.16.42 2 1.52 2 2.83 0 1.66-1.34 3-3 3zm13.71-9.71L17 6.41V2h-3v4.41L6.29 4.29 4.88 5.7c1.54 1.54 4.88 4.88 4.88 4.88L5.7 19.12l1.41 1.41 9.17-9.17.41.41 1.41-1.41-1.41-1.42.41-.41 1.42 1.41 1.41-1.41z" />
                  </svg>
                  <span className="text-sm font-semibold text-green-600">{stat.growth} this year</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom insight */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 animate-fade-in-up-4 hover-lift">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in-up">
              Supporting Local Commerce
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto animate-fade-in-up-2">
              Join thousands of businesses and customers who are building stronger, more resilient communities through local commerce. Every transaction supports local jobs and economic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
