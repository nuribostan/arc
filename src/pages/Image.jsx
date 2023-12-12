import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { Link, useNavigate, useParams } from "react-router-dom";
import GalleryData from "../data/GalleryData";

const Image = () => {
  const [img, setImg] = useState(GalleryData);
  const [image, setImage] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [place, setPlace] = useState("");
  const [year, setYear] = useState("");
  const [content, setContent] = useState("");
  const [company, setCompany] = useState("");
  const { setMenuLine } = useContext(Context);
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const params = useParams();

  const handleBack = () => {
    window.history.back();
    setMenuLine("home");
  }

  useEffect(() => {
    for (let i = 0; i < img.length; i++) {
      switch (params.name) {
        case `${img[i].link}`:
          setImage(img[i].img);
          setImgTitle(img[i].title);
          setPlace(img[i].place);
          setYear(img[i].year);
          setContent(img[i].content);
          setCompany(img[i].company);
          break;
        default:
          break;
      }
    }
  }, [params.name]);

  return (
    <div className="image-container">
      <div className="image-main">
        <img src={image} alt="" />
        <div className="image-main-title">
          <h1>{imgTitle}</h1>
        </div>
      </div>
      <div className="image-info">
        <div className="image-info-top">
          <h1>{place}.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            iste ipsam neque.
          </p>
        </div>

        <div className="image-info-bottom">
          <div className="image-info-bottom-content">
            <h4>Year</h4>
            <h4>Place</h4>
            <h4>Content</h4>
            <h4>Company</h4>
          </div>
          <div className="image-info-bottom-content">
            <h4>{year}</h4>
            <h4>{place}</h4>
            <h4>{content}</h4>
            <h4>{company}</h4>
          </div>
        </div>
      </div>

      <div className="image-detail">
        <div className="image-detail-main-image">
          <img src="https://resmim.net/cdn/2023/10/13/Sq9XmI.webp" alt="" />
        </div>

        <div className="image-detail-grid">
          <img
            src="https://cdn-5.urmy.net/images/plans/HWD/bulk/9643/img_4509-img_4511.jpg"
            alt=""
          />
          <img
            src="https://cdn-5.urmy.net/images/plans/HWD/bulk/9643/img_4498-img_4500.jpg"
            alt=""
          />
          <img
            src="https://cdn-5.urmy.net/images/plans/HWD/bulk/9643/img_4512-img_4514.jpg"
            alt=""
          />
          <img
            src="https://cdn-5.urmy.net/images/plans/HWD/bulk/9643/img_4534-img_4537.jpg"
            alt=""
          />
        </div>
        <div className="image-space"></div>
      </div>

      <div className="image-back">
        <h1 onClick={handleBack}>
          back to overview
        </h1>
      </div>
    </div>
  );
};

export default Image;
