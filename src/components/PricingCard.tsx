import MainButton from "./MainButton";
import { FaRegCreditCard, FaCheck } from "react-icons/fa6";

export default function PricingCard({ price,userMessage }) {
  return (
    <div className="flex flex-col py-5 px-10 bg-gray-700 rounded-2xl">
      <div className="w-[15rem] h-[24rem] mx-2 lg:w-[23rem] lg:h-[20rem]">
        <h2 className="text-white text-3xl text-center">
          GhostVPN Free Version
        </h2>
        <p className="text-gray-400 text-2xl text-center py-1">
          {price}
          <span className="text-white text-base">/month</span>
        </p>
        <MainButton className="mt-5 w-[15rem] h-10 lg:w-[23.5rem]">
          {userMessage}
        </MainButton>
        <div className="flex items-center justify-center gap-2 my-3">
          <FaRegCreditCard className="text-[#00FF00]" />
          <p className="text-[#00FF00]">No Credit Card needed</p>
        </div>
        <p className="mx-2 text-white text-xl text-center">
          Security and privacy for everyone
        </p>
        <div>
            <div className="flex items-center  gap-2 mt-3 mx-2">
              <FaCheck className="text-[#00FF00]" />
              <p className="text-white">Privacy across all platforms</p>
            </div>
            <div className="flex items-center gap-2 mt-3 mx-2">
              <FaCheck className="text-[#00FF00]" />
              <p className="text-white">Secure 1 device at time</p>
            </div>
            <div className="flex items-center gap-2 mt-3 mx-2">
              <FaCheck className="text-[#00FF00]" />
              <p className="text-white">Medium VPN speed</p>
            </div>
        </div>
      </div>
    </div>
  );
}
