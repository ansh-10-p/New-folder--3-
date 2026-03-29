'use client';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Local Artist',
      image: '🎨',
      quote: 'This marketplace has transformed my business! I went from selling at local fairs to reaching thousands of customers every month.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Coffee Roaster',
      image: '☕',
      quote: 'Supporting local has never been easier. The platform makes it simple to connect with customers who truly appreciate quality.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Buyer',
      image: '👩‍💼',
      quote: 'I love discovering unique products from talented creators in my community. The quality and authenticity are unmatched!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-gradient">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up-2">
            Join our community of buyers and sellers who are transforming local commerce
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${testimonial.id * 0.15}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats highlight */}
        <div className="grid grid-cols-3 gap-4 mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white animate-fade-in-up-4">
          <div className="text-center">
            <p className="text-3xl font-bold animate-count-up">98%</p>
            <p className="text-blue-100">Seller Satisfaction</p>
          </div>
          <div className="text-center border-l border-r border-blue-400">
            <p className="text-3xl font-bold animate-count-up">4.9⭐</p>
            <p className="text-blue-100">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold animate-count-up">50k+</p>
            <p className="text-blue-100">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
