import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 lg:pb-24 xl:pb-32 overflow-x-hidden"
    >
      {/* MAX WIDTH CONTAINER */}
      <div className="max-w-7xl mx-auto w-full text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-10"
        >
          About Me
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
        >
          I’m Navyaan, a web developer with a passion for crafting clean and
          functional websites. I specialize in building responsive,
          user-friendly applications using modern web technologies, especially
          the MERN stack — MongoDB, Express.js, React, and Node.js.
          <br /><br />
          With strong experience in React, Tailwind CSS, and Firestore, I enjoy
          turning ideas into reality with elegant and efficient solutions.
        </motion.p>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {["React","Tailwind CSS","Firestore","MongoDB","Bootstrap","NodeJS","Express JS"].map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-gray-900 border border-cyan-500 text-cyan-400 rounded-full text-sm hover:bg-cyan-500 hover:text-black transition whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}