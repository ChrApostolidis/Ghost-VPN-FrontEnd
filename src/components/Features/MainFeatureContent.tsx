import MainButton from "../MainComponents/MainButton";
import { featuresData } from "../../data/FeatureData";

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
            <div className="flex flex-col p-2 lg:flex-row">
              <div className="lg:w-120 flex flex-col justify-center items-center gap-1.5">
                <h3 className="text-primary text-2xl px-4 mb-2 lg:text-center lg:text-4xl">
                  {feature.title} Features
                </h3>
                <p key={feature.id}>{feature.description}</p>
              </div>
              <div className="lg:w-full p-1">
                <img
                  src={`./MainFeatures/${feature.image}.jpg`}
                  alt={`${feature.title} image`}
                  className="rounded-2xl"
                />
              </div>

              <MainButton className="mt-4 lg:text-2xl">
                Get Started with GhostVPN
              </MainButton>
            </div>
          )
      )}
    </div>
  );
}
