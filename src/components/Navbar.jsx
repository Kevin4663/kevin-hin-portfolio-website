import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    "Home",
    "About",
    "Projects",
    "Experience",
    "Education",
    "Resume",
  ];

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-200 shadow-md z-100">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-3">
        <img src="logo.svg"></img>

        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
          ☰
        </button>

        <ul
          className={`sm:flex gap-6 font-medium ${
            isOpen ? "block" : "hidden"
          } sm:block`}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={handleNavClick}
                className="hover:text-primary transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
