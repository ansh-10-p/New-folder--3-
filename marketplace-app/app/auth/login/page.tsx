'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, ShoppingBag, Store, ArrowRight, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [step, setStep] = useState<'role' | 'login'>('role');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'buyer' | 'seller' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Redirect logic would go here
  };

  const handleRoleSelect = (role: 'buyer' | 'seller') => {
    setUserType(role);
    setStep('login');
  };

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Role Selection Screen */}
        {step === 'role' && (
          <div className="animate-fade-in space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <h1 className="text-4xl font-bold text-gray-900">Welcome to Marketplace</h1>
              <p className="text-gray-600 text-lg">Sign in to your account</p>
            </div>

            {/* Role Selection Cards */}
            <div className="space-y-4">
              {/* Buyer Card */}
              <button
                onClick={() => handleRoleSelect('buyer')}
                className="w-full bg-white border-2 border-gray-200 rounded-2xl p-6 text-left transition-all duration-300 hover:border-indigo-600 hover:shadow-xl hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                    <ShoppingBag size={32} className="text-indigo-600" />
                  </div>
                  <ArrowRight size={20} className="text-indigo-600 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Buyer Login</h3>
                <p className="text-gray-600 text-sm mb-4">Browse and purchase products from local sellers</p>
                <div className="flex gap-2">
                  <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">Fast Checkout</span>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Track Orders</span>
                </div>
              </button>

              {/* Seller Card */}
              <button
                onClick={() => handleRoleSelect('seller')}
                className="w-full bg-white border-2 border-gray-200 rounded-2xl p-6 text-left transition-all duration-300 hover:border-emerald-600 hover:shadow-xl hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                    <Store size={32} className="text-emerald-600" />
                  </div>
                  <ArrowRight size={20} className="text-emerald-600 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Seller Login</h3>
                <p className="text-gray-600 text-sm mb-4">Manage your business and reach more customers</p>
                <div className="flex gap-2">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">Free Storefront</span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Analytics</span>
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-500 text-sm">New here?</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Sign Up Link */}
            <div className="bg-gray-100 rounded-xl p-4 text-center space-y-2">
              <p className="text-gray-700 font-medium">Don't have an account?</p>
              <Link href="/auth/signup" className="block w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition">
                Create an Account
              </Link>
            </div>
          </div>
        )}

        {/* Login Screen */}
        {step === 'login' && userType && (
          <div className="animate-fade-in space-y-8">
            {/* Header */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setStep('role');
                  setUserType(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                ← Back
              </button>
              <div className="flex-1 space-y-1">
                <h1 className="text-2xl font-bold text-gray-900">
                  {userType === 'buyer' ? 'Buyer Login' : 'Seller Login'}
                </h1>
                <p className="text-sm text-gray-600">Sign in to your account</p>
              </div>
            </div>

            {/* Role Badge */}
            <div className={`flex items-center gap-3 p-4 rounded-xl ${userType === 'buyer' ? 'bg-indigo-100' : 'bg-emerald-100'}`}>
              <div className={`w-12 h-12 ${userType === 'buyer' ? 'bg-indigo-600' : 'bg-emerald-600'} rounded-lg flex items-center justify-center text-white text-2xl`}>
                {userType === 'buyer' ? '👤' : '🏪'}
              </div>
              <div>
                <p className={`font-bold ${userType === 'buyer' ? 'text-indigo-900' : 'text-emerald-900'}`}>
                  {userType === 'buyer' ? 'Buyer Account' : 'Seller Account'}
                </p>
                <p className={`text-sm ${userType === 'buyer' ? 'text-indigo-700' : 'text-emerald-700'}`}>
                  {userType === 'buyer' ? 'Browse and purchase' : 'Manage your business'}
                </p>
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-3 bg-white border-2 rounded-lg focus:outline-none transition ${
                      focusedField === 'email' ? (userType === 'buyer' ? 'border-indigo-600' : 'border-emerald-600') : 'border-gray-200'
                    }`}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-900">Password</label>
                  <Link href="#" className={`text-sm font-medium hover:underline ${userType === 'buyer' ? 'text-indigo-600' : 'text-emerald-600'}`}>
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-12 py-3 bg-white border-2 rounded-lg focus:outline-none transition ${
                      focusedField === 'password' ? (userType === 'buyer' ? 'border-indigo-600' : 'border-emerald-600') : 'border-gray-200'
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
              </div>

              {/* Remember Me */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                <span className="text-sm text-gray-600">Keep me signed in</span>
              </label>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading || !email || !password}
                className={`w-full py-3 font-bold rounded-lg transition duration-300 text-white flex items-center justify-center gap-2 ${
                  userType === 'buyer' 
                    ? 'bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400'
                    : 'bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400'
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⚙️</span>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-500 text-xs">or</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🔵', label: 'Facebook' },
                { icon: '📧', label: 'Google' },
                { icon: '🍎', label: 'Apple' },
              ].map((social) => (
                <button
                  key={social.label}
                  className="py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition text-2xl"
                  title={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link href={`/auth/signup?role=${userType}`} className={`font-bold ${userType === 'buyer' ? 'text-indigo-600 hover:text-indigo-700' : 'text-emerald-600 hover:text-emerald-700'}`}>
                Sign up as {userType === 'buyer' ? 'Buyer' : 'Seller'}
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
