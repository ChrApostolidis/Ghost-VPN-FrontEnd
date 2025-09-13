import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        key="modal"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col bg-white rounded-xl shadow-lg p-8 w-[800px] h-[400px]"
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button onClick={onClose} aria-label="Close modal">
            <FiX className="w-8 h-8 text-black cursor-pointer hover:text-red-500 transition" />
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Thanks for visiting!
        </h2>

        {/* Context / About */}
        <p className="text-lg text-gray-700 leading-relaxed">
          This project was built to demonstrate my skills in modern web
          development, with a focus on creating professional, responsive
          interfaces. While it simulates an e-commerce experience, the primary
          goal is to showcase design, functionality, and attention to detail.
        </p>

        {/* Social links */}
        <div className="text-black text-center mt-auto">
          <div className="flex gap-6 justify-center items-center mb-6">
            <a
              href="https://github.com/ChrApostolidis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-4xl hover:text-primary transition" />
            </a>
            <a
              href="https://linkedin.com/in/chr-apostolidis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-4xl hover:text-primary transition" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Chris Apostolidis. All rights
            reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
