import { useState } from "react";
import FeatureTab from "./FeatureTab";
import MainFeatureContent from "./MainFeatureContent";

export default function MainContentFeatures() {
  const [selectedTab, setSelectedTab] = useState("Privacy");

  return (
    <div className="bg-secondary">
      <h2 className="text-white text-2xl font-bold text-center py-4 lg:text-4xl ">
        Why people love to use Ghost VPN as their main VPN.
      </h2>
      <p className="text-gray-400 text-center lg:text-xl">
        Ghost VPN offers a range of features that ensure a secure and private
        browsing experience.
      </p>
      <FeatureTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <MainFeatureContent selectedTab={selectedTab} />
    </div>
  );
}
