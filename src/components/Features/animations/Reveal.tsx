import { motion } from "framer-motion";

export default function Reveal({
  children,
  direction
}: {
  children: React.ReactNode;
  direction: "left" | "right";
}) {
  return (
    <div className="overflow-hidden relative w-[500px] py-4">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: direction === "right" ? 150 : -150 },   
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
