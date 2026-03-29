'use client';

import { useState } from 'react';
import { Check, AlertCircle, ArrowRight } from 'lucide-react';

export default function SellerOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to SellerHub',
      subtitle: 'Your journey as a successful seller starts here',
      description: 'Get your storefront set up in just a few minutes and start reaching customers today.',
      icon: '🎉',
      details: ['Complete verification', 'Set up payment method', 'Add your first product'],
    },
    {
      title: 'Complete Verification',
      subtitle: 'Build trust with customers',
      description: 'Verify your identity and business information to unlock all seller features.',
      icon: '✅',
      details: [
        { label: 'Email verified', status: 'completed' },
        { label: 'Phone verification', status: 'pending' },
        { label: 'Business documents', status: 'pending' },
        { label: 'Bank account', status: 'pending' },
      ],
    },
    {
      title: 'Set Up Payment',
      subtitle: 'Get paid for your sales',
      description: 'Connect your bank account to receive payouts from your sales.',
      icon: '💳',
      details: [
        { label: 'Bank name', value: '** Select Bank **' },
        { label: 'Account holder name', value: '** Your Name **' },
        { label: 'Account type', value: '** Checking **' },
      ],
    },
    {
      title: 'Create Your First Product',
      subtitle: 'Showcase what you sell',
      description: 'Add high-quality images and descriptions to attract customers.',
      icon: '📦',
      details: [
        { label: 'Product name', placeholder: 'e.g., Organic Coffee Beans' },
        { label: 'Category', placeholder: 'Select a category' },
        { label: 'Price', placeholder: 'e.g., $12.99' },
        { label: 'Stock quantity', placeholder: 'e.g., 100' },
      ],
    },
    {
      title: 'Optimize Your Storefront',
      subtitle: 'Stand out from the competition',
      description: 'Customize your store branding and settings to attract more customers.',
      icon: '🎨',
      details: [
        { label: 'Store name', value: 'LocalFresh Produce' },
        { label: 'Store description', value: 'Premium organic products from local farms' },
        { label: 'Logo upload', status: 'pending' },
        { label: 'Banner upload', status: 'pending' },
      ],
    },
    {
      title: 'Start Selling',
      subtitle: 'You\'re all set!',
      description: 'Your store is live and ready to receive orders. Let\'s grow your business!',
      icon: '🚀',
      details: [
        { label: 'Storefront URL', value: 'localfresh-produce.localhub.com' },
        { label: 'First product live', badge: 'Live' },
        { label: 'Payment method connected', badge: 'Active' },
      ],
    },
  ];

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
            🏪 Seller Onboarding
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold">{currentStep + 1}</span>
            <span>/</span>
            <span>{steps.length}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Steps */}
          <div className="lg:col-span-1 h-fit sticky top-20">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-6">Setup Progress</h3>
              <div className="space-y-3">
                {steps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                      currentStep === idx
                        ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg scale-105'
                        : currentStep > idx
                        ? 'bg-green-50 border-2 border-green-200'
                        : 'bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          currentStep === idx
                            ? 'bg-white text-emerald-600'
                            : currentStep > idx
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {currentStep > idx ? <Check size={16} /> : idx + 1}
                      </div>
                      <span className="font-semibold text-sm">{step.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="text-6xl mb-6 animate-bounce">{currentStepData.icon}</div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">{currentStepData.title}</h1>
                <p className="text-xl text-gray-600 mb-2">{currentStepData.subtitle}</p>
                <p className="text-gray-600 max-w-lg mx-auto">{currentStepData.description}</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-600">Progress</span>
                  <span className="text-sm font-bold text-emerald-600">{Math.round((currentStep + 1) / steps.length * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500 rounded-full"
                    style={{ width: `${(currentStep + 1) / steps.length * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Content */}
              <div className="mb-12">
                {currentStep === 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentStepData.details.map((detail, idx) => (
                      <div key={idx} className="p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-lg border-2 border-emerald-200">
                        <p className="text-sm text-gray-600 mb-2">Step {idx + 1}</p>
                        <p className="font-bold text-gray-900">{detail}</p>
                      </div>
                    ))}
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4">
                    {currentStepData.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{detail.label}</span>
                        <div className="flex items-center gap-2">
                          {detail.status === 'completed' && (
                            <span className="flex items-center gap-1 text-green-600 font-semibold">
                              <Check size={18} /> Verified
                            </span>
                          )}
                          {detail.status === 'pending' && (
                            <span className="flex items-center gap-1 text-yellow-600 font-semibold">
                              <AlertCircle size={18} /> Pending
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    {currentStepData.details.map((detail, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{detail.label}</label>
                        <input
                          type="text"
                          placeholder={detail.value}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    {currentStepData.details.map((detail, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{detail.label}</label>
                        <input
                          type="text"
                          placeholder={detail.placeholder}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-600 focus:outline-none transition"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    {currentStepData.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border-2 border-emerald-200">
                        <span className="font-medium text-gray-900">{detail.label}</span>
                        {detail.status && (
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${detail.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {detail.status === 'completed' ? 'Done' : 'Upload'}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full">
                      <Check size={40} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h3>
                      <p className="text-gray-600 mb-6">Your seller account is fully set up and ready to go.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {currentStepData.details.map((detail, idx) => (
                        <div key={idx} className="p-4 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">{detail.label}</p>
                          <p className="font-bold text-gray-900 text-sm">{detail.value || 'Item'}</p>
                          {detail.badge && <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">{detail.badge}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="px-6 py-3 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
                >
                  {currentStep === steps.length - 1 ? 'Go to Dashboard' : 'Next Step'}
                  {currentStep < steps.length - 1 && <ArrowRight size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
