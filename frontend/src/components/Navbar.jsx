import { FaBars } from "react-icons/fa";

export default function Navbar({ openMenu, scrollToSection, active }) {
  const navItems = ["home", "about", "experience", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D0F12]/90 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-2 min-[375px]:px-3 sm:px-6 py-4 flex justify-between items-center gap-2">
        {/* Logo */}

        <h1
className="text-lg min-[375px]:text-xl md:text-2xl font-bold cursor-pointer flex items-center gap-2 shrink-0"
          onClick={() => scrollToSection("home")}
        >
          {/* <span className="text-cyan-400">NP.</span> */}

          <span className="text-white">
            Navyaan <span className="text-cyan-400">Patel</span>
          </span>
        </h1>
        {/* Desktop Menu */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`relative pb-1 transition duration-300 ease-in-out focus:outline-none ${
                  active === item
                    ? "text-cyan-400 font-medium"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute left-0 -bottom-1 h-[0.5px] bg-cyan-400 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Let's Talk Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-cyan-400 text-black px-3 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-cyan-300 transition duration-300"
        >
          Let's Talk ↗
        </button>

        {/* Mobile Icon */}

        <FaBars
          className="md:hidden text-2xl cursor-pointer p-0 hover:text-cyan-400 transition duration-300"
          onClick={openMenu}
        />
      </div>
    </nav>
  );
}
