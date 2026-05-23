import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_0pl3xta",
        "template_ogae1pi",
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        "8G8hpUPf_Nb2Gzdzt"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-start justify-center pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      <div className="w-full max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-cyan-500 p-6 sm:p-8 rounded-2xl shadow-xl"
        >

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-6">
            Contact Me
          </h1>

          {/* FORM */}
          <form onSubmit={sendEmail} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-700 focus:border-cyan-400 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-700 focus:border-cyan-400 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-700 focus:border-cyan-400 outline-none resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded font-semibold transition text-black ${
                loading ? "bg-gray-500" : "bg-cyan-500 hover:bg-cyan-600"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-center text-sm mt-2">
                Message sent successfully ✅
              </p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}