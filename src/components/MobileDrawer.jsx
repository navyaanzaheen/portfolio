import { FaTimes } from "react-icons/fa";

export default function MobileDrawer({
  menuOpen,
  closeMenu,
  scrollToSection,
  active,
}) {

  // ⭐ NEW: scroll AFTER drawer closes
  const handleNavClick = (section) => {
    closeMenu(); // close drawer first

    setTimeout(() => {
      scrollToSection(section); // then scroll
    }, 300); // wait for drawer animation
  };

  const navItem = (name) =>
    `cursor-pointer py-3 text-xl transition duration-300 ${
      active === name
        ? "text-cyan-400 underline underline-offset-8"
        : "text-white hover:text-cyan-400"
    }`;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-black shadow-2xl z-50 transform transition-transform duration-300 
      ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Close icon */}
      <div className="flex justify-end p-6">
        <FaTimes className="text-2xl cursor-pointer" onClick={closeMenu} />
      </div>

      {/* Menu links */}
      <ul className="flex flex-col items-center gap-6 mt-10">
        <li onClick={() => handleNavClick("home")} className={navItem("home")}>Home</li>
        <li onClick={() => handleNavClick("about")} className={navItem("about")}>About</li>
        <li onClick={() => handleNavClick("experience")} className={navItem("experience")}>Experience</li>
        <li onClick={() => handleNavClick("projects")} className={navItem("projects")}>Projects</li>
        <li onClick={() => handleNavClick("contact")} className={navItem("contact")}>Contact</li>
      </ul>
    </div>
  );
}