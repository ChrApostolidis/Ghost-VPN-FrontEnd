// import { useState } from "react";
import FeatureButton from "../Reusable/FeatureButton";
import type { featureTab } from "../../data/FeatureData";

export default function FeatureTab({selectedTab, setSelectedTab}: {selectedTab: string, setSelectedTab: (tab: string) => void}) {
  const tabs: featureTab = ["Privacy", "Speed", "Security", "Service"];
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:p-4 lg">
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
  );
}
