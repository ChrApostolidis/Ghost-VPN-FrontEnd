
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function AnimatedPrice({ value }: { value: number }) {
  const count = useMotionValue(value);

  const smooth = useSpring(count, { stiffness: 100, damping: 20 });

  const display = useTransform(smooth, (latest) => `$${latest.toFixed(2)}`);

  useEffect(() => {
    count.set(value);
  }, [value, count]);

  return <motion.span className="text-4xl font-bold">{display}</motion.span>;
}
