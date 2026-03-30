'use client';

import type { SVGProps } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { Button_v4 } from './Button_v4';

interface GlassMorphismAuthProps {
  mode: 'signin' | 'signup';
  onSubmit?: (data: any) => void;
}

function GoogleIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      height="100"
      viewBox="0 0 48 48"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Google Logo</title>
      <path
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        fill="#FFC107"
      />
      <path
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        fill="#FF3D00"
      />
      <path
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        fill="#4CAF50"
      />
      <path
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        fill="#1976D2"
      />
    </svg>
  );
}

export default function GlassMorphismAuth({ mode, onSubmit }: GlassMorphismAuthProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isSignUp = mode === 'signup';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        console.log('Form data:', formData);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex size-full min-h-screen items-center justify-center bg-[url('https://images.unsplash.com/photo-1692606674482-effe67e384d9?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover px-2 py-6 md:px-12 lg:justify-end lg:p-0">
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 lg:hidden"></div>

      <div className="relative z-10 flex flex-1 flex-col rounded-3xl border-white/50 border-t bg-white/60 px-4 py-10 backdrop-blur-2xl sm:justify-center md:flex-none md:px-20 lg:rounded-r-none lg:border-t-0 lg:border-l lg:py-24">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          {/* Header */}
          <div>
            <h1 className="font-semibold text-3xl text-neutral-900 tracking-tighter">
              {isSignUp ? (
                <>
                  Create account, <br />
                  <span className="text-neutral-600">join us today</span>
                </>
              ) : (
                <>
                  Welcome back, <br />
                  <span className="text-neutral-600">sign in to continue</span>
                </>
              )}
            </h1>
            <p className="mt-4 font-medium text-base text-neutral-500">
              {isSignUp
                ? 'Sign up to start buying and selling products in your local marketplace'
                : 'Access your account and continue shopping'}
            </p>
          </div>

          {/* OAuth Button */}
          <div className="mt-8">
            <Button_v4
              type="button"
              className="w-full"
            >
              <GoogleIcon className="size-6 mr-2" />
              <span>
                {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
              </span>
            </Button_v4>

            {/* Divider */}
            <div className="relative py-3">
              <div className="relative flex justify-center">
                <span className="before:-translate-y-1/2 after:-translate-y-1/2 px-2 text-neutral-500 text-sm before:absolute before:top-1/2 before:left-0 before:h-px before:w-4/12 after:absolute after:top-1/2 after:right-0 after:h-px after:w-4/12 before:bg-neutral-300 after:bg-neutral-300">
                  Or continue with email
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-3">
              {/* First Name - Only for Signup */}
              {isSignUp && (
                <div>
                  <label
                    className="mb-3 block font-medium text-black text-sm"
                    htmlFor="firstName"
                  >
                    Full Name
                  </label>
                  <input
                    className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-amber-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:text-sm"
                    id="firstName"
                    name="firstName"
                    placeholder="Your name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required={isSignUp}
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label
                  className="mb-3 block font-medium text-black text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-amber-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:text-sm"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="mb-3 block font-medium text-black text-sm"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-amber-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:text-sm"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 transition"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password - Only for Signup */}
              {isSignUp && (
                <div>
                  <label
                    className="mb-3 block font-medium text-black text-sm"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-amber-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:text-sm"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required={isSignUp}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 transition"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="col-span-full pt-2">
                <Button_v4
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </Button_v4>
              </div>
            </div>

            {/* Footer Link */}
            <div className="mt-6">
              <p className="mx-auto flex text-center font-medium text-black text-sm leading-tight gap-1">
                {isSignUp ? (
                  <>
                    Already have an account?
                    <Link href="/auth/login" className="text-amber-500 hover:text-black transition ml-1">
                      Sign in
                    </Link>
                  </>
                ) : (
                  <>
                    Don't have an account?
                    <Link href="/auth/signup" className="text-amber-500 hover:text-black transition ml-1">
                      Sign up
                    </Link>
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
