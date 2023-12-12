import React, { useContext } from "react";
import { Context } from "../context/Context";

const Footer = () => {

  
  return (
    <div className="footer-container" >
        <div className="space300"></div>
      <div className="footer-content">
        <div className="footer-col-1">
          <h1 className="footer-col-title">istanbul</h1>
          <p className="footer-col-text">Küçükçekmece</p>
          <p className="footer-col-text">Gültepe mahallesi</p>
          <p className="footer-col-text">34020</p>
          <p className="footer-col-text">Bağlar caddesi</p>
          <div className="footer-col-text">suite 95</div>
        </div>
        <div className="footer-col-2">
          <h1 className="footer-col-title">contact</h1>
          <p className="footer-col-text">+90 533 025 19 94</p>
          <p className="footer-col-text">nuribostan01@gmail.com</p>
        </div>
        <div className="footer-col-3">
          <h1 className="footer-col-title">socials</h1>

          <div className="footer-social">
            <a href="#">
              <img
                src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                alt=""
              />
            </a>
            <a href="#">
              <img src="https://img.icons8.com/ios/50/twitter--v1.png" alt="" />
            </a>
            <a href="#">
              <img src="https://img.icons8.com/ios/50/linkedin.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
