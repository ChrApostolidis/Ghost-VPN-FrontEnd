import { useState } from "react";
import FeatureButton from "./FeatureButton";
import { faqs } from "../data/FaqData";

export default function FaqContent() {
  const tabs = ["VPN", "Streaming", "Security", "Legal"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleChange = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  }

  return (
    <div className="bg-secondary py-10">
      <div className="text-center text-white">
        <p className="text-primary text-lg">Your Questions</p>
        <p className="text-primary text-lg mb-6">Our Answers</p>
        <h3 className="text-5xl font-semibold mb-5">FAQs</h3>
      </div>
      <div className="grid grid-cols-2 gap-1 lg:grid-cols-4 lg:p-4">
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
        {selectedTab === "VPN" && (
          <div className="text-white mt-10 px-1">
            <ul>
              {faqs.VPN.map((item) => (
                <li className="border-solid border-2 rounded-2xl border-third px-2 py-2 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{item.question}</h4>
                    <button
                      onClick={() => toggleChange(item.id)}
                      className="text-white text-3xl"
                    >
                      {isOpen === item.id ? "-" : "+"}
                    </button>
                  </div>
                  {isOpen === item.id && <p className="text-sm">{item.answer}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedTab === "Streaming" && (
          <div className="text-white mt-10 px-1">
            <ul>
              {faqs.Streaming.map((item) => (
                <li className="border-solid border-2 rounded-2xl border-third px-2 py-2 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{item.question}</h4>
                    <button
                      onClick={() => toggleChange(item.id)}
                      className="text-white text-3xl"
                    >
                      {isOpen === item.id ? "-" : "+"}
                    </button>
                  </div>
                  {isOpen === item.id && <p className="text-sm">{item.answer}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedTab === "Security" && (
         <div className="text-white mt-10 px-1">
            <ul>
              {faqs.Security.map((item) => (
                <li className="border-solid border-2 rounded-2xl border-third px-2 py-2 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{item.question}</h4>
                    <button
                      onClick={() => toggleChange(item.id)}
                      className="text-white text-3xl"
                    >
                      {isOpen === item.id ? "-" : "+"}
                    </button>
                  </div>
                  {isOpen === item.id && <p className="text-sm">{item.answer}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedTab === "Legal" && (
          <div className="text-white mt-10 px-1">
            <ul>
              {faqs.Legal.map((item) => (
                <li className="border-solid border-2 rounded-2xl border-third px-2 py-2 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{item.question}</h4>
                    <button
                      onClick={() => toggleChange(item.id)}
                      className="text-white text-3xl"
                    >
                      {isOpen === item.id ? "-" : "+"}
                    </button>
                  </div>
                  {isOpen === item.id && <p className="text-sm">{item.answer}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
