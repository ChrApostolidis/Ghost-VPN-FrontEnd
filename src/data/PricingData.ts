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
  "Priority support and live chat",
];

const unlimitedFeatures = [
  "All included features of premium",
  "Customer support 24/7",
  "Access to the latest features",
  "Access to all our products",
];

export const pricingPlans = [
  {
    title: "GhostVPN Free Version",
    price: 0.0,
    userMessage: "Get Started for Free",
    features: basicFeatures,
    featuresMessage: "Security and privacy for everyone",
    plan: "free",
  },
  {
    title: "Premium",
    price: 9.99,
    userMessage: "Upgrade to Premium",
    features: premiumFeatures,
    featuresMessage: "Advanced features and fastest VPN speeds",
    plan: "premium",
  },
  {
    title: "Unlimited",
    price: 14.99,
    userMessage: "Upgrade to Unlimited",
    features: unlimitedFeatures,
    featuresMessage: "Access all premium features and newest updates",
    plan: "unlimited",
  },
];
