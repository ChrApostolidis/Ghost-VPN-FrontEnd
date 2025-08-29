import MainButton from "./MainButton";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import PlanFeatures from "./PlanFeautures";

type PlanType = "free" | "premium" | "unlimited";

interface PricingCardProps {
  title: string;
  price: number | string;
  userMessage: string;
  features: string[];
  featuresMessage: string;
  plan: PlanType;
}

export default function PricingCard({
  title,
  price,
  userMessage,
  features,
  featuresMessage,
  plan,
}: PricingCardProps) {
  return (
    <div id="pricing-card" className="flex flex-col py-5 px-10 bg-gray-700 rounded-2xl mb-5 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
      <div className="w-[15rem] h-[30rem] mx-2 lg:w-[23rem] lg:h-[28rem]">
        <h2 className="text-white text-3xl text-center font-bold">{title}</h2>
        <p className="text-primary text-2xl text-center py-1 font-bold">
          {price}&euro;
          <span className="text-white text-base">/month</span>
        </p>
        <MainButton className="mt-5 w-[15rem] h-10 lg:w-[23.5rem]">
          {userMessage}
        </MainButton>
        <div className="flex items-center justify-center gap-2 my-3">
          {plan === "free" && (
            <>
              <FaRegCreditCard className="text-primary" />
              <p className="text-primary">No Credit Card needed</p>
            </>
          )}
          {(plan === "premium" || plan === "unlimited") && (
            <>
              <FaMoneyBillWave className="text-primary" />
              <p className="text-primary text-sm">30-Day Money back guarantee</p>
            </>
          )}
        </div>
        <p className="mx-2 text-white text-lg text-center font-bold">
          {featuresMessage}
        </p>
        <PlanFeatures features={features} />
      </div>
    </div>
  );
}
