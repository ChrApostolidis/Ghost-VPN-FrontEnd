import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useModal } from "../../ModalContext/UseModal";

const termsArray = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Preferences",
  "Contact Us",
];

const socialMediaArray = [
  <FaFacebookF />,
  <FaXTwitter />,
  <FaInstagram />,
  <FaYoutube />,
  <FaLinkedin />,
];

export default function Footer() {
  const { openModal } = useModal();
  return (
    <>
      <div className="bg-secondary flex flex-col items-center gap-5 border-t-1 pt-8 border-third lg:justify-between lg:flex-row lg:px-20">
        <div>
          <ul className=" text-white text-lg flex flex-col gap-3 lg:flex-row lg:text-xl">
            {termsArray.map((item,index) => (
              <li
                key={index}
                onClick={openModal}
                className="cursor-pointer hover:text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" text-white flex text-2xl gap-7 px-10 lg:text-2xl">
            {socialMediaArray.map((item,index) => (
              <li
                key={index}
                onClick={openModal}
                className="cursor-pointer hover:text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-secondary text-white text-center py-6 lg:text-lg">
        <p>&copy; {new Date().getFullYear()} GhostVPN. All rights reserved.</p>
      </div>
    </>
  );
}
