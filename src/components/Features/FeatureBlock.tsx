// Not used

import { motion } from "framer-motion";
import MainButton from "../Reusable/MainButton";
import { useState } from "react";

type Feature = {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
};

export default function FeatureBlock({ feature, openModal }: { feature: Feature; openModal: () => void }) {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className="flex flex-col p-2 lg:flex-row lg:gap-6">
      <div className="lg:w-120 flex flex-col justify-center items-center gap-1.5">
        <motion.h3
          className="text-primary text-2xl px-4 mb-2 lg:text-center lg:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {feature.title} Features
        </motion.h3>
        <motion.p
          className="text-center text-white text-xl lg:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {feature.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <MainButton onClick={openModal} className="mt-4 lg:text-2xl">
            Get Started with GhostVPN
          </MainButton>
        </motion.div>
      </div>

      <div className="lg:w-full p-1 mt-4 relative overflow-hidden">
        {/* Spinner shown while the image is loading - positioned absolutely to center over the image area */}
        {imgLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span
              className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"
              aria-hidden="true"
            />
          </div>
        )}

        <motion.img
          src={`${feature.image}`}
          alt={`${feature.title} image`}
          loading="lazy"
          className={`rounded-2xl transition-opacity duration-300 w-full h-auto object-cover ${imgLoading ? "opacity-0" : "opacity-100"}`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: imgLoading ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onLoad={() => setImgLoading(false)}
          onError={() => setImgLoading(false)}
        />
      </div>
    </div>
  );
}