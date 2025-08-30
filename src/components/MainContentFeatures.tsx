import { useState } from "react";
import FeatureButton from "./FeatureButton";

export default function MainContentFeatures() {
  const [selectedTab, setSelectedTab] = useState("Privacy");
  const tabs = ["Privacy", "Speed", "Security", "Service"];

  return (
    <div className="bg-secondary">
      <h2 className="text-white text-2xl font-bold text-center">
        Why people love to use Ghost VPN as their main VPN.
      </h2>
      <p className="text-gray-400 text-center">
        Ghost VPN offers a range of features that ensure a secure and private
        browsing experience.
      </p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:p-4">
        {tabs.map((tab) => (
          <FeatureButton
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={
              selectedTab === tab
                ? "bg-primary text-secondary"
                : "text-white border-primary"
            }
          >
            {tab}
          </FeatureButton>
        ))}
      </div>
      <div></div>
    </div>
  );
}
