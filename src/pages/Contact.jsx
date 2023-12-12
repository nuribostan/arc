import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

const Contact = () => {
  const [onOver, setOnOver] = useState(false);
  const { setContact } = useContext(Context);

  useEffect(() => {
    const contactContainer = document.querySelector(".contact-container");
    setContact(contactContainer.getBoundingClientRect().top);
  }, [])
  
  useEffect(() => {
    const h1 = document.querySelector(".contact-h1");
    const underline = document.querySelector(".h1-underline");

    const handleOver = () => {
      setOnOver(!onOver);
      if (onOver === true) {
        h1.classList.add("h1-bg");
        underline.classList.add("h1-active");
      }
    };

    const handleOut = () => {
      setOnOver(false);
      if(onOver === false){
        underline.classList.remove("h1-active");
        h1.classList.remove("h1-bg");
      }
    }

    h1.addEventListener("mouseleave", handleOut);
    h1.addEventListener("mouseover", handleOver);
  }, [onOver]);

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>We love all things design and entertaiment</h1>
        <h1 className="contact-h1">
          let's chat<span>.</span>
          <span className="h1-underline"></span>
        </h1>
      </div>
    </div>
  );
};

export default Contact;
