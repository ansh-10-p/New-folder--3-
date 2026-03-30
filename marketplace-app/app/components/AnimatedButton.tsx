'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  href?: string;
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function AnimatedButton({
  href = '/auth/signup',
  text = 'Get Started',
  onClick,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const Button = (
    <button
      onClick={onClick}
      className={`group/btn relative flex items-center justify-between px-6 py-3 h-11 overflow-hidden rounded-2xl font-semibold text-white transition-all duration-300 cursor-pointer ${
        variant === 'primary'
          ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50'
          : 'bg-gradient-to-r from-purple-700 to-purple-800'
      } ${className}`}
      style={{
        boxShadow: variant === 'primary' ? 'inset 0 0 1.6em -0.6em #714da6' : 'none',
      }}
    >
      {/* Button text */}
      <span className="relative flex-1 text-center pr-4">{text}</span>

      {/* Icon Container with expanding animation */}
      <div
        className="absolute right-1 flex items-center justify-center h-9 w-9 rounded-lg bg-white transition-all duration-300 group-hover/btn:w-[calc(100%-0.6em)] group-hover/btn:right-1"
        style={{
          boxShadow: '0.1em 0.1em 0.6em 0.2em rgba(123, 82, 185, 0.4)',
        }}
      >
        <ArrowRight
          size={18}
          className="text-purple-700 transition-transform duration-300 group-hover/btn:translate-x-0.5"
        />
      </div>

      {/* Active state scale effect */}
      <style>{`
        button:active {
          transform: scale(0.97);
        }
      `}</style>
    </button>
  );

  if (href) {
    return <Link href={href}>{Button}</Link>;
  }

  return Button;
}
