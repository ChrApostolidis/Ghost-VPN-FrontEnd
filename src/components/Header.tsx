import MainButton from "./MainButton";

export default function Header() {
  return (
    <>
      <header className="bg-[#242323]">
        <div className="flex justify-between items-center">
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
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#features"
                    className="text-white text-xl hover:text-[#33d36e]"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing-card"
                    className="text-white text-xl hover:text-[#33d36e]"
                  >
                    Prices
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white text-xl hover:text-[#33d36e]"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </nav>
            <div className="px-2">
              <MainButton className="m-4">Get Protected</MainButton>
            </div>
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
