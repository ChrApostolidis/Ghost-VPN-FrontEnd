import { motion } from "framer-motion";

export default function RevealTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-2xl lg:text-5xl text-white text-center"
    >
      {children}
    </motion.h3>
  );
}
