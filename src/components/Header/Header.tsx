import React from "react";
import { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { AnimationCircle } from "../../utils/Animation/AnimationCircle";
import "./Header.scss";

/* const side: Variants = {
  open: {
    maxHeight: 500,
    opacity: 0,
    transition: {
      maxHeight: "1s ease-out",
      opacity: 1,
    },
  },
  closed: {
    display: `block !important`,
    overflow: "hidden",
    maxHeight: 0,
    opacity: 0,
    transition: {
      maxHeight: "1s ease-out",
      opacity: 1,
    },
  },
}; */

const Header = React.memo(() => {
  //delete button top
  const [topView, isTopView] = useInView();
  //open close menu
  const [isOpen, toggleOpen] = useState(false);

  return (
    <header ref={topView}>
      <AnimationCircle />
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
        <div className="container-fluid menu">
          <button
            className="navbar-toggler  menu__button"
            type="button"
            onClick={() => toggleOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end  ${
              isOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={-100}
                  delay={-100}
                  offset={-56}
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={10}
                  delay={10}
                  offset={-56}
                  to="skills"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  offset={-56}
                  spy={true}
                  smooth={true}
                  duration={10}
                  delay={10}
                  to="project"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  offset={-56}
                  spy={true}
                  smooth={true}
                  duration={10}
                  delay={10}
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* button top */}

      <div
        className={`button__top ${
          isTopView ? "button__not__active" : "button__active"
        }`}
      >
        <Link className="nav-link" activeClass="active" to="home">
          <BsArrowUpCircle />
        </Link>
      </div>
    </header>
  );
});

export default Header;
