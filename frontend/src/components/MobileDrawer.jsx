
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function MobileDrawer({
  menuOpen,
  closeMenu,
  scrollToSection,
  active,
}) {
  // Close drawer first, then scroll
  const handleNavClick = (section) => {
    closeMenu();

    setTimeout(() => {
      scrollToSection(section);
    }, 300);
  };

  useEffect(() => {
  if (!menuOpen) return;

  const timer = setTimeout(() => {
    closeMenu();
  }, 3000);

  return () => clearTimeout(timer);
}, [menuOpen, closeMenu]);

  const navItem = (name) =>
  `cursor-pointer py-3 text-lg font-medium transition-all duration-300 hover:translate-x-3 hover:text-cyan-400 ${
    active === name
      ? "text-cyan-400"
      : "text-white hover:text-cyan-400"
  }`;

  return (
    <>
      {/* Background overlay */}
      {menuOpen && (
        <button
          aria-label="Close menu"
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-[#0D0F12] border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close icon */}
        <div className="flex justify-end p-6">
          <FaTimes
            className="text-2xl cursor-pointer text-white hover:text-cyan-400 transition duration-300"
            onClick={closeMenu}
          />
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
    </>
  );
}
