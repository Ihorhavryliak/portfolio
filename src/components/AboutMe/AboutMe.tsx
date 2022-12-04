import { HiOutlineDocumentDownload } from "react-icons/hi";
import myPhoto from "../../assets/images/i.jpg";
import CV from "../../assets/CV_Ihor_Havryliak.pdf";
import "./AboutMe.scss";
import React from "react";

const AboutMe = React.memo(() => {
  return (
    <section id="home">
      <div className="photo__tex">
        <div className="text__block">
          <div className="text__block__name">Hello I am </div>
          <div className="text__block__surname">Ihor Havryliak</div>
          <div className="text__block__position">Front-End Developer</div>
          <a
            href={CV}
            download="CV_Ihor_Havryliak"
            className="text__block__button btn btn-primary"
          >
            <HiOutlineDocumentDownload className="text__block__button__icon" />{" "}
            Download CV
          </a>
        </div>
      </div>
      <div className="d-grid photo__section " style={{ background: "#ddd" }}>
        <div className="img__photo">
          <img src={myPhoto} alt="myPhoto" className="my__img" />
        </div>
      </div>
    </section>
  );
});

export default AboutMe;


