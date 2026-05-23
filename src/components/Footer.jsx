import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  const navLinks = ["home", "about", "projects"];

  const scrollToTop = () => {
    const root = document.getElementById("root");

    if (root) {
      root.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black/90 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">

          {/* BRAND */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-cyan-400">
              Navyaan Patel
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              MERN Stack Developer focused on building modern, responsive
              and scalable web applications.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=navyaanzaheen@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-2 hover:text-cyan-400 transition"
            >
              <FaGoogle className="text-red-500" />
              <span className="break-all">navyaanzaheen@gmail.com</span>
            </a>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4 text-center md:text-center">
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
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
          <div className="space-y-5 text-center md:text-right">
            <h3 className="text-lg font-semibold text-white">
              Connect With Me
            </h3>

            <div className="flex justify-center md:justify-end gap-6 text-2xl">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-cyan-400 transition hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-cyan-400 transition hover:scale-110"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-cyan-400 transition hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 transition rounded-full text-black font-semibold"
              >
                <FaArrowUp /> Back to Top
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Navyaan Patel — All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}