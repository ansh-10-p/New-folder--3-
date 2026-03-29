'use client';

import { useState } from 'react';
import { Check, Heart, MapPin, Star } from 'lucide-react';

export default function BuyerOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to BuyerHub',
      subtitle: 'Start discovering amazing local products',
      description: 'Browse unique items from local sellers and support your community.',
      icon: '👋',
      features: ['Discover local shops', 'Support small businesses', 'Save your favorites', 'Easy checkout'],
    },
    {
      title: 'Complete Your Profile',
      subtitle: 'Personalize your shopping experience',
      description: 'Help us recommend products you'll love.',
      icon: '👤',
      items: [
        { label: 'First name', placeholder: 'John' },
        { label: 'Last name', placeholder: 'Doe' },
        { label: 'Phone number', placeholder: '+1 (555) 123-4567' },
        { label: 'Preferred location', placeholder: 'San Francisco, CA' },
      ],
    },
    {
      title: 'Set Your Preferences',
      subtitle: 'Find products that match your interests',
      description: 'Select categories and interests you care about.',
      icon: '🎯',
      categories: ['Organic & Fair Trade', 'Handmade Crafts', 'Fresh Produce', 'Artisan Foods', 'Fashion', 'Home & Garden', 'Beauty', 'Pet Products'],
    },
    {
      title: 'Add Delivery Address',
      subtitle: 'Get fast local delivery',
      description: 'We support delivery to your preferred locations.',
      icon: '📍',
      fields: [
        { label: 'Street address', placeholder: '123 Main St' },
        { label: 'City', placeholder: 'San Francisco' },
        { label: 'State', placeholder: 'CA' },
        { label: 'ZIP code', placeholder: '94102' },
      ],
    },
    {
      title: 'Payment Method',
      subtitle: 'Quick and secure checkout',
      description: 'Add a payment method for faster purchases.',
      icon: '💳',
      options: [
        { icon: '💳', label: 'Credit/Debit Card', description: 'Visa, Mastercard, Amex' },
        { icon: '🏦', label: 'Bank Transfer', description: 'Direct from your bank account' },
        { icon: '👛', label: 'Digital Wallet', description: 'Apple Pay, Google Pay' },
      ],
    },
    {
      title: 'You're All Set!',
      subtitle: 'Time to start shopping',
      description: 'Explore thousands of products from local sellers.',
      icon: '🎉',
      ready: true,
    },
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            🛍️ Buyer Onboarding
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold">{currentStep + 1}</span>
            <span>/</span>
            <span>{steps.length}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Tabs Navigation */}
        <div className="mb-8 space-y-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Step {currentStep + 1}: {currentStepData.title}</h2>
            <div className="text-sm font-semibold text-indigo-600">{Math.round((currentStep + 1) / steps.length * 100)}% Complete</div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 rounded-full"
              style={{ width: `${(currentStep + 1) / steps.length * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-8 animate-fade-in-up">
          {/* Content Header */}
          <div className="text-center mb-12">
            <div className="text-5xl mb-6 animate-bounce">{currentStepData.icon}</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentStepData.title}</h1>
            <p className="text-gray-600 text-lg">{currentStepData.subtitle}</p>
            <p className="text-gray-500 mt-2">{currentStepData.description}</p>
          </div>

          {/* Step 0: Features */}
          {currentStep === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(currentStepData as any).features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                  <div className="text-2xl">✨</div>
                  <div>
                    <p className="font-bold text-gray-900">{feature}</p>
                    <p className="text-sm text-gray-600 mt-1">Start exploring today</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Profile */}
          {currentStep === 1 && (
            <div className="space-y-4 max-w-2xl mx-auto">
              {(currentStepData as any).items.map((item: any, idx: number) => (
                <div key={idx}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{item.label}</label>
                  <input
                    type="text"
                    placeholder={item.placeholder}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Preferences */}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(currentStepData as any).categories.map((category: string, idx: number) => (
                <button
                  key={idx}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition text-left font-medium text-gray-900 group"
                >
                  <span className="block group-hover:text-indigo-600 transition">{category}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 3: Delivery Address */}
          {currentStep === 3 && (
            <div className="space-y-4 max-w-2xl mx-auto">
              {(currentStepData as any).fields.map((field: any, idx: number) => (
                <div key={idx}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {(currentStepData as any).options.map((option: any, idx: number) => (
                <button
                  key={idx}
                  className="p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-600 hover:bg-indigo-50 transition group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{option.icon}</div>
                  <p className="font-bold text-gray-900 mb-1">{option.label}</p>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </button>
              ))}
            </div>
          )}

          {/* Step 5: Ready */}
          {currentStep === 5 && (
            <div className="text-center space-y-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full animate-scale-in">
                <Check size={48} className="text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">You're All Set!</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Your account is ready. Start exploring thousands of amazing local products and support small businesses in your community.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <Heart size={32} className="mx-auto text-indigo-600 mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">400+ Local Shops</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <Star size={32} className="mx-auto text-indigo-600 mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Verified Sellers</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <MapPin size={32} className="mx-auto text-indigo-600 mb-2" />
                  <p className="font-semibold text-gray-900 text-sm">Fast Delivery</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-6 py-3 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
          >
            {currentStep === steps.length - 1 ? 'Go to Store' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
