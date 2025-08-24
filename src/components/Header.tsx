export default function Header() {
  return (
    <>
      <header className="bg-[#242323]">
        <div className="flex justify-between items-center">
          <div className="flex items-center p-1">
            <div className="w-12 h-10 p-0 m-0">
              <img src="Logo.png" alt="Ghost VPN Logo" />
            </div>
            <h1 className="text-lg font-bold text-white">GhostVPN</h1>
          </div>
          {/* <div className="flex gap-10 items-center">
            <nav className="">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#33d36e]"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#33d36e]"
                  >
                    Prices
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-[#33d36e]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="px-2">
              <button
                className="bg-[#33d36e] text-xl text-white px-8 py-4 rounded-4xl 
                          hover:cursor-pointer transition duration-400 
                          hover:shadow-[7px_5px_56px_-14px_#33d36e] 
                          active:scale-95 active:shadow-[7px_5px_56px_-10px_#33d36e]"
              >
                Get Protected
              </button>
            </div>
          </div> */}
          <div className="bg-[#33d36e] rounded-2xl hover:cursor-pointer flex items-center justify-center p-1 m-2">
            <button className="w-10">
              <img src="burgerButton.png" alt="burgerButton" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
