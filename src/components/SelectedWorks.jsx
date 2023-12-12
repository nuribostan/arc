import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

const SelectedWorks = () => {
  const [selectedWorksHeight, setSelectedWorksHeight] = useState("");
  const [selectedWorksHeight2, setSelectedWorksHeight2] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [selectedHeight, setSelectedHeight] = useState(0);
  const transition = [0, 2, 6, 10, 14, 18];
  const transition2 = [10, 10, 12, 12, 16, 16, 20, 20, 24, 24, 28, 28];

  useEffect(() => {
    const selectedWorks = document.querySelector(".selected-works");
    const selectedTitle = document.querySelector(".selected-works-title h1");
    const selectedTitle2 = document.querySelector(".selected-works-title span");
    const selectedTitle3 = document.querySelector(".selected-works-items-title");
    const worksItem = document.querySelectorAll(".selected-works-item");
    const worksItemSpan = document.querySelectorAll(
      ".selected-works-item span h4"
    );

    setSelectedHeight(selectedWorks.getBoundingClientRect().top);

    const handleScroll = () => {
      if (window.pageYOffset > selectedHeight) {


        setTimeout(() => {
          selectedTitle.classList.add("selected-works-title-active");
          selectedTitle2.classList.add("selected-works-title-active2");
          selectedTitle3.classList.add("selected-works-title-active3");
          worksItem.forEach((item, index) => {
            item.style.opacity = "1";
            item.style.transition = `all ${
              transition[index] * 0.1
            }s ease-in-out`;
          });

          worksItemSpan.forEach((item, index) => {
            item.style.transform = "translateX(0)";
            item.style.transition = `all ${
              transition2[index] * 0.1
            }s ease-in-out`;
          });
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedHeight]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor2");
    const selectedWorks = document.querySelector(".selected-works");

    setSelectedWorksHeight(selectedWorks.getBoundingClientRect().top);
    setSelectedWorksHeight2(selectedWorks.getBoundingClientRect().bottom);

    if (window.pageYOffset > selectedWorksHeight) {
      cursor.classList.add("cursor-active");
    } else {
      cursor.classList.remove("cursor-active");
    }
  }, [selectedWorksHeight]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor2");
    const handleCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      cursor.style.left = `${cursorPosition.x}px`;
      cursor.style.top = `${cursorPosition.y}px`;
    };

    window.addEventListener("mousemove", handleCursor);

    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, [cursorPosition]);

  return (
    <div className="selected-works">
      <div className="cursor2"></div>
      <div className="selected-works-content">
        <div className="selected-works-title">
          <h1>selected</h1>
          <span>works</span>
        </div>

        <div className="selected-works-items">
          <ul>
            <li className="selected-works-items-title">
              <h4>project</h4>
              <span>
                <h4>type</h4>
                <h4>date</h4>
              </span>
            </li>
            <li className="selected-works-item">
              <h4>Marmara</h4>
              <span>
                <h4>villa</h4>
                <h4>2019</h4>
                <div className="selected-works-item-img">
                  <img
                    src="https://resmim.net/cdn/2023/10/13/Sq9d72.webp"
                    alt=""
                  />
                </div>
              </span>
            </li>
            <li className="selected-works-item">
              <h4>Rize</h4>
              <span>
                <h4>bungalow</h4>
                <h4>2022</h4>
                <div className="selected-works-item-img">
                  <img
                    src="https://resmim.net/cdn/2023/10/13/Sq98Pi.webp"
                    alt=""
                  />
                </div>
              </span>
            </li>
            <li className="selected-works-item">
              <h4>Hatay</h4>
              <span>
                <h4>container</h4>
                <h4>2021</h4>
                <div className="selected-works-item-img">
                  <img
                    src="https://resmim.net/cdn/2023/10/13/Sq9KDC.webp"
                    alt=""
                  />
                </div>
              </span>
            </li>
            <li className="selected-works-item">
              <h4>İstanbul</h4>
              <span>
                <h4>court</h4>
                <h4>2018</h4>
                <div className="selected-works-item-img">
                  <img
                    src="https://resmim.net/cdn/2023/10/13/Sq9bu1.webp"
                    alt=""
                  />
                </div>
              </span>
            </li>{" "}
            <li className="selected-works-item">
              <h4>Ankara</h4>
              <span>
                <h4>apartment</h4>
                <h4>2020</h4>
                <div className="selected-works-item-img">
                  <img
                    src="https://resmim.net/cdn/2023/10/13/Sq9r3L.webp"
                    alt=""
                  />
                </div>
              </span>
            </li>{" "}
            <li className="selected-works-item">
              <h4>İzmir</h4>
              <span>
                <h4>villa</h4>
                <h4>2023</h4>
                <div className="selected-works-item-img">
                  <img
                    src="https://resmim.net/cdn/2023/10/13/Sq95Ch.webp"
                    alt=""
                  />
                </div>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectedWorks;
