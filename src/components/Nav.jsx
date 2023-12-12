import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { useNavigate, Link } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const { menuLine, contact } = useContext(Context);
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, showNav]);

  useEffect(() => {
    const navTitle = document.querySelector(".nav-title h1");
    const button = document.querySelectorAll(".nav-button span");

    if (menuLine === "home") {
      const home = document.querySelector(".home");
      home.classList.add("menu-item-active");
    } else {
      const home = document.querySelector(".home");
      home.classList.remove("menu-item-active");
    }
    if (menuLine === "about") {
      const about = document.querySelector(".about");
      about.classList.add("menu-item-active");
    } else {
      const about = document.querySelector(".about");
      about.classList.remove("menu-item-active");
    }
    if (menuLine === "works") {
      const works = document.querySelector(".works");
      works.classList.add("menu-item-active");
    } else {
      const works = document.querySelector(".works");
      works.classList.remove("menu-item-active");
    }
    if (menuLine === "contact") {
      const contact = document.querySelector(".contact");
      contact.classList.add("menu-item-active");
    }
    if (menuLine === "image") {
      navTitle.style.color = "#fff";
      button.forEach((item) => {
        item.style.background = "#fff";
      });
    } else {
      const navTitle = document.querySelector(".nav-title h1");
      const button = document.querySelectorAll(".nav-button span");

      navTitle.style.color = "#000";
      button.forEach((item) => {
        item.style.background = "#000";
      });
    }
  }, [menuLine]);

  const handleContact = (e) => {
    e.preventDefault();
    setMenu(false);
    window.scrollTo(0, contact - 300, { behavior: "smooth" });
    if (menuLine === "image") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo(0, contact - 300, { behavior: "smooth" });
      }, 100);
    }
    if (menuLine === "works") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo(0, contact - 300, { behavior: "smooth" });
      }, 100);
    }
  };

  const handleAbout = (e) => {
    setMenu(false);
    navigate("/about");
    window.scrollTo(0, 0);
  };

  const handleHome = (e) => {
    setMenu(false);
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleWorks = (e) => {
    setMenu(false);
    navigate("/works");
    window.scrollTo(0, 0);
  };

  const handleMenuButton = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const rightMenu = document.querySelector(".nav-right");
    const button = document.querySelectorAll(".nav-button span");
    if (menu) {
      rightMenu.classList.toggle("nav-right-active");
      button.forEach((item) => {
        item.classList.toggle("nav-button-active");
        item.classList.toggle("nav-active");
      });
    } else {
      rightMenu.classList.remove("nav-right-active");
      button.forEach((item) => {
        item.classList.remove("nav-button-active");
        item.classList.remove("nav-active");
      });
    }
  }, [menu]);

  return (
    <div className="nav-container">
      <div className={`nav-top ${showNav ? "" : "hidden-nav"}`}>
        <div className="notify">
          <img
            src={
              menuLine === "image"
                ? " https://resmim.net/cdn/2023/10/22/SvBH5I.png"
                : "https://img.icons8.com/ios-filled/50/appointment-reminders--v1.png"
            }
            alt="appointment-reminders--v1"
          />
        </div>
        <div className="nav-title">
          <h1>Nuri Bostan</h1>
        </div>
        <button className="nav-button" onClick={handleMenuButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="nav-right">
        <div className="nav-content">
          <ul className="menu">
            <li className="menu-item">
              <div className="home" onClick={handleHome}>
                home
              </div>
            </li>
            <li className="menu-item">
              <div className="about" onClick={handleAbout}>
                about
              </div>
            </li>
            <li className="menu-item">
              <div className="works" onClick={handleWorks}>
                works
              </div>
            </li>
            <li className="menu-item">
              <div className="contact" onClick={handleContact}>
                contact
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
