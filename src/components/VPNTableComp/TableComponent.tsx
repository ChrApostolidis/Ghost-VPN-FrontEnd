import { vpnFeatures } from "../../data/TableData";
import { useModal } from "../../ModalContext/UseModal";
import MainButton from "../Reusable/MainButton";

export default function GridComponent() {
  const { openModal } = useModal();
  return (
    <div className="bg-secondary pb-8 px-5">
      <div className="overflow-x-auto bg-secondary">
        <div className="py-4 px-2 flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-white text-center lg:text-5xl">
            GhostVPN vs Other VPNs
          </h2>
          <h3 className="text-2xl font-bold text-white text-center lg:text-4xl">
            Who Really Protects You?
          </h3>
          <p className="text-xl text-third text-center lg:text-2xl">
            Check why our VPN is miles ahead of the competition.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border-2 border-third mx-auto w-fit mb-8">
          <div className="grid grid-cols-5 min-w-[600px]">
            <div className="bg-third"></div>
            <div className="bg-third flex justify-center items-center">
              <img className="w-32" src="./Logo.png" alt="GhostVPN logo" />
            </div>
            <div className="bg-third flex justify-center items-center">
              <img
                className="w-32"
                src="./VPNLogos/NordVPN.png"
                alt="NordVPN logo"
              />
            </div>
            <div className="bg-third flex justify-center items-center">
              <img
                className="w-20"
                src="./VPNLogos/ExpressVPN.png"
                alt="ExpressVPN logo"
              />
            </div>
            <div className="bg-third flex justify-center items-center">
              <img
                className="w-40"
                src="./VPNLogos/Proton.png"
                alt="ProtonVPN logo"
              />
            </div>
          </div>

          {vpnFeatures.map((header) => (
            <div
              key={header.id}
              className={`grid grid-cols-5 min-w-[600px] ${
                header.id % 2 === 0 ? "bg-third" : "bg-secondary"
              } text-white lg:text-lg`}
            >
              <div className="px-2 py-2 flex items-center">
                {header.feature}
              </div>
              <div className="px-2 py-2 text-center flex items-center justify-center">
                {header.provider1}
              </div>
              <div className="px-2 py-2 text-center flex items-center justify-center">
                {header.provider2}
              </div>
              <div className="px-2 py-2 text-center flex items-center justify-center">
                {header.provider3}
              </div>
              <div className="px-2 py-2 text-center flex items-center justify-center">
                {header.provider4}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-secondary flex justify-center items-center mt-2">
        <MainButton onClick={openModal} className="lg:text-2xl">
          Get GhostVPN
        </MainButton>
      </div>
    </div>
  );
}
