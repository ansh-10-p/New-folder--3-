'use client';

import { useEffect, useRef } from 'react';

interface FadeTextProps {
  text: string;
  direction?: 'in' | 'out';
  wordDelay?: number;
  className?: string;
  containerClassName?: string;
}

export function FadeText({
  text,
  direction = 'in',
  wordDelay = 0.1,
  className = '',
  containerClassName = '',
}: FadeTextProps) {
  const words = text.split(' ');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const wordElements = containerRef.current.querySelectorAll('span');
    
    wordElements.forEach((word, index) => {
      const delay = index * (wordDelay * 1000);
      
      if (direction === 'in') {
        word.style.animation = `fadeIn 0.6s ease-out ${delay}ms forwards`;
      } else {
        word.style.animation = `fadeOut 0.6s ease-out ${delay}ms forwards`;
      }
    });
  }, [direction, wordDelay]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap gap-1 ${containerClassName}`}
      style={{
        perspective: '1000px',
      }}
    >
      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
      
      {words.map((word, index) => (
        <span
          key={index}
          className={className}
          style={{
            opacity: direction === 'out' ? 1 : 0,
            display: 'inline-block',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
