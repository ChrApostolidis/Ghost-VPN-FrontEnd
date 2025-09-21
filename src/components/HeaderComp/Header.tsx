import { useEffect, useState } from "react";
import MainButton from "../Reusable/MainButton";
import Modal from "../Modal/Modal";
import { useModal } from "../../ModalContext/UseModal";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { isOpen, closeModal, openModal } = useModal();

  const NavItems = [ {
    name: "Features", link: "#features"
  }, {
    name: "Prices", link: "#pricing-card"
  }, {
    name: "Reviews", link: "#reviews"
  }, {
    name: "FAQs", link: "#faq"
  }];

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
                {NavItems.map(({ name, link }) => (
                  <li key={name}>
                    <a href={link} className="text-white text-xl hover:text-[#33d36e] lg:text-2xl">
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
          <div className="bg-[#33d36e] rounded-2xl hover:cursor-pointer flex items-center justify-center p-1 m-2 lg:hidden">
            <button className="w-10">
              <img src="burgerButton.png" alt="burgerButton" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
