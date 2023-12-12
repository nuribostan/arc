import React, { useContext, useEffect, useState } from "react";
import GalleryData from "../data/GalleryData";
import { Context } from "../context/Context";
import { useNavigate, Link } from "react-router-dom";

const Gallery = () => {
  const [img, setImg] = useState(GalleryData);
  const [hover, setHover] = useState(false);
  const [title, setTitle] = useState("");
  const { setMenuLine } = useContext(Context);
  const { galleryDisplay } = useContext(Context);
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 1024 && isDragging) {
      e.preventDefault();
      const x = e.pageX - e.currentTarget.offsetLeft;
      const walkX = (x - startX) * 3;
      e.currentTarget.scrollLeft = scrollLeft - walkX;
    }
  };

  const handleMouseOver = (e) => {
    setHover(true);
    setTitle(e.title);
  };

  const handleImageClick = (e) => {
    const galleryCard = document.querySelectorAll(".gallery-card");
    galleryCard[e.id - 1].classList.add("gallery-card-active");
    setTimeout(() => {
      navigate(`/image/${e.link}`);
    }, 2000);
    setMenuLine("image");
  };

  useEffect(() => {
    const handleMouseOut = () => {
      setHover(false);

      if (hover === false) {
        setTitle("");
      }
    };

    const handleMosueOut2 = () => {
      setHover(false);
      setTitle("");
    };

    const gallery = document.querySelector(".gallery");

    gallery.addEventListener("mouseleave", handleMosueOut2);

    const galleryCard = document.querySelectorAll(".gallery-card");
    galleryCard.forEach((card) => {
      card.addEventListener("mouseleave", handleMouseOut);

      return () => {
        card.removeEventListener("mouseleave", handleMouseOut);
      };
    });
  }, [hover, title]);

  return (
    <div className={`gallery-container ${galleryDisplay ? "" : "hidden"}`}>
      <div className="gallery" onMouseDown={(e) => {
          setIsDragging(true);
          setStartX(e.pageX);
          setScrollLeft(e.currentTarget.scrollLeft);
        }} onMouseUp={() => setIsDragging(false)} onMouseLeave={() => setIsDragging(false)} onMouseMove={handleMouseMove}>
        {img.map((img) => {
          return (
            <div
              className="gallery-card"
              onMouseOver={() => handleMouseOver(img)}
              onClick={() => handleImageClick(img)}
            >
              <img src={img.img} alt={img.title} />
            </div>
          );
        })}
      </div>

      <div className="gallery-card-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Gallery;
