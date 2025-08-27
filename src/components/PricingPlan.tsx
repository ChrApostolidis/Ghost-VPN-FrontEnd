import PricingCard from "./PricingCard";

const basicFeatures = [
  "Privacy across all platforms",
  "Secure 1 device at a time",
  "Medium VPN speed",
];

const premiumFeatures = [
  "Privacy across all platforms",
  "Secure up to 5 devices",
  "High VPN speed",
  "24/7 customer support",
  "Ad-blocker included",
];

export default function PricingPlan() {
  return (
    <div className="flex flex-col items-center justify-center py-3 bg-gray-900">
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-white text-3xl font-bold">Pricing Plans</h2>
        <p className="text-gray-400">Choose a plan that suits your needs.</p>
      </div>
      <PricingCard />
    </div>
  );
}
