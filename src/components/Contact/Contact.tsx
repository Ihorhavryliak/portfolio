import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./Contact.scss";
import { SectionAnimation } from "../../utils/SectionAnimation";

export const Contact = React.memo(() => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <section className="section__contact" id="contact">
      <SectionAnimation variant={boxVariant}>
        <div className="section__contact__information">
          <div className="section__contact__name">Get in touch</div>
          <div className="section__contact__surname">CONTACT</div>
        </div>
        <div className="section__contact__networks">
          <a
            className=" section__contact__link"
            href="https://t.me/Igor_Havriliyak"
            target="_blank"
            rel="noreferrer"
          >
            <BsTelegram className="section__contact__icon" /> Telegram
          </a>
          <a
            className=" section__contact__link"
            href="https://www.facebook.com/kachkamala"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="section__contact__icon" /> Facebook
          </a>
          <a
            className=" section__contact__link"
            href="https://github.com/Ihorhavryliak"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="section__contact__icon" /> GitHub
          </a>
          <a
            className=" section__contact__link"
            href="mailto:ih.havryliak@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail className="section__contact__icon" /> Send email
          </a>
        </div>
        <div></div>
      </SectionAnimation>
    </section>
  );
});
