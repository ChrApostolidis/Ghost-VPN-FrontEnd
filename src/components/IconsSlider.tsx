import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaChrome,
  FaFirefox,
  FaEdge,
} from "react-icons/fa";
import { SiMacos,SiAppletv  } from "react-icons/si";

const icons = [
  { id: 1, name: "Windows", icon: <FaWindows /> },
  { id: 2, name: "macOS", icon: <SiMacos /> },
  { id: 3, name: "Linux", icon: <FaLinux /> },
  { id: 4, name: "Android", icon: <FaAndroid /> },
  { id: 5, name: "iOS", icon: <FaApple /> },
  { id: 6, name: "Chrome", icon: <FaChrome /> },
  { id: 7, name: "Firefox", icon: <FaFirefox /> },
  { id: 8, name: "Edge", icon: <FaEdge /> },
  { id: 9, name: "Apple TV", icon: <SiAppletv /> },
];

const IconList = ({ keyPrefix = "" }) => (
  <ul className="flex gap-10 text-white py-4 shrink-0">
    {icons.map((icon) => (
      <li
        key={`${keyPrefix}${icon.id}`}
        className="flex flex-col items-center gap-5 min-w-[100px] first:ml-5"
      >
        <div className="text-4xl lg:text-5xl">{icon.icon}</div>
        <span className="text-sm lg:text-base font-medium">{icon.name}</span>
      </li>
    ))}
  </ul>
);

const IconSlider = () => {
  return (
    <div className="w-full bg-gray-900 py-8">
      <div className="overflow-hidden">
        <h2 className="text-white text-3xl text-center mx-2 my-5 font-bold lg:text-5xl lg:my-7">
          Available on all main operation systems
        </h2>
        
        <div className="flex animate-infinite-scroll">
          <IconList keyPrefix="set1-" />
          <IconList keyPrefix="set2-" />
          <IconList keyPrefix="set3-" />
          <IconList keyPrefix="set4-" />
        </div>
      </div>
    </div>
  );
};

export default IconSlider;