import React, { useEffect, useState } from "react";
import GalleryData from "../data/GalleryData";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const [works, setWorks] = useState(GalleryData);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const transitionTime = [];



  useEffect(() => {
    const searchInput = document.querySelector(".works-search input");
    const searchButton = document.querySelector(".works-search button");

    const handleSearch = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
      setWorks(
        GalleryData.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    }

    searchInput.addEventListener("keyup", handleSearch);
  }, [search])

  const handleImageClick = (e) => {
    const worksContainer = document.querySelector(".works-container");

    worksContainer.classList.add("works-container-active");

    setTimeout(() => {
      navigate(`/image/${e.link}`);
    },1000)
  }

  return (
    <div className="works-container">
      <div className="works-content">
        <h1>Works</h1>
        <div className="works-search">
          <input type="text" placeholder="Search" />
          <button>
            <img src="https://img.icons8.com/ios/50/search--v1.png" alt="" />
          </button>
        </div>

        <div className="works-list">
          {works.map((item) => {
            return (
              <div className="works-item">
                <img src={item.img} alt={item.title} onClick={() => handleImageClick(item)} />
                <div className="works-item-content">
                  <p>{item.year}</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
