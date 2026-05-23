import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    desc: "A full-stack MERN e-commerce site with user auth, product management.",
    tech: ["React", "Firestore"],
    github: "https://github.com/navyaanzaheen/E-Commerce-Website-2-with-firestore",
    live: "https://e-commerce-store-5f3d8.web.app/",
  },
  {
    title: "E-commerce Website (MERN)",
    desc: "A full-stack MERN e-commerce site with user auth, product management.",
    tech: ["Node.js", "MongoDB", "React", "Express.js"],
    github: "https://github.com/navyaanzaheen/E-Commerce-Website-2",
    live: null,
  },
  {
    title: "Weather App",
    desc: "Weather App made with React and Bootstrap.",
    tech: ["React", "Bootstrap", "OpenWeather API"],
    github: "https://github.com/navyaanzaheen/weatherapp",
    live: "https://weatherapp-e5d8d.web.app/",
  },
  {
    title: "Hotel Booking Site",
    desc: "Hotel Booking Site made with React and Firestore.",
    tech: ["React", "Firestore"],
    github: "https://github.com/navyaanzaheen/hotel_booking",
    live: "https://hotel-booking-390d9.web.app/",
  },
  {
    title: "Movies Trailer Site",
    desc: "Movie Trailer Site made with React.",
    tech: ["React", "TMDB API"],
    github: "https://github.com/navyaanzaheen/trailerhub",
    live: "https://trailerhub-1b91c.web.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        min-h-screen
        flex
        items-start md:items-center
        pt-24 md:pt-0
        px-4 sm:px-6 lg:px-8
        overflow-x-hidden
      "
    >
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto w-full text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-10"
        >
          Projects
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-cyan-500 rounded-2xl p-5 sm:p-6 shadow-xl hover:scale-105 transition text-left"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-3 text-sm sm:text-base">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs sm:text-sm border border-cyan-500 text-cyan-400 rounded-full whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-black font-semibold text-sm"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-lg text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}