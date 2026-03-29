'use client';

export default function UsedBySection() {
  const companies = [
    { id: 1, name: 'Artisan Co', logo: '🎨' },
    { id: 2, name: 'Local Roots', logo: '🌱' },
    { id: 3, name: 'Brew & Bean', logo: '☕' },
    { id: 4, name: 'Handcraft Studio', logo: '✨' },
    { id: 5, name: 'Fresh Harvest', logo: '🥕' },
    { id: 6, name: 'Creative Minds', logo: '🧠' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up-1">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">local champions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up-2">
            Leading local businesses use our platform to grow and thrive
          </p>
        </div>

        {/* Companies grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition duration-300 cursor-pointer group hover-lift animate-fade-in-up"
              style={{ animationDelay: `${company.id * 0.1}s` }}
            >
              <div className="text-5xl mb-3 group-hover:scale-125 transition duration-300 animate-float" style={{ animationDelay: `${company.id * 0.15}s` }}>
                {company.logo}
              </div>
              <p className="text-sm font-semibold text-gray-700 text-center">
                {company.name}
              </p>
            </div>
          ))}
        </div>

        {/* Success stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Story 1 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200 hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6 animate-fade-in-right">
              <div className="text-5xl animate-float">🌱</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Local Roots Farm</h3>
                <p className="text-sm text-gray-600">Farm to Table</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 animate-fade-in-up">
              "Since joining the marketplace, our sales have grown by 300%. We've connected with customers who value sustainable, local farming practices."
            </p>
            <div className="flex items-center justify-between animate-fade-in-up-2">
              <span className="text-sm font-semibold text-gray-600">3 years on platform</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current animate-pop" style={{ animationDelay: `${i * 0.1}s` }} viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 hover-lift animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-6 animate-fade-in-right">
              <div className="text-5xl animate-float" style={{ animationDelay: '0.3s' }}>☕</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Brew & Bean</h3>
                <p className="text-sm text-gray-600">Coffee Roastery</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 animate-fade-in-up">
              "The marketplace helped us reach beyond our local area and build a loyal online customer base. The tools are amazing and support is fantastic."
            </p>
            <div className="flex items-center justify-between animate-fade-in-up-2">
              <span className="text-sm font-semibold text-gray-600">1.5 years on platform</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current animate-pop" style={{ animationDelay: `${i * 0.1 + 0.5}s` }} viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
