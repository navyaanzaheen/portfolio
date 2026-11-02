import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaArrowUp,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  const navLinks = ["home", "about", "experience", "projects", "contact"];

  const scrollToTop = () => {
    const root = document.getElementById("root");

    if (root) {
      root.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialClass =
    "w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1";

  return (
    <footer className="w-full bg-[#0D0F12] border-t border-white/10 mt-5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h py-12">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Navyaan <span className="text-cyan-400">Patel</span>
            </h2>

            <p className="text-gray-400 text-sm leading-7 max-w-sm">
              MERN Stack Developer focused on building modern, responsive and
              scalable web applications.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=navyaanzaheen@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 text-sm flex items-center gap-2 hover:text-cyan-400 transition"
            >
              <FaGoogle className="text-red-500 shrink-0" />
              <span className="break-all">navyaanzaheen@gmail.com</span>
            </a>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="flex flex-col items-center gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-5 w-full md:translate-x-3">
            <h3 className="text-lg font-semibold text-white md:-translate-x-7">
              Connect With Me
            </h3>
            <div className="flex items-center justify-center md:justify-end flex-wrap gap-3 w-full">
              <a
                href="https://github.com/navyaan123"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={socialClass}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/navyaan-patel-88b1ab177/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={socialClass}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/navyaan.zaheen"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className={socialClass}
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/navyaanzaheen_/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={socialClass}
              >
                <FaInstagram />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className=" md:-translate-x-7 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 transition rounded-full text-black font-semibold"
            >
              <FaArrowUp />
              Back to Top
            </button>{" "}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Navyaan Patel — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
