import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="bg-secondary flex flex-col items-center gap-5 border-t-1 pt-8 border-third lg:justify-between lg:flex-row lg:px-20">
        <div>
          <ul className=" text-white text-lg flex flex-col gap-3 lg:flex-row lg:text-xl">
            <li className="cursor-pointer hover:text-primary">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-primary">
              Terms of Service
            </li>
            <li className="cursor-pointer hover:text-primary">
              Cookie Preferences
            </li>
            <li className="cursor-pointer hover:text-primary">Contact Us</li>
          </ul>
        </div>
        <div>
          <ul className=" text-white flex text-2xl gap-7 px-10 lg:text-2xl">
            <li className="cursor-pointer hover:text-primary">
              <FaFacebookF />
            </li>
            <li className="cursor-pointer hover:text-primary">
              <FaXTwitter />
            </li>
            <li className="cursor-pointer hover:text-primary">
              <FaInstagram />
            </li>
            <li className="cursor-pointer hover:text-primary">
              <FaYoutube />
            </li>
            <li className="cursor-pointer hover:text-primary">
              <FaLinkedin />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-secondary text-white text-center py-6 lg:text-lg">
        <p>&copy; {new Date().getFullYear()} GhostVPN. All rights reserved.</p>
      </div>
    </>
  );
}
