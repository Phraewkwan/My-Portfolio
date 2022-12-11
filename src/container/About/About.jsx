import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
// import { urlFor, client } from "../../client";

import { AppWrap } from "../../wrapper";

import { images } from "../../constants";


// Static Data
const abouts = [
  {
    title: "Web Development",
    description: "I am a good web developer",
    imgUrl: images.about01,
  },
  {
    title: "Front-end Development",
    description: "I am a good web developer",
    imgUrl: images.about02,
  },
  {
    title: "Web Design & Graphic Design",
    description: "I am a good web developer",
    imgUrl: images.about03,
  },
  {
    title: "UX/UI",
    description: "I am a good web developer",
    imgUrl: images.about04,
  },
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  //fetch data from the backend
  // useEffect(() => {
  //   const query = '*[_type === "abouts"]';

  //   client.fetch(query)
  //   .then((data) => setAbouts(data))
  // }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span>
        <br />
        means <span>Good Buiness</span>
      </h2>

      <div className="app__profile">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');