import type { FaqCategory } from "../../data/FaqData";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../../data/FaqData";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

// framer-motion imports
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContainerQA({
  FaqSelection,
}: {
  FaqSelection: FaqCategory;
}) {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleChange = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="text-white mt-10 px-1">
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {faqs[FaqSelection].map((item) => (
          <motion.li
            key={item.id}
            variants={itemVariants}
            className="border-solid border-2 rounded-2xl border-third px-2 py-2 mb-4"
          >
            <div className="flex justify-between items-center mb-2">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleChange(item.id)}
              >
                <h4 className="text-base font-semibold lg:text-2xl">
                  {item.question}
                </h4>

                <AnimatePresence mode="wait" initial={false}>
                  {openIds.includes(item.id) ? (
                    <motion.div
                      key="x-icon"
                      initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    >
                      <FiX className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="plus-icon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    >
                      <FiPlus className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {openIds.includes(item.id) && (
                <motion.div
                  key={item.id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden mt-2 text-third lg:text-lg"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
