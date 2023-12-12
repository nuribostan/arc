import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>About me</h1>
        <small>who am i, vision ?</small>
      </div>

      <div className="about-main-content">
        <div className="about-content-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            minima labore cumque suscipit modi adipisci, earum numquam magni
            unde accusantium architecto! Dignissimos magni ratione at hic, enim
            debitis deleniti harum?
          </p>
        </div>

        <div className="about-content-right">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            error voluptatibus esse facilis rerum quas hic suscipit illum velit,
            sequi quibusdam quis nesciunt numquam maxime!
          </p>
        </div>

        <div className="company-wrapper">
          <div className="company-title">
            <p>we partner and collaborate with some of the best companys.</p>
          </div>
          <div className="company-images">
            <div className="company-images-wrapper">
              <img src="https://resmim.net/cdn/2023/10/26/ZMwGAn.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwcZy.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwpBD.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwFOI.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwUqb.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwzdZ.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMw2s6.png" alt="" />
            </div>
            <div className="company-images-wrapper">
              <img src="https://resmim.net/cdn/2023/10/26/ZMwGAn.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwcZy.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwpBD.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwFOI.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwUqb.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMwzdZ.png" alt="" />
              <img src="https://resmim.net/cdn/2023/10/26/ZMw2s6.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="space300"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
