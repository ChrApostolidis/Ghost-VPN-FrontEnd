import { FaCheckCircle } from "react-icons/fa";

function PlanFeatures({ features }: { features: string[] }) {
  return (
    <div>
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="flex gap-2 mt-3"
        >
          <FaCheckCircle className="text-primary" />
          <p className="text-white">{feature}</p>
        </div>
      ))}
    </div>
  );
}

export default PlanFeatures;