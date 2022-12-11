import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMEdia = () => {
  return (
    <div className="app__social">
      <a href="https://web.facebook.com/phraewkwan" target="_blank"  rel="noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/aoy.pwkn/?next=%2F" target="_blank"  rel="noreferrer">
        <BsInstagram />
      </a>
      <a href="https://www.linkedin.com/in/phraewkwan-sangsiri/" target="_blank"  rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default SocialMEdia;
