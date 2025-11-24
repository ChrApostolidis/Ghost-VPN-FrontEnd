
import { featuresData } from "../../data/FeatureData";
import { useModal } from "../../ModalContext/UseModal";
import FeatureBlock from "./FeatureBlock";

export default function MainFeatureContent({
  selectedTab,
}: {
  selectedTab: string;
}) {
  const {openModal} = useModal();
  return (
    <div className="flex flex-col border-1 border-solid gap-6 rounded-2xl border-gray-400 mt-4 lg:flex-row lg:mx-auto lg:w-6xl lg:p-6 lg:rounded-2xl">
      {featuresData.map((feature) =>
        selectedTab === feature.title ? (
          <FeatureBlock key={feature.id} feature={feature} openModal={openModal} />
        ) : null
      )}
    </div>
  );
}


