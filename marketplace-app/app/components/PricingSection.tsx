'use client';

export default function PricingSection() {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for individuals starting out',
      features: [
        'Up to 10 product listings',
        'Basic seller profile',
        'Standard customer support',
        'Local reach',
        'Community access',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      id: 2,
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing local businesses',
      features: [
        'Unlimited listings',
        'Advanced analytics dashboard',
        'Priority customer support',
        'Regional reach expansion',
        'Marketing tools included',
        'Custom storefront',
        'Social media integration',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact sales',
      description: 'For established businesses',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Multi-location support',
        'Advanced reporting',
        'API access',
        'White-label options',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up-1">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up-2">
            Choose the plan that fits your business needs
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl transition duration-300 transform hover-lift animate-fade-in-up ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl ring-2 ring-offset-2 ring-indigo-600'
                  : 'bg-white border border-gray-200 text-gray-900'
              }`}
              style={{ animationDelay: `${plan.id * 0.15}s` }}
            >
              {/* Badge for popular */}
              {plan.highlighted && (
                <div className="px-6 pt-6">
                  <span className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="my-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                    {' '}
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition duration-300 mb-8 ${
                    plan.highlighted
                      ? 'bg-white text-indigo-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features list */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16 animate-fade-in-up-4">
          <p className={`text-lg mb-4 text-gray-600 animate-fade-in-up`}>
            No credit card required. Start for free today.
          </p>
          <p className="text-sm text-gray-500 animate-fade-in-up-2">
            All transactions are protected by our buyer guarantee and secure payment system.
          </p>
        </div>
      </div>
    </section>
  );
}
