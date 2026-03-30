"use client";
import { motion, useInView } from "motion/react";
import { useRef, ReactNode, ElementType } from "react";

interface TimelineContentProps {
  as?: ElementType;
  children: ReactNode;
  animationNum: number;
  timelineRef: React.RefObject<HTMLDivElement>;
  customVariants?: any;
  className?: string;
  [key: string]: any;
}

export function TimelineContent({
  as: Component = "div",
  children,
  animationNum,
  timelineRef,
  customVariants,
  className = "",
  ...props
}: TimelineContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const defaultVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <motion.div
      ref={ref}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      {typeof Component === "string" ? (
        <Component className={className}>{children}</Component>
      ) : (
        <Component className={className}>{children}</Component>
      )}
    </motion.div>
  );
}
