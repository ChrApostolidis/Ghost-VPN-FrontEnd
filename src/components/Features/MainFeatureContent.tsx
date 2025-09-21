import MainButton from "../Reusable/MainButton";
import { featuresData } from "../../data/FeatureData";
import { motion } from "framer-motion";
import { useModal } from "../../ModalContext/UseModal";

export default function MainFeatureContent({
  selectedTab,
}: {
  selectedTab: string;
}) {
  const {openModal} = useModal();
  return (
    <div className="flex flex-col border-1 border-solid gap-6 rounded-2xl border-gray-400 mt-4 lg:flex-row lg:mx-auto lg:w-6xl lg:p-6 lg:rounded-2xl">
      {featuresData.map(
        (feature) =>
          selectedTab === feature.title && (
            <div
              className="flex flex-col p-2 lg:flex-row lg:gap-6"
              key={feature.id}
            >
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
                  key={feature.id}
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
              <div className="lg:w-full p-1 mt-4">
                <motion.img
                  src={`${feature.image}`}
                  alt={`${feature.title} image`}
                  className="rounded-2xl"
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          )
      )}
    </div>
  );
}
