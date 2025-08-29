import { useState } from "react";
import PlanButton from "./PlanButton";
import PricingCard from "./PricingCard";
import { pricingPlans } from "../data/PricingData";

type Duration = "monthly" | "yearly" | "2years";
type PlanType = "free" | "premium" | "unlimited";

export default function PricingPlan() {
  const [duration, setDuration] = useState<Duration>("monthly");

  return (
    <div className="flex flex-col items-center justify-center py-3 bg-gray-900">
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-white text-3xl font-bold">Pricing Plans</h2>
        <p className="text-gray-400">Choose a plan that suits your needs.</p>
      </div>
      <div className="flex gap-2 border-solid border-1  border-primary rounded-2xl mb-2">
        <PlanButton userMessage="1 Month" />
        <PlanButton userMessage="1 Year" />
        <PlanButton userMessage="2 Years" />
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:gap-10">
       {pricingPlans.map((p) => (
          <PricingCard
            key={p.title}
            title={p.title}
            price={p.price}
            userMessage={p.userMessage}
            features={p.features}
            featuresMessage={p.featuresMessage}
            plan={p.plan as PlanType}
          />
        ))}
      </div>
    </div>
  );
}
