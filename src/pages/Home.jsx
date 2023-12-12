import React, { useContext, useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import Slider from "../components/Slider";
import { Context } from "../context/Context";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import ShortAbout from "../components/ShortAbout";
import SelectedWorks from "../components/SelectedWorks";
import ShowProject from "../components/ShowProject";
import MiddleSection from "../components/MiddleSection";


const Home = () => {
  const [aboutHeight, setAboutHeight] = useState("");
  const { setSliderDisplay, setGalleryDisplay, shortAboutHeight } =
    useContext(Context);

  useEffect(() => {
    const handleSliderSwitch = () => {
      setSliderDisplay(true);
      setGalleryDisplay(false);
    };

    const handleGallerySwitch = () => {
      setSliderDisplay(false);
      setGalleryDisplay(true);
    };

    const sliderSwitch = document.querySelector(".slider-switch");
    const gallerySwitch = document.querySelector(".gallery-switch");

    sliderSwitch.addEventListener("click", handleSliderSwitch);
    gallerySwitch.addEventListener("click", handleGallerySwitch);

    return () => {
      sliderSwitch.removeEventListener("click", handleSliderSwitch);
      gallerySwitch.removeEventListener("click", handleGallerySwitch);
    };
  }, [setSliderDisplay, setGalleryDisplay]);

  useEffect(() => {
    const switches = document.querySelector(".switches");

    setAboutHeight(shortAboutHeight);

    const handleSwitches = () => {
      if (window.scrollY > aboutHeight - 700) {
        switches.classList.add("switches-active");
      } else {
        switches.classList.remove("switches-active");
      }
    };

    window.addEventListener("scroll", handleSwitches);

    return () => {
      window.removeEventListener("scroll", handleSwitches);
    };
  }, [aboutHeight]);

  return (
    <div className="home-container">
      <Gallery />
      <Slider />

      <div className="switches">
        <div className="slider-switch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 12"
            className="slider-switch-svg"
          >
            <path
              d="M16.31 11.8c-2.66.3-5.38.2-8.07.12-1.34-.04-2.68-.04-4.03-.07a6.08 6.08 0 01-2.93-.65C.06 10.46-.02 9.26 0 8.22.02 6.88.06 5.5.06 4.13c0-.99-.11-2.13.68-3C1.8-.07 4.12-.03 5.89.02c2.1.08 4.2.07 6.29.04 1.58-.02 3.25-.2 4.81.1 1.8.34 2.54 1.46 2.78 2.63.27 1.26.22 2.53.17 3.8-.04 1.11.28 2.28-.25 3.37-.52 1.05-1.83 1.65-3.38 1.82"
              fill="#000"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="gallery-switch">
          <svg
            className="gallery-switch-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 14"
          >
            <g fill="#000" fill-rule="evenodd">
              <path d="M9.5 12.52c-.47.07-.94.02-1.42.01-.44 0-.89.06-1.32-.02-.7-.13-.73-1.03-.72-1.6.02-.9.06-1.81.06-2.73V4.46c0-1.11-.24-2.55.02-3.66C6.31.02 7.26.04 7.9.05c.68 0 1.86-.26 2.3.42.22.34.18.78.15 1.16-.17 1.93-.12 3.86-.07 5.8.02.86 0 1.73.05 2.59.03.52.11 1.06.01 1.58-.09.47-.35.84-.84.92M3.5 13.82c-.47.08-.94.02-1.42.02-.44-.01-.89.06-1.32-.02-.7-.14-.73-1.04-.72-1.6.02-.91.06-1.82.06-2.74V5.76c0-1.11-.24-2.55.02-3.66.19-.78 1.14-.75 1.78-.75.68 0 1.86-.25 2.3.43.22.34.18.77.15 1.16-.17 1.92-.12 3.86-.07 5.79.02.86 0 1.73.05 2.6.03.52.11 1.06.01 1.58-.09.46-.35.83-.84.91M15.4 13.56c-.64.13-1.5 0-1.94 0-.4 0-.92.1-1.23-.26-.43-.5-.29-1.24-.25-1.84.06-.85.07-1.7.07-2.55.01-1.74-.04-3.49-.05-5.23 0-.69-.2-1.48.11-2.13.39-.8 1.82-.43 2.52-.43.45 0 1.11-.08 1.44.32.23.3.2.69.18 1.04a88.6 88.6 0 00-.06 5.83c.02.97.03 1.95.03 2.92 0 .55.13 1.2-.06 1.73-.12.35-.4.53-.75.6M21.32 12.54c-.56.18-1.26.04-1.8 0-.43-.03-1.04.11-1.37-.26-.35-.38-.34-.94-.3-1.42.03-.56.07-1.12.07-1.68V4.89c0-.85.01-1.7-.01-2.56-.02-.61-.2-1.37.17-1.92.33-.48 1.1-.4 1.6-.36.62.04 1.28-.12 1.89.1.63.23.64 1 .6 1.57-.15 3.13.06 6.26-.04 9.38-.02.61-.19 1.23-.81 1.44"></path>
            </g>
          </svg>
        </div>
      </div>
      <ShortAbout />
      <MiddleSection />
      <SelectedWorks />
      <div className="space300"></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
