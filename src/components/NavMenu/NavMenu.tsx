import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { NavMenuItem } from "../HeaderComp/Header";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function NavMenuButton({ items }: { items: NavMenuItem[] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-[#33d36e] rounded-2xl hover:cursor-pointer flex items-center justify-center p-1 m-2 lg:hidden">
      <button
        onClick={() => setMenuOpen(() => !menuOpen)}
        className="w-10 h-10 flex items-center justify-center relative lg:hidden"
      >
        <span className="relative w-6 h-6">
          <motion.span
            style={{ transformOrigin: "center" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-0.5 w-6 bg-white rounded"
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.20 }}
          />
          <motion.span
            style={{ transformOrigin: "center" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block h-0.5 w-6 bg-white rounded"
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.20 }}
          />
        </span>
      </button>
      <AnimatePresence>
        {menuOpen && (
          <div className="absolute right-1.5 mt-70">
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-4"
            >
              {items.map(({ name, link, icon }) => (
                <motion.li
                  variants={itemVariants}
                  className="border-2 p-2 rounded-2xl border-primary bg-black"
                  key={name}
                >
                  <a
                    href={link}
                    className="text-white text-xl hover:text-[#33d36e] lg:text-2xl"
                  >
                    {icon}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
