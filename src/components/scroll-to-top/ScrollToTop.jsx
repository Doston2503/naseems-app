import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./scroll-to-top.scss";
import MoveUpImage from "../../assets/img/move-up.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Event listener ni qo'shish
    window.addEventListener("scroll", handleScroll);

    // Qo'shilgan event listener ni o'chirish
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <Link
        to="#"
        className={`scroll-top-button ${!isVisible ? "hidden" : ""}`}
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={100}
        delay={100}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
        onClick={scrollToTop}
      >
        <img src={MoveUpImage} width="16px" alt="" />
      </Link>
    </div>
  );
};

export default ScrollToTop;
