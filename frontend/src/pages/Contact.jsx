
import { useState, useEffect } from "react";
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
  const [error, setError] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  // Detect successful email verification
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("verified") === "true") {
      setEmailVerified(true);

      // Remove verification parameter from URL
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname
      );
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

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
        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        setError(true);

        setTimeout(() => setError(false), 4000);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
    >
      <div className="w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#111418] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl shadow-black/30"
        >
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-3">
            Contact Me
          </h1>

          

          <p className="text-gray-400 text-sm sm:text-base text-center mb-6">
            Have a project in mind or want to discuss an opportunity? Let's
            connect.
          </p>

          {/* FORM */}
          <form onSubmit={sendEmail} className="flex flex-col gap-4">

            {/* EMAIL VERIFICATION SUCCESS */}
            {emailVerified && (
              <p className="text-green-400 text-center bg-green-400/10 border border-green-400/20 rounded-lg p-3">
                Your email has been verified successfully!
              </p>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 outline-none transition duration-300"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 outline-none transition duration-300"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 outline-none transition duration-300"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                loading
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-cyan-400 text-black hover:bg-cyan-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/20"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-center text-sm mt-3 bg-green-400/10 border border-green-400/20 rounded-lg p-3">
                Message sent successfully! Thank you for reaching out.
              </p>
            )}

            {error && (
              <p className="text-red-400 text-center text-sm mt-3 bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                Sorry, your message couldn't be sent. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
