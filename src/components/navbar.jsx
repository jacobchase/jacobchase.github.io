import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItemClasses = `
    relative
    inline-block
    px-2 py-1
    text-white
    cursor-pointer
    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-1
    after:h-0.5
    after:w-0
    after:bg-blue-500
    after:transition-all
    after:duration-300
    hover:after:w-full
  `;

  return (
    <nav
      className={`w-full flex items-center px-10 sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-neutral-900/70 backdrop-blur-lg shadow-lg border-b border-white/10 h-16"
            : "bg-transparent h-20"
        }`}
    >
      {/* Logo */}
      <p
        onClick={() => scrollToSection("top")}
        className="font-[Quicksand] text-2xl text-white cursor-pointer hover:text-blue-500 transition-colors duration-300"
      >
        JC
      </p>

      {/* Nav Links */}
      <ul className="font-[Quicksand] text-xl flex gap-8 ml-auto">
        <li
          onClick={() => scrollToSection("about-me")}
          className={navItemClasses}
        >
          About
        </li>

        <li
          onClick={() => scrollToSection("skills")}
          className={navItemClasses}
        >
          Skills
        </li>

        <li
          onClick={() => scrollToSection("projects")}
          className={navItemClasses}
        >
          Projects
        </li>

        <li
          onClick={() => scrollToSection("experience")}
          className={navItemClasses}
        >
          Experience
        </li>

        <li
          onClick={() => scrollToSection("contact")}
          className={navItemClasses}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
