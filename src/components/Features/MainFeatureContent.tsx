import MainButton from "../MainComponents/MainButton";
import { featuresData } from "../../data/FeatureData";
import { motion } from "framer-motion";

export default function MainFeatureContent({
  selectedTab,
}: {
  selectedTab: string;
}) {
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
                  <h3 className="text-primary text-2xl px-4 mb-2 lg:text-center lg:text-4xl">
                    {feature.title} Features
                  </h3>
                  <p
                    className="text-center text-white text-xl lg:text-2xl"
                    key={feature.id}
                  >
                    {feature.description}
                  </p>
                  <MainButton className="mt-4 lg:text-2xl">
                    Get Started with GhostVPN
                  </MainButton>
                </div>
                <div className="lg:w-full p-1 mt-4">
                  <motion.img
                    src={`${feature.image}`}
                    alt={`${feature.title} image`}
                    className="rounded-2xl"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1.2,
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
