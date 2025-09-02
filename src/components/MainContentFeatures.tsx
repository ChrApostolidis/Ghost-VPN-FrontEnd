import { useState } from "react";
import FeatureButton from "./FeatureButton";
import MainButton from "./MainButton";

export default function MainContentFeatures() {
  const [selectedTab, setSelectedTab] = useState("Privacy");
  const tabs: string[] = ["Privacy", "Speed", "Security", "Service"];
  const tabsContent = {
    Privacy: (
      <p className="text-lg text-white pl-4">
        GhostVPN hides your IP and encrypts your data, keeping you invisible
        online. No trackers, no footprints—just true digital freedom.
      </p>
    ),
    Speed: (
      <p className="text-lg text-white pl-4">
        Enjoy lightning-fast speeds with GhostVPN. Stream, download, and browse
        without interruptions.
      </p>
    ),
    Security: (
      <p className="text-lg text-white pl-4">
        Your security is our priority. GhostVPN uses advanced encryption
        protocols to keep your data safe.
      </p>
    ),
    Service: (
      <p className="text-lg text-white pl-4">
        Experience top-notch customer service with GhostVPN. We're here to
        help you 24/7.
      </p>
    ),
  };

  return (
    <div className="bg-secondary">
      <h2 className="text-white text-2xl font-bold text-center py-4 lg:text-4xl ">
        Why people love to use Ghost VPN as their main VPN.
      </h2>
      <p className="text-gray-400 text-center lg:text-xl">
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
      <div className="border-1 border-solid border-gray-400 mt-4">
        <div className="flex flex-col p-2 lg:flex-row">
          <div className="lg:w-120 flex flex-col justify-center items-center gap-1.5">
            <h3 className="text-primary text-2xl px-4 mb-2 lg:text-center">{selectedTab} Features</h3>
            <p className="text-lg text-white pl-4 lg:pl-0 ">
              {tabsContent[selectedTab as keyof typeof tabsContent]}
            </p>
            <MainButton className="mt-4">
              Get Started with GhostVPN
            </MainButton>
          </div>          
        </div>
      </div>
    </div>
  );
}
