import MainButton from "./MainButton";

export default function MainContent() {
  return (
    <div className="relative bg-black w-full h-[600px] overflow-hidden lg:h-[450px]">
      <img
        src="World_map_green.png"
        alt="world map"
        className="w-full h-full object-cover opacity-80"
      />
      <h2 className="absolute top-1/10 w-full text-white text-[1.8rem] font-bold text-center">
        Our Aim
      </h2>
      <h2 className="absolute top-[18%] w-full text-white text-[1.8rem] font-bold text-center">
        Always Protected
      </h2>
      <h2 className="absolute top-[27%] w-full text-white text-[1.8rem] font-bold text-center">
        By Ghost VPN.
      </h2>
      <h1 className="absolute top-4/10 w-full px-4 text-white text-lg font-bold text-center">
        Your <span className="text-[#00FF00]">privacy</span> is our
        <span className="text-[#00FF00]"> priority</span>. Enjoy secure and
        anonymous browsing with GhostVPN.
      </h1>
      <div className="flex items-center justify-center">
          <MainButton className="absolute bottom-2/10 w-[300px] bg-[#00FF00] text-black font-bold py-2 px-4 rounded lg:bottom-3/10">
            Get Started
          </MainButton>
      </div>
    </div>
  );
}
