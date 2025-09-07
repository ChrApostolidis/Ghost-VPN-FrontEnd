import type { FaqCategory } from "../data/FaqData";
import { motion } from "framer-motion";
import { faqs } from "../data/FaqData";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleChange = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };

  return (
    <div className="text-white mt-10 px-1">
      <motion.ul variants={listVariants} initial="hidden" animate="visible">
      {faqs[FaqSelection].map((item) => (
          <motion.li
            key={item.id}
            variants={itemVariants}
            className="border-solid border-2 rounded-2xl border-third px-2 py-2 mb-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold">{item.question}</h4>
              <button
                onClick={() => toggleChange(item.id)}
                className="text-white text-3xl"
              >
                {isOpen === item.id ? "-" : "+"}
              </button>
            </div>
            {isOpen === item.id && <p className="text-sm">{item.answer}</p>}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
