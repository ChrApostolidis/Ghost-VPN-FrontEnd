import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type RevealTextProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
  delay?: number;
};

export default function RevealText({
  children,
  direction = "left",
  className = "flex justify-center items-center",
  delay = 0,
}: RevealTextProps) {
  const reduce = useReducedMotion();

  const distance = 80;
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -distance : distance,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      initial={reduce ? { opacity: 1, x: 0 } : "hidden"}
      whileInView={reduce ? { opacity: 1, x: 0 } : "visible"}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
