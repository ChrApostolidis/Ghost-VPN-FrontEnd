// import { useState } from "react";
// // import FeatureButton from "../FeatureButton";
// import MainButton from "../MainComponents/MainButton";
import { useState } from "react";
import FeatureTab from "../Features/FeatureTab";
import MainFeatureContent from "../Features/MainFeatureContent";

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

{
  /* <MainFeatureContent */
}
{
  /* <FeatureTab /> */
}
{
  /* <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:p-4 lg">
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
</div> */
}
{
  /* <FeatureTab /> */
}
{
  /* <div className="flex flex-col border-1 border-solid gap-6 rounded-2xl border-gray-400 mt-4 lg:flex-row lg:mx-auto lg:w-6xl lg:p-6 lg:rounded-2xl">
  <div className="flex flex-col p-2 lg:flex-row">
    <div className="lg:w-120 flex flex-col justify-center items-center gap-1.5">
      <h3 className="text-primary text-2xl px-4 mb-2 lg:text-center lg:text-4xl">
        {selectedTab} Features
      </h3>
      <div>{tabsContent[selectedTab as keyof typeof tabsContent]}</div>
      <MainButton className="mt-4 lg:text-2xl">
        Get Started with GhostVPN
      </MainButton>
    </div>
  </div>
  <div className="lg:w-full p-1">
    <img
      src="./MainFeatures/privacy.jpg"
      alt="Main Features"
      className="rounded-2xl"
    />
  </div>
</div> */
}
{
  /* <MainFeatureContent */
}
