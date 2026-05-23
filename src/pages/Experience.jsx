import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-start md:items-center pt-24 md:pt-0 px-4 sm:px-6 lg:px-8 lg:pb-24 xl:pb-32 overflow-x-hidden"
    >
      {/* MAX WIDTH CONTAINER */}
      <div className="max-w-7xl mx-auto w-full text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-12"
        >
          Experience
        </motion.h2>

        {/* EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-900 border border-cyan-500 rounded-2xl p-6 sm:p-8 shadow-xl text-left"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            Web Developer — TechBridge Technology
          </h3>

          <p className="text-gray-400 mt-2">
            Remote | August 2024 – August 2025
          </p>

          <a
            href="https://tech-bridge-technologies.web.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-cyan-400 hover:underline break-all"
          >
            Visit Company Website
          </a>

          {/* SKILLS */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["Material UI", "React", "JavaScript", "Firebase"].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-1 bg-black border border-cyan-500 text-cyan-400 rounded-full text-sm whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* RESPONSIBILITIES */}
          <ul className="mt-6 space-y-3 text-gray-300 text-base sm:text-lg list-disc list-inside">
            <li>
              Developed and maintained responsive web interfaces using Tailwind CSS and React.
            </li>
            <li>
              Collaborated remotely with a development team to enhance user interfaces and performance.
            </li>
            <li>
              Ensured cross-platform and mobile responsiveness for multiple client projects.
            </li>
            <li>
              Contributed to maintaining consistent design and clean, scalable code practices.
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}