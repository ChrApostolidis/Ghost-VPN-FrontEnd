import PricingCard from "./PricingCard";

const basicFeatures = [
  "Privacy across all platforms",
  "Secure 1 device at a time",
  "Medium VPN speed",
];

const premiumFeatures = [
  "Privacy across all platforms",
  "Secure up to 10 devices",
  "High VPN speed",
  "Choose from 13000+ servers",
  "Ad-blocker included",
  "Priority support and live chat"
];

const unlimitedFeatures = [
  "All included features of premium",
  "Customer support 24/7",
  "Access to the latest features",
  "Access to all our products"
];

export default function PricingPlan() {
  return (
    <div className="flex flex-col items-center justify-center py-3 bg-gray-900">
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-white text-3xl font-bold">Pricing Plans</h2>
        <p className="text-gray-400">Choose a plan that suits your needs.</p>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:gap-10">
        <PricingCard title="GhostVPN Free Version" price={"0.00"} userMessage="Get Started for Free" features={basicFeatures} featuresMessage="Security and privacy for everyone" plan="free" />
        <PricingCard title="Premium" price={9.99} userMessage="Upgrade to Premium" features={premiumFeatures} featuresMessage="Advanced features and fastest VPN speeds" plan="premium" />
        <PricingCard title="Unlimited" price={14.99} userMessage="Upgrade to Unlimited" features={unlimitedFeatures} featuresMessage="Access all premium features and newest updates" plan="unlimited" />
      </div>
    </div>
  );
}
