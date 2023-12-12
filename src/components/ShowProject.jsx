import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import gsap from "gsap";

const ShowProject = () => {
  const { shortProjectHeight, setShortProjectHeight } = useContext(Context);
  const [projectHeight, setProjectHeight] = useState("");


  useEffect(() => {
    const shortProject = document.querySelector(".short-project-container");
    setShortProjectHeight(shortProject.getBoundingClientRect().top);
  }, []);

  useEffect(() => {
    const shortProjectTitle = document.querySelector(".short-project-title");
    const circle = document.querySelectorAll(".circle");
    setProjectHeight(shortProjectHeight);

    const handleTitle = () => {
      if (window.pageYOffset > projectHeight - 600) {
        shortProjectTitle.classList.add("short-project-title-active");
        setTimeout(() => {
          circle.forEach((item) => {
            item.classList.add("circle-active");
          });
        }, 1000);
      }

      console.log(projectHeight, window.pageYOffset);
    };

    window.addEventListener("scroll", handleTitle);

    return () => {
      window.removeEventListener("scroll", handleTitle);
    };
  }, [projectHeight]);

  useEffect(() => {
      const circle = document.querySelectorAll(".circle");
      circle.forEach((item) => {
        gsap.to(item, {
          repeat: -1,
          yoyo: true,
          duration: 10,
          transform: `translate(${Math.random() * 2}px, ${Math.random() * 10}px)`
        })
      })
  }, [projectHeight, shortProjectHeight])

  return (
    <div className="short-project-container">
      <div className="short-project-content">
        <span className="circle">
          <img src="https://resmim.net/cdn/2023/10/13/Sq98Pi.webp" alt="" />
        </span>
        <span className="circle">
          <img src="https://resmim.net/cdn/2023/10/13/Sq9bu1.webp" alt="" />
        </span>
        <span className="circle">
          <img src="https://resmim.net/cdn/2023/10/13/Sq9d72.webp" alt="" />
        </span>
        <span className="circle">
          <img src="https://resmim.net/cdn/2023/10/13/Sq9r3L.webp" alt="" />
        </span>
        <span className="circle">
          <img src="https://resmim.net/cdn/2023/10/13/Sq90FW.webp" alt="" />
        </span>
        <span className="circle">
          <img src="https://resmim.net/cdn/2023/10/13/Sq9XmI.webp" alt="" />
        </span>
        <div className="short-project-title">
          <h2>to reshape the world with art.</h2>
        </div>
      </div>
    </div>
  );
};

export default ShowProject;
