import profileImg from "../assets/formal-image.png";
import { motion } from "framer-motion";
import resume from "../assets/Navyaan_Zaheen_Patel_CV.pdf";

export default function Home({ scrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-screen py-24 flex items-center px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      {/* MAX WIDTH CONTAINER */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 min-w-0 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-cyan-400">Navyaan</span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
            MERN Stack Developer passionate about building modern web apps,
            scalable systems and beautiful user interfaces.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 transition rounded-full text-lg font-semibold whitespace-nowrap"
            >
              View Projects
            </button>

            <a
              href={resume}
              download="Navyaan_Zaheen_Patel_CV.pdf"
              className="px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black transition rounded-full text-lg font-semibold text-center whitespace-nowrap"
            >
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 min-w-0 flex justify-center"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 overflow-hidden border-4 border-cyan-500 shadow-xl rounded-2xl">
            <img
              src={profileImg}
              alt="Navyaan Profile"
              className="w-full h-full object-cover object-top scale-105 transition duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}