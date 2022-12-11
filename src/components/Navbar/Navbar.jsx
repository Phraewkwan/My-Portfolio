import React, { useState } from "react";
import "./Navbar.scss";
// import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";

// import { images } from "../../constants";

// new nav
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiMessageSquareDots,
} from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);

  // new nav
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="app__navbar">

      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser />
      </a>
      <a
        href="#work"
        onClick={() => setActiveNav("#work")}
        className={activeNav === "#work" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDots />
      </a>

    </nav>
  );
};

export default Navbar;
