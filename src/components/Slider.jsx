import React, { useContext, useEffect, useState } from "react";
import GalleryData from "../data/GalleryData";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [img, setImg] = useState(GalleryData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    sliderDisplay,
    setSliderDisplay,
    setImage,
    setImgTitle,
    setPlace,
    setYear,
    setCompany,
    setContent,
  } = useContext(Context);
  const [prevTitle, setPrevTitle] = useState("");
  const [nextTitle, setNextTitle] = useState("");
  const customAnimationOrder = [4, 2, 0, 0, 2, 4];
  const { setMenuLine } = useContext(Context);

  const navigate = useNavigate();

  const handleImageClick = (e) => {
    setMenuLine("image");
    const images = document.querySelectorAll(".slider-card");
    const image = document.querySelector(".slider-img-g");
    const sliderTitle = document.querySelector(".slider-title");
    const displayCard = document.querySelector(".displayCard");


    image.classList.add("image-g-active");
    sliderTitle.classList.add("slider-title-active");
    images.forEach((img) => {
      img.classList.add("slider-img-active");
      setTimeout(() => {
        img.classList.add("slider-img-active2");
        displayCard.classList.add("displayCard-active");
      },1000)
    });
    setTimeout(() => {
      navigate(`/image/${e.link}`);
    }, 2300);
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setPrevTitle(img[img.length - 1].title);
    } else {
      setPrevTitle(img[currentIndex - 1].title);
    }

    if (currentIndex === img.length - 1) {
      setNextTitle(img[0].title);
    } else {
      setNextTitle(img[currentIndex + 1].title);
    }

    const sliderImage = document.querySelectorAll(".slider-card");

    sliderImage.forEach((img, index) => {
      const animationDelay = customAnimationOrder[index] * 0.1;
      img.style.animation = "shrink .2s ease-in-out forwards";
      setTimeout(() => {
        img.style.animation = "grow 0.5s ease-in-out forwards";
        img.style.animationDelay = `${animationDelay}s`;
      }, 500);
    });

    const title = document.querySelectorAll(".slider-button-content p");

    title.forEach((title) => {
      title.style.animation = "shrinkTitle 0.2s ease-in-out forwards";
      setTimeout(() => {
        title.style.animation = "growTitle 0.3s ease-in-out forwards";
      }, 200);
    });
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`slider-container ${sliderDisplay ? "" : "hidden"}`}>
      <div className="slider">
        <div className="slider-image">
          <div
            className="slider-img-g"
            onClick={() => handleImageClick(img[currentIndex])}
          >
            <img
              className="slider-card"
              src={img[currentIndex].img}
              alt={img[currentIndex].title}
            />
            <div className="slider-title">
              <h2>{img[currentIndex].title}</h2>
            </div>
            <img
              className="slider-card"
              src={img[currentIndex].img}
              alt={img[currentIndex].title}
            />
            <img
              className="slider-card"
              src={img[currentIndex].img}
              alt={img[currentIndex].title}
            />
            <img
              className="slider-card"
              src={img[currentIndex].img}
              alt={img[currentIndex].title}
            />
            <img
              className="slider-card"
              src={img[currentIndex].img}
              alt={img[currentIndex].title}
            />
            <img
              className="slider-card"
              src={img[currentIndex].img}
              alt={img[currentIndex].title}
            />
            <img src={img[currentIndex].img} alt="" className="displayCard" />
          </div>
        </div>

        <div className="slider-controller">
          <button onClick={handlePrev}>
            <div className="slider-button-content slider-button-content2">
              <p>{prevTitle}</p>
              <svg
                className="prev-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65 11"
              >
                <path
                  d="M1.08 5.03a19.07 19.07 0 007.07-2.8c.92-.6 1.82-1.23 2.6-2.01.68-.68 1.74.38 1.06 1.06a21.53 21.53 0 01-4.98 3.4c7.04.45 14.09.69 21.15.55 6.74-.13 13.48-.5 20.22-.66 5.36-.12 10.72-.13 16.08-.07.96.01.96 1.51 0 1.5-8.5-.1-17 .05-25.5.38-6.62.25-13.23.48-19.86.35-3.47-.07-6.93-.23-10.4-.43 1.7.65 3.28 1.6 4.4 3.07.25.33.05.84-.27 1.03-.38.23-.78.05-1.02-.27-1.46-1.9-4.05-2.72-6.3-3.18-1.32-.27-2.7-.45-4.05-.45-.82 0-1.06-1.33-.2-1.47"
                  fill="#000"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          <button onClick={handleNext}>
            <div className="slider-button-content">
              <p>{nextTitle}</p>
              <svg
                className="next-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65 11"
              >
                <path
                  d="M1.08 5.03a19.07 19.07 0 007.07-2.8c.92-.6 1.82-1.23 2.6-2.01.68-.68 1.74.38 1.06 1.06a21.53 21.53 0 01-4.98 3.4c7.04.45 14.09.69 21.15.55 6.74-.13 13.48-.5 20.22-.66 5.36-.12 10.72-.13 16.08-.07.96.01.96 1.51 0 1.5-8.5-.1-17 .05-25.5.38-6.62.25-13.23.48-19.86.35-3.47-.07-6.93-.23-10.4-.43 1.7.65 3.28 1.6 4.4 3.07.25.33.05.84-.27 1.03-.38.23-.78.05-1.02-.27-1.46-1.9-4.05-2.72-6.3-3.18-1.32-.27-2.7-.45-4.05-.45-.82 0-1.06-1.33-.2-1.47"
                  fill="#000"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
