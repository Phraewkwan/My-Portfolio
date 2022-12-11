import React, { useState, useRef} from "react";
import "./Footer.scss";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

//EmailJs
import emailjs from '@emailjs/browser';

const Footer = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_do0wqoo",
      "template_k4q5wgn",
      form.current,
      "cGvQ_-8zVR4vizbiJ"
    );

    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  //send email to sanity backend
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & Chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:phraewkwan.aoy@gmail.com" className="p-text">
            phraewkwan.aoy@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel: +66 639728355" className="p-text">
            +66 639728355
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangInput}
              required
            />
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Messages"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
