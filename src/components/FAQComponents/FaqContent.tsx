import { useState } from "react";
import FeatureButton from "../FeatureButton";
import ContainerQA from "./ContainerQA";

export default function FaqContent() {
  const tabs = ["VPN", "Streaming", "Security", "Legal"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="bg-secondary py-10 lg:px-40">
      <div className="text-center text-white">
        <p className="text-primary text-lg">Your Questions</p>
        <p className="text-primary text-lg mb-6">Our Answers</p>
        <h3 className="text-5xl font-semibold mb-5">FAQs</h3>
      </div>
      <div className="grid grid-cols-2 gap-1 lg:grid-cols-4 lg:p-4 lg:w-xl lg:mx-auto">
        {tabs.map((tab) => (
          <FeatureButton
            onClick={() => {
              setSelectedTab(tab);
            }}
            className={
              selectedTab === tab
                ? "bg-primary text-secondary"
                : "text-white border-primary"
            }
            key={tab}
          >
            {tab}
          </FeatureButton>
        ))}
      </div>
      <div>
        {selectedTab === "VPN" && <ContainerQA FaqSelection="VPN" />}
        {selectedTab === "Streaming" && (
          <ContainerQA FaqSelection="Streaming" />
        )}
        {selectedTab === "Security" && <ContainerQA FaqSelection="Security" />}
        {selectedTab === "Legal" && <ContainerQA FaqSelection="Legal" />}
      </div>
    </div>
  );
}
