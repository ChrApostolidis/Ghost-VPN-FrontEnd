import { motion } from "framer-motion";

export default function FeatureButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <motion.button
      className={`${className} cursor-pointer border-2 font-bold py-2 px-4 rounded-2xl mx-2 mt-2 `}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 15px rgba(0, 255, 150, 0.8)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
