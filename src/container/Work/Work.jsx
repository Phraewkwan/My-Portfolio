import React, { useState } from "react";
import "./Work.scss";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import Menu from "./allWorks";

const Work = () => {
  const [works, setWorks] = useState(Menu);
  // const [activeFilter, setActiveFilter] = useState("All");

  const handlePortfolioFilter = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setWorks(updatedItems);
  };

  return (
    <>
      <h2 className="head-text">
        My Portfolio <span>Section</span>
      </h2>

      <div className="app__portfolio-filter">
        <button
          className={`app__portfolio-button app__flex p-text
          } `}
          onClick={() => setWorks(Menu)}
          type="button"
        >
          VIEW ALL
        </button>
        <button
          className={`app__portfolio-button app__flex p-text } `}
          onClick={() => handlePortfolioFilter("Web App")}
          type="button"
          value="FEATURED"
        >
          Web App
        </button>
        <button
          className="app__portfolio-button app__flex p-text"
          onClick={() => handlePortfolioFilter("React JS")}
          type="button"
          value="WEB APP"
        >
          React JS
        </button>
        <button
          className="app__portfolio-button app__flex p-text"
          onClick={() => handlePortfolioFilter("UX/UI")}
          type="button"
          value="MOBILE APP"
        >
          UX/UI
        </button>
        <button
          className="app__portfolio-button app__flex p-text"
          onClick={() => handlePortfolioFilter("Graphic Design")}
          type="button"
          value="Graphic Design"
        >
          Graphic Design
        </button>
      </div>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__portfolio-item app__flex" key={index}>
            <div className="app__portfolio-img app_flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__portfolio-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [0, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a
                  href={work.projectLinkGithub}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: [0, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__portfolio-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__portfolio-tag app__flex">
                <p className="p-text">{work.category}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
