import { FaCheck } from "react-icons/fa";

function PlanFeatures({ features }: { features: string[] }) {
  return (
    <div>
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="flex items-center gap-2 mt-3 mx-2"
        >
          <FaCheck className="text-[#00FF00]" />
          <p className="text-white">{feature}</p>
        </div>
      ))}
    </div>
  );
}

export default PlanFeatures;