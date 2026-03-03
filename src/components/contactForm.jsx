import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // later send to backend
  };

  return (
    <>
      <h2 className="text-2xl text-white mb-6 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:border-blue-500"
          required
        />

        <textarea
          name="reason"
          placeholder="Reason for reaching out..."
          value={form.reason}
          onChange={handleChange}
          rows="4"
          className="p-3 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:border-blue-500 resize-none"
          required
        />

        <button
          type="submit"
          className="mt-4 py-3 rounded-md bg-blue-500 text-black font-semibold transition duration-300 hover:opacity-80"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
