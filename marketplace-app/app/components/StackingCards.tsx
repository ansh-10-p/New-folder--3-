'use client';

import React, { ReactNode, useState, ReactElement } from 'react';

interface StackingCardItemProps {
  children: ReactNode;
  className?: string;
}

interface StackingCardsProps {
  children: ReactElement<StackingCardItemProps>[];
  className?: string;
  maxVisible?: number;
}

export const StackingCardItem: React.FC<StackingCardItemProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export const StackingCards: React.FC<StackingCardsProps> = ({ 
  children, 
  className = '',
  maxVisible = 3 
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardsArray = React.Children.toArray(children) as ReactElement<StackingCardItemProps>[];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="perspective">
        {cardsArray.map((card, index) => {
          const isVisible = index < maxVisible;
          const offset = index * 12;
          const zIndex = cardsArray.length - index;
          const isHovered = hoveredIndex === index;
          const scale = isHovered ? 1.05 : 1 - (index * 0.03);
          
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: `translateY(${offset}px) scale(${scale})`,
                zIndex: isHovered ? 1000 : zIndex,
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
              className={`absolute w-full transition-all duration-300 ease-out ${
                isHovered ? 'shadow-2xl' : 'shadow-lg'
              }`}
            >
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
};
