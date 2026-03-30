'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaMicrosoft } from 'react-icons/fa';

interface AuthFormProps {
  type: 'signin' | 'signup';
  userRole?: 'buyer' | 'seller';
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  role?: string;
}

export default function AuthForm({ type, userRole = 'buyer', onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    name: '',
    phone: '',
    role: userRole,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    if (onSubmit) {
      onSubmit(formData);
    }
    
    setIsLoading(false);
  };

  const handleOAuthLogin = async (provider: string) => {
    setOauthLoading(provider);
    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setOauthLoading(null);
  };

  const isSignUp = type === 'signup';
  const accentColor = userRole === 'buyer' ? 'indigo' : 'emerald';
  const accentFrom = userRole === 'buyer' ? 'from-indigo-600' : 'from-emerald-600';
  const accentTo = userRole === 'buyer' ? 'to-indigo-700' : 'to-emerald-700';
  const accentHoverFrom = userRole === 'buyer' ? 'hover:from-indigo-500' : 'hover:from-emerald-500';
  const accentHoverTo = userRole === 'buyer' ? 'hover:to-indigo-600' : 'hover:to-emerald-600';
  const accentLink = userRole === 'buyer' ? 'text-indigo-400 hover:text-indigo-300' : 'text-emerald-400 hover:text-emerald-300';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 bg-${accentColor}-600/10 rounded-full blur-3xl`}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Card Container */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-gray-400">
              {isSignUp 
                ? `Sign up as a ${userRole} to get started` 
                : `Sign in to your ${userRole} account`}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Signup only) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-white mb-3">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border-2 rounded-lg focus:outline-none transition text-white placeholder:text-gray-500 ${
                      focusedField === 'name' 
                        ? `border-${accentColor}-500 bg-gray-800`
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border-2 rounded-lg focus:outline-none transition text-white placeholder:text-gray-500 ${
                    focusedField === 'email' 
                      ? `border-${accentColor}-500 bg-gray-800`
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                />
              </div>
            </div>

            {/* Phone Field (Signup only) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-white mb-3">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border-2 rounded-lg focus:outline-none transition text-white placeholder:text-gray-500 ${
                      focusedField === 'phone' 
                        ? `border-${accentColor}-500 bg-gray-800`
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-white">Password</label>
                {!isSignUp && (
                  <Link href="#" className={`text-sm font-medium transition ${accentLink}`}>
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-12 py-3 bg-gray-800/50 border-2 rounded-lg focus:outline-none transition text-white placeholder:text-gray-500 ${
                    focusedField === 'password' 
                      ? `border-${accentColor}-500 bg-gray-800`
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Password Confirmation (Signup only) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-white mb-3">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    className={`w-full pl-12 pr-12 py-3 bg-gray-800/50 border-2 rounded-lg focus:outline-none transition text-white placeholder:text-gray-500 border-gray-700 hover:border-gray-600`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400 transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            {/* Terms (Signup only) */}
            {isSignUp && (
              <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-gray-600 bg-gray-800 accent-indigo-600 cursor-pointer" 
                />
                <span className="text-xs text-gray-400 group-hover:text-gray-300">
                  I agree to the{' '}
                  <Link href="#" className={`font-semibold transition ${accentLink}`}>
                    Terms of Service
                  </Link>
                </span>
              </label>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !formData.email || !formData.password}
              className={`w-full py-3 font-bold rounded-lg transition duration-300 text-white flex items-center justify-center gap-2 shadow-lg ${accentFrom} ${accentTo} ${accentHoverFrom} ${accentHoverTo} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin">
                    <ArrowRight size={20} />
                  </div>
                  {isSignUp ? 'Creating Account...' : 'Signing in...'}
                </>
              ) : (
                <>
                  {isSignUp ? 'Create Account' : 'Sign In'}
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-500 text-sm">or continue with</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: FcGoogle, label: 'Google', provider: 'google' },
              { icon: FaApple, label: 'Apple', provider: 'apple', color: 'text-white' },
              { icon: FaMicrosoft, label: 'Microsoft', provider: 'microsoft', color: 'text-blue-400' },
            ].map(({ icon: Icon, label, provider, color }) => (
              <button
                key={provider}
                type="button"
                onClick={() => handleOAuthLogin(provider)}
                disabled={oauthLoading !== null}
                className="py-3 px-4 bg-gray-800/50 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
                title={`Sign ${isSignUp ? 'up' : 'in'} with ${label}`}
              >
                <Icon size={20} className={color} />
                {oauthLoading === provider && (
                  <span className="animate-spin text-xs">⚙️</span>
                )}
              </button>
            ))}
          </div>

          {/* Footer Link */}
          <p className="text-center text-gray-400 text-sm mt-6">
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
            <Link 
              href={isSignUp ? '/auth/login' : '/auth/signup'} 
              className={`font-semibold transition ${accentLink}`}
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </Link>
          </p>

          {/* Agreement Link */}
          <p className="text-center text-gray-500 text-xs mt-4">
            <Link href="#" className={`transition ${accentLink}`}>
              Learn user license agreement
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
