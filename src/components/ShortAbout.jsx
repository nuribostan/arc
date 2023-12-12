import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";

const ShortAbout = () => {
  const [aboutHeight, setAboutHeight] = useState("");
  const [aboutHeight2, setAboutHeight2] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [lineThroughOffset, setLineThroughOffset] = useState(7);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const shortAbout = document.querySelector(".short-about-container");
    const aboutText = document.querySelector(".short-about-text");
    const cursor = document.querySelector(".cursor");
    const span = document.querySelectorAll(".short-about-text span");

    setAboutHeight(shortAbout.getBoundingClientRect().top + 100);
    setAboutHeight2(shortAbout.getBoundingClientRect().bottom);

    const handleAbout = () => {
      if (window.pageYOffset > aboutHeight - 300) {
        aboutText.classList.add("short-about-text-active");

        let spansActivated = Math.floor((window.pageYOffset - aboutHeight + 300) / 100);

        span.forEach((span, index) => {
          if (index < spansActivated) {
            span.classList.add("span-active");
          } else {
            span.classList.remove("span-active");
          }
        });
      }
      if (
        window.pageYOffset > aboutHeight - 100 &&
        window.pageYOffset < aboutHeight2 - 700
      ) {
        cursor.classList.add("cursor-active");
      } else {
        cursor.classList.remove("cursor-active");
      }
    };

    window.addEventListener("scroll", handleAbout);

    return () => {
      window.removeEventListener("scroll", handleAbout);
    };
  }, [aboutHeight]);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
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
    <div className="short-about-container">
      <div className="cursor"></div>
      <div className="space300"></div>
      <div className="short-about-content">
        <div className="short-about-text">
          <p>
            <span>Lorem</span> <span>ipsum,</span> <span>dolor</span>{" "}
            <span>sit</span> <span>amet</span> <span>consectetur</span>{" "}
            <span>adipisicing</span> <span>elit.</span> <span>Ullam</span>{" "}
            <span>error</span> <span>voluptatibus</span> <span>esse</span>{" "}
            <span>facilis</span> <span>rerum</span> <span>quas</span>{" "}
            <span>hic</span> <span>suscipit</span> <span>illum</span>{" "}
            <span>velit,</span> <span>sequi</span> <span>quibusdam</span>{" "}
            <span>quis</span> <span>nesciunt</span> <span>numquam</span>{" "}
            <span>maxime!</span> <span>Nobis,</span> <span>consequuntur</span>{" "}
            <span>voluptatibus!</span> <span>Accusantium,</span>{" "}
            <span>incidunt!</span>
          </p>
        </div>
      </div>
      <div className="space300"></div>
    </div>
  );
};

export default ShortAbout;
