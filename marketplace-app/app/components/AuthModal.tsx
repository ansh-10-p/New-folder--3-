'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button_v4 } from './Button_v4';

interface AuthModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AuthModal({ isOpen = true, onClose }: AuthModalProps) {
  const [showModal, setShowModal] = useState(isOpen);
  const [oauthLoading, setOauthLoading] = useState<string | null>(null);

  // Auto-open on first visit (check localStorage)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasVisited = localStorage.getItem('marketplace_visited');
      if (!hasVisited) {
        setShowModal(true);
        localStorage.setItem('marketplace_visited', 'true');
      }
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    onClose?.();
  };

  const handleOAuthLogin = async (provider: string) => {
    setOauthLoading(provider);
    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setOauthLoading(null);
  };

  if (!showModal) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="w-full max-w-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 hover:bg-slate-700 rounded-lg transition z-10"
          >
            <X size={24} className="text-gray-400 hover:text-white transition" />
          </button>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Branding & Text */}
            <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-slate-800 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-8">
                <div>
                  <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter block mb-6">
                    IN
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 leading-tight mb-4">
                    MarketPlace is the fastest growing local commerce platform!
                  </h2>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                  Join thousands of buyers and sellers. Personalized experience, secure transactions, and real community support. Maybe ;)
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-indigo-400">10K+</div>
                    <p className="text-xs text-gray-400 mt-1">Active Users</p>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-emerald-400">5K+</div>
                    <p className="text-xs text-gray-400 mt-1">Products</p>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-pink-400">99%</div>
                    <p className="text-xs text-gray-400 mt-1">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Options */}
            <div className="p-8 md:p-12 flex flex-col justify-between space-y-6">
              {/* Header */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Join MarketPlace</h3>
                <p className="text-gray-400">Choose how you'd like to get started</p>
              </div>

              {/* OAuth Buttons */}
              <div className="space-y-4">
                <div className="flex gap-3 items-center justify-center">
                  <Button_v4
                    onClick={() => handleOAuthLogin('google')}
                    disabled={oauthLoading !== null}
                    size="icon"
                    className="rounded-full h-12 w-12 flex-shrink-0"
                    title="Continue with Google"
                  >
                    {oauthLoading === 'google' ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <FcGoogle size={20} />
                    )}
                  </Button_v4>

                  <Button_v4
                    onClick={() => handleOAuthLogin('github')}
                    disabled={oauthLoading !== null}
                    size="icon"
                    className="rounded-full h-12 w-12 flex-shrink-0"
                    title="Continue with GitHub"
                  >
                    {oauthLoading === 'github' ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <FaGithub size={20} />
                    )}
                  </Button_v4>
                  
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                </div>

                <Button_v4
                  onClick={() => window.location.href = '/auth/signup'}
                  className="w-full"
                >
                  <span>Continue with Email</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button_v4>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-700" />
                <span className="text-gray-500 text-sm">OR</span>
                <div className="flex-1 h-px bg-slate-700" />
              </div>

              {/* Signup Options */}
              <div className="space-y-3">
                <Button_v4
                  onClick={() => window.location.href = '/auth/signup?role=buyer'}
                  className="w-full"
                >
                  <span>Sign Up as Buyer</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button_v4>

                <Button_v4
                  onClick={() => window.location.href = '/auth/signup?role=seller'}
                  className="w-full"
                >
                  <span>Sign Up as Seller</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button_v4>
              </div>

              {/* Footer */}
              <div className="space-y-3 text-center text-sm">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-indigo-400 font-semibold hover:text-indigo-300 transition">
                    Log in
                  </Link>
                </p>

                <p className="text-gray-500 text-xs">
                  By continuing, you agree to our{' '}
                  <Link href="#" className="text-indigo-400 hover:text-indigo-300 transition">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link href="#" className="text-indigo-400 hover:text-indigo-300 transition">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
