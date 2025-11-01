import { useEffect, useState, type JSX } from "react";
import MainButton from "../Reusable/MainButton";
import Modal from "../Modal/Modal";
import { useModal } from "../../ModalContext/UseModal";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaQuora } from "react-icons/fa";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import NavMenu from "../NavMenu/NavMenu";

export interface NavMenuItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { isOpen, closeModal, openModal } = useModal();

  const NavMenuItems: NavMenuItem[] = [
    { name: "Features", link: "#features", icon: <FaScrewdriverWrench /> },
    { name: "Reviews", link: "#reviews", icon: <MdRateReview /> },
    { name: "Prices", link: "#pricing-card", icon: <IoPricetagsSharp /> },
    { name: "FAQs", link: "#faq", icon: <FaQuora /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent layout shift when header is fixed */}
      <div className="h-20"></div>
      <header
        className={`h-20 fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isSticky ? "bg-secondary shadow-lg" : "bg-[#242323]"
        }`}
      >
        <div className="flex gap-10 mx-auto items-center justify-between w-full max-w-7xl h-20">
          <div className="flex items-center p-1">
            <div className="w-12 h-10 p-0 m-0 lg:w-20 lg:h-18">
              <img src="Logo.png" alt="Ghost VPN Logo" />
            </div>
            <h1 className="text-xl font-bold text-white lg:text-2xl">
              Ghost<span className="text-primary">VPN</span>
            </h1>
          </div>
          <div className="hidden lg:flex gap-10 items-center">
            <nav className="">
              <ul className="flex space-x-8">
                {NavMenuItems.map(({ name, link }) => (
                  <li key={name}>
                    <a
                      href={link}
                      className="text-white text-xl hover:text-[#33d36e] lg:text-2xl"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden lg:block">
            <MainButton onClick={openModal} className="m-4">
              Get Protected
            </MainButton>
            <Modal isOpen={isOpen} onClose={closeModal} />
          </div>
          <NavMenu items={NavMenuItems} />
        </div>
      </header>
    </>
  );
}
