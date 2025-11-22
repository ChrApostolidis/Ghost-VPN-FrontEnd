import MainButton from "../Reusable/MainButton";
import RevealText from "./animations/RevealText";
import FeatureCard from "./FeatureCard";

export default function FeaturesContainer() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-secondary">
      {/* Header */}
      <div>
        <h2 className="text-white text-2xl font-bold text-center py-4 lg:text-4xl ">
          Why people love to use Ghost VPN as their main VPN.
        </h2>
        <p className="text-gray-400 text-center lg:text-xl">
          Ghost VPN offers a range of features that ensure a secure and private
          browsing experience.
        </p>
      </div>

      <div className="relative grid grid-cols-2 gap-10 mx-8">
        {/* vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-primary"></div>

        <RevealText direction="left">
          <p className="text-white text-xl w-md lg:text-3xl">
            Your security is our priority. GhostVPN uses advanced encryption
            protocols to keep your data safe.
          </p>
        </RevealText>

        <FeatureCard
          title="Privacy"
          imageSrc="./MainFeatures/privacy.jpg"
          direction="right"
        />

        <FeatureCard
          title="Security"
          imageSrc="./MainFeatures/security.png"
          direction="left"
        />

        <RevealText direction="right">
          <p className="text-white text-xl w-md lg:text-3xl">
            GhostVPN hides your IP and encrypts your data, keeping you invisible
            online. No trackers, no footprints—just true digital freedom.
          </p>
        </RevealText>

        <RevealText direction="left">
          <p className="text-white text-xl w-md lg:text-3xl">
            Experience top-notch customer service with GhostVPN. We're here to
            help you 24/7.
          </p>
        </RevealText>

        <FeatureCard
          title="Support"
          imageSrc="./MainFeatures/support.jpg"
          direction="right"
        />

        <FeatureCard
          title="Speed"
          imageSrc="./MainFeatures/speed.jpg"
          direction="left"
        />

        <RevealText direction="right">
          <p className="text-white text-xl w-md lg:text-3xl">
            Enjoy lightning-fast speeds with GhostVPN. Stream, download, and
            browse without interruptions.
          </p>
        </RevealText>
      </div>
      <MainButton className="my-6">Get Started with GhostVPN</MainButton>
    </div>
  );
}
