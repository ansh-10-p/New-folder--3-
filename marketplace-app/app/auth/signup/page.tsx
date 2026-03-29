'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Check } from 'lucide-react';

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<'buyer' | 'seller' | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    category: '',
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const progressColor = userType === 'buyer' 
    ? 'from-indigo-600 to-blue-600'
    : 'from-emerald-600 to-teal-600';

  const passwordStrength = {
    score: 0,
    text: 'Weak',
    color: 'bg-red-500',
  };

  if (formData.password.length >= 8) passwordStrength.score++;
  if (/[A-Z]/.test(formData.password) && /[a-z]/.test(formData.password)) passwordStrength.score++;
  if (/[0-9]/.test(formData.password)) passwordStrength.score++;
  if (/[!@#$%^&*]/.test(formData.password)) passwordStrength.score++;

  if (passwordStrength.score === 1) {
    passwordStrength.text = 'Weak';
    passwordStrength.color = 'bg-red-500';
  } else if (passwordStrength.score === 2) {
    passwordStrength.text = 'Fair';
    passwordStrength.color = 'bg-yellow-500';
  } else if (passwordStrength.score === 3) {
    passwordStrength.text = 'Good';
    passwordStrength.color = 'bg-blue-500';
  } else if (passwordStrength.score >= 4) {
    passwordStrength.text = 'Strong';
    passwordStrength.color = 'bg-green-500';
  }

  const handleNextStep = () => {
    if (step === 1 && userType) {
      setStep(2);
    } else if (step === 2 && formData.email && formData.fullName) {
      setStep(3);
    } else if (step === 3 && userType === 'seller' && formData.businessName && formData.category) {
      setStep(4);
    } else if (step === 3 && userType === 'buyer') {
      setStep(4);
    }
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    category: '',
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const passwordStrength = {
    score: 0,
    text: 'Weak',
    color: 'bg-red-500',
  };

  if (formData.password.length >= 8) passwordStrength.score++;
  if (/[A-Z]/.test(formData.password) && /[a-z]/.test(formData.password)) passwordStrength.score++;
  if (/[0-9]/.test(formData.password)) passwordStrength.score++;
  if (/[!@#$%^&*]/.test(formData.password)) passwordStrength.score++;

  if (passwordStrength.score === 1) {
    passwordStrength.text = 'Weak';
    passwordStrength.color = 'bg-red-500';
  } else if (passwordStrength.score === 2) {
    passwordStrength.text = 'Fair';
    passwordStrength.color = 'bg-yellow-500';
  } else if (passwordStrength.score === 3) {
    passwordStrength.text = 'Good';
    passwordStrength.color = 'bg-blue-500';
  } else if (passwordStrength.score >= 4) {
    passwordStrength.text = 'Strong';
    passwordStrength.color = 'bg-green-500';
  }

  const handleNextStep = () => {
    if (step === 1 && userType) {
      setStep(2);
    } else if (step === 2 && formData.email && formData.fullName) {
      setStep(3);
    } else if (step === 3 && userType === 'seller' && formData.businessName && formData.category) {
      setStep(4);
    } else if (step === 3 && userType === 'buyer') {
      setStep(4);
    }
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    stepNum === step
                      ? `bg-gradient-to-r ${progressColor} text-white scale-110 shadow-lg`
                      : stepNum < step
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {stepNum < step ? <Check size={24} /> : stepNum}
                </div>
                {stepNum < 4 && (
                  <div
                    className={`h-1 w-16 mx-2 transition-all duration-300 ${
                      stepNum < step ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Step Title */}
          <div className="text-center animate-fade-in-down">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {step === 1 && 'Choose Your Role'}
              {step === 2 && 'Create Your Account'}
              {step === 3 && (userType === 'seller' ? 'Business Information' : 'Preferences')}
              {step === 4 && 'Verify & Complete'}
            </h1>
            <p className="text-gray-600">
              {step === 1 && 'Join as a buyer or seller'}
              {step === 2 && 'Set up your account details'}
              {step === 3 && (userType === 'seller' ? 'Tell us about your business' : 'Customize your experience')}
              {step === 4 && 'Review and complete your signup'}
            </p>
          </div>
        </div>

        {/* Step 1: Choose Role */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  type: 'buyer',
                  emoji: '👤',
                  icon: ShoppingBag,
                  title: "I'm a Buyer",
                  description: 'Browse and purchase products from local sellers',
                  color: 'indigo',
                  benefits: ['Easy browsing', 'Secure checkout', 'Order tracking'],
                },
                {
                  type: 'seller',
                  emoji: '🏪',
                  icon: Store,
                  title: "I'm a Seller",
                  description: 'Start your local business and reach customers',
                  color: 'emerald',
                  benefits: ['Free storefront', 'Payment tools', 'Analytics'],
                },
              ].map((option) => (
                <button
                  key={option.type}
                  onClick={() => setUserType(option.type as 'buyer' | 'seller')}
                  className={`p-8 rounded-2xl border-2 transition-all duration-300 text-left group hover-lift ${
                    userType === option.type
                      ? `border-${option.color}-600 bg-${option.color}-50 shadow-xl ring-2 ring-${option.color}-200`
                      : `border-gray-200 bg-white hover:border-gray-300`
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition ${
                    userType === option.type 
                      ? `bg-${option.color}-100`
                      : 'bg-gray-100'
                  }`}>
                    <div className="text-4xl">{option.emoji}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="text-green-500 font-bold">✓</span> {benefit}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>

            <button
              onClick={handleNextStep}
              disabled={!userType}
              className={`w-full py-4 font-bold rounded-xl text-white transition-all duration-300 ${
                userType === 'buyer'
                  ? 'bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400'
                  : userType === 'seller'
                  ? 'bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Continue as {userType === 'buyer' ? 'Buyer' : userType === 'seller' ? 'Seller' : 'User'}
            </button>
          </div>
        )}

        {/* Step 2: Account Details */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none transition-all duration-300 font-medium ${
                    focusedField === 'fullName' ? 'border-purple-600 shadow-lg' : 'border-gray-200'
                  }`}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none transition-all duration-300 font-medium ${
                    focusedField === 'email' ? 'border-purple-600 shadow-lg' : 'border-gray-200'
                  }`}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <div className="relative mb-2">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none transition-all duration-300 font-medium pr-14 ${
                      focusedField === 'password' ? 'border-purple-600 shadow-lg' : 'border-gray-200'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Password Strength */}
                {formData.password && (
                  <div className="mb-2">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4].map((bar) => (
                        <div
                          key={bar}
                          className={`h-1 flex-1 rounded-full transition-all ${
                            bar <= passwordStrength.score ? passwordStrength.color : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <p className={`text-xs font-semibold ${passwordStrength.color.replace('bg-', 'text-')}`}>
                      Password Strength: {passwordStrength.text}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  onFocus={() => setFocusedField('confirmPassword')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none transition-all duration-300 font-medium pr-14 ${
                    focusedField === 'confirmPassword' ? 'border-purple-600 shadow-lg' : 'border-gray-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!formData.email || !formData.fullName || !formData.password || !formData.confirmPassword}
                className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Business/Preferences */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in-up">
            {userType === 'seller' ? (
              <>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Business Name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    onFocus={() => setFocusedField('businessName')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-6 py-4 bg-white border-2 rounded-xl focus:outline-none transition-all font-medium ${
                      focusedField === 'businessName' ? 'border-purple-600 shadow-lg' : 'border-gray-200'
                    }`}
                  />
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none font-medium"
                  >
                    <option value="">Select Category</option>
                    <option value="food">Food & Beverages</option>
                    <option value="fashion">Fashion & Apparel</option>
                    <option value="handmade">Handmade & Crafts</option>
                    <option value="electronics">Electronics</option>
                    <option value="services">Services</option>
                  </select>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {['Organic', 'Local', 'Discount', 'Premium', 'Fast Delivery', 'Same Day'].map((pref) => (
                  <button
                    key={pref}
                    className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition-all font-semibold text-gray-700"
                  >
                    {pref}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={userType === 'seller' && (!formData.businessName || !formData.category)}
                className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Review & Complete */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Review Your Information</h3>
              <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Role:</span> {userType === 'buyer' ? 'Buyer' : 'Seller'}</p>
                <p><span className="font-semibold">Name:</span> {formData.fullName}</p>
                <p><span className="font-semibold">Email:</span> {formData.email}</p>
                {userType === 'seller' && (
                  <>
                    <p><span className="font-semibold">Business:</span> {formData.businessName}</p>
                    <p><span className="font-semibold">Category:</span> {formData.category}</p>
                  </>
                )}
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="w-5 h-5 rounded border-gray-300 text-purple-600 mt-1"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-4 border-2 border-gray-300 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleSignUp}
                disabled={!formData.agreeToTerms || isLoading}
                className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 disabled:opacity-50 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                <span className="relative flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <span className="animate-spin mr-2">⚙️</span>
                      Creating Account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </span>
              </button>
            </div>

            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-purple-600 font-bold hover:text-purple-700">
                Sign in
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
