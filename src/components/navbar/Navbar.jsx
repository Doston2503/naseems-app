import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/img/logo.svg";
import Arrow from "../../assets/img/arrow.png";
import UzImage from "../../assets/img/uzb-flag.png";
import RuImage from "../../assets/img/ru-flag.png";
import EnImage from "../../assets/img/eng-flag.png";
import HamburgerIcon from "../hamburger-icon/HamburgerIcon";
import "./navbar.scss";
import {Link,useLocation} from "react-router-dom";
const LANGUAGES = [
  {
    code: "ru",
    label: "РУС",
  },
  {
    code: "uz",
    label: "UZ",
  },
  {
    code: "en",
    label: "ENG",
  },
];

const Navbar = () => {
  const { t } = useTranslation();
  const {pathname}=useLocation();

  const [menu_show, setMenuShow] = useState(false);

  const toggleMenu = () => setMenuShow(!menu_show);

  const [offset, setOffset] = useState(135);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: Number(window.innerWidth),
        height: Number(window.innerHeight),
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize.width > 1440) {
      setOffset(-85);
    } else if (screenSize.width < 1440 && screenSize.width > 576) {
      setOffset(-85);
    } else {
      setOffset(-100);
    }
  }, [screenSize]);

  const [lang_open, setLangOpen] = useState(false);

  const { i18n } = useTranslation();

  const [currentLang, setCurrentLang] = useState(i18n.language);


  const changeLanguage = (lang = "en") => {
    setCurrentLang(lang);
    setLangOpen(false);
    i18n.changeLanguage(lang);
  };

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (lang_open === true) {
      if (ref.current && !ref.current.contains(event.target)) {
        setLangOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const setLangOpenFunc = () => {
    setLangOpen(!lang_open);
  };

  return (
    <nav className="Navbar">
      <div className="desctop-navbar">
        <Container>
          <div className="content">
            <Link to="/" className="logo-box">
              <img
                onClick={() => scroll.scrollToTop()}
                className="desctop-logo"
                src={Logo}
                alt=""
              />
            </Link>
            <ul>
              <li><Link to="/about-us" className={pathname==='/about-us' ? 'active-link':''}>About us</Link></li>
              <li><Link to="/courses" className={pathname==='/courses' ? 'active-link':''}>Courses</Link></li>
              <li><Link to="/news-blogs" className={pathname==='/news-blogs' ? 'active-link':''}>News & blogs</Link></li>
              <li><Link to="/contact" className={pathname==='/contact' ? 'active-link':''}>Contact us</Link></li>
            </ul>
            <div className="right-box">
              <div className="language-box">
                <div
                  className="selected-language"
                  onClick={() => setLangOpenFunc()}
                >
                  <img
                    src={
                      currentLang == "uz"
                        ? UzImage
                        : currentLang == "ru"
                        ? RuImage
                        : EnImage
                    }
                    alt=""
                    className="flag-image"
                  />
                  <div className="text">{currentLang}</div>
                  <img
                    className={`${lang_open === true ? "open" : "close"}`}
                    src={Arrow}
                    alt=""
                  />
                </div>
                <div
                  ref={ref}
                  className={`select ${
                    lang_open === true ? "open-lang" : "close-lang"
                  }`}
                >
                  {LANGUAGES.filter((item) => item.code !== currentLang).map(
                    ({ label, code }) => (
                      <div
                        key={label}
                        className="language"
                        onClick={() => changeLanguage(code)}
                      >
                        {label}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="mobile-navbar">
        <Container>
          <div className="content-box">
            <Link to="/" className="logo-box">
              <img
                className="mobile-logo"
                onClick={() => scroll.scrollToTop()}
                width={"140px"}
                src={Logo}
                alt=""
              />
            </Link>
            <div className="right">
              <HamburgerIcon toggleMenu={toggleMenu} menu_show={menu_show} />
            </div>
          </div>
        </Container>
      </div>

      <div className={`left-menu  ${menu_show ? "open" : "close"}`}>
        <ul>
          <li><Link to="/about-us">About us</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/news-blogs">News & blogs</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li>
            <div className="language-box">
              <div
                className="selected-language"
                onClick={() => setLangOpenFunc()}
              >
                <img
                  src={
                    currentLang == "uz"
                      ? UzImage
                      : currentLang == "ru"
                      ? RuImage
                      : EnImage
                  }
                  alt=""
                  className="flag-image"
                />
                <div className="text">{currentLang}</div>
                <img
                  className={`${lang_open === true ? "open" : "close"}`}
                  src={Arrow}
                  alt=""
                />
              </div>
              <div
                ref={ref}
                className={`select ${
                  lang_open === true ? "open-lang" : "close-lang"
                }`}
              >
                {LANGUAGES.filter((item) => item.code !== currentLang).map(
                  ({ label, code }) => (
                    <div
                      key={label}
                      className="language"
                      onClick={() => changeLanguage(code)}
                    >
                      {label}
                    </div>
                  )
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
