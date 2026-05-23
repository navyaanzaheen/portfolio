import { FaBars } from "react-icons/fa";

export default function Navbar({ openMenu, scrollToSection, active }) {

  const navItems = ["home", "about", "experience", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer"
            onClick={() => scrollToSection("home")}>
          Navyaan Patel
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`relative pb-1 transition duration-300 focus:outline-none ${
                  active === item
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    active === item ? "w-full" : "w-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <FaBars
          className="md:hidden text-2xl cursor-pointer"
          onClick={openMenu}
        />
      </div>
    </nav>
  );
}