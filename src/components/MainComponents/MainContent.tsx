import MainButton from "../Reusable/MainButton";
import IconsSlider from "../CompIconSlider/IconsSlider";
import PricingPlan from "../PricingComp/PricingPlan";
import MainContentFeatures from "../Features/MainContentFeatures";
import ExpertReviews from "../ExpertReviewsComp/ExpertReviews";
import FaqContent from "../FAQComponents/FaqContent";
import MainCommunityReviews from "../CommunityReviews/MainCommunityReviews";

export default function MainContent() {
  return (
    <>
      <div className="relative bg-black w-full h-[600px] overflow-hidden lg:h-[450px]">
        <img
          src="World_map_green.png"
          alt="world map"
          className="w-full h-full object-cover opacity-80"
        />
        <h2 className="absolute top-1/10 w-full text-white text-[1.8rem] font-bold text-center lg:text-5xl">
          Our Aim
        </h2>
        <h2 className="text-primary absolute top-[18%] w-full  text-[1.8rem] font-bold text-center lg:text-5xl lg:top-[25%]">
          Always Protected
        </h2>
        <h2 className="absolute top-[27%] w-full text-white text-[1.8rem] font-bold text-center lg:text-5xl lg:top-[40%]  ">
          By Ghost VPN.
        </h2>
        <h1 className="absolute top-4/10 w-full px-4 text-white text-lg font-bold text-center lg:text-2xl lg:top-6/10">
          Your <span className="text-primary">privacy</span> is our
          <span className="text-primary"> priority</span>. Enjoy secure and
          anonymous browsing with GhostVPN.
        </h1>
        <div className="flex items-center justify-center">
          <MainButton className="absolute bottom-2/10 w-[300px] bg-primary text-black font-bold py-2 px-4 rounded lg:bottom-1/10 lg:text-3xl">
            Get Started
          </MainButton>
        </div>
      </div>
      <div id="features">
        <MainContentFeatures />
      </div>
      <div>
        <IconsSlider />
      </div>
      <div id="reviews">
        <MainCommunityReviews />
      </div>
      <div id="pricing-card">
        <PricingPlan />
      </div>
      <div>
        <ExpertReviews />
      </div>
      <div id="faq">
        <FaqContent />
      </div>
    </>
  );
}
