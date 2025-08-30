import { useState } from "react";
import PricingCard from "./PricingCard";
import { motion } from "framer-motion";
import {
  pricingPlansMonthly,
  pricingPlans2Years,
  pricingPlansYearly,
} from "../data/PricingData";

type Duration = "1 Month" | "1 Year" | "2 Years";
type PlanType = "free" | "premium" | "unlimited";

export default function PricingPlan() {
  const [plan, setPlan] = useState<Duration>("1 Month");
  const tabs: Duration[] = ["1 Month", "1 Year", "2 Years"];

  return (
    <div className="flex flex-col items-center justify-center py-3 bg-gray-900">
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-white text-3xl font-bold">Pricing Plans</h2>
        <p className="text-gray-400">Choose a plan that suits your needs.</p>
      </div>
      <div className="flex gap-2 border-solid border-2  border-primary rounded-2xl mb-2 lg:mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setPlan(tab)}
            className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors lg:text-2xl cursor-pointer
            ${plan === tab ? "text-black" : "text-primary"}`}
          >
            {plan === tab && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 rounded-lg bg-primary"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-20">{tab}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:gap-10">
        {(plan === "1 Month"
          ? pricingPlansMonthly
          : plan === "1 Year"
          ? pricingPlansYearly
          : pricingPlans2Years
        ).map((p) => (
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
