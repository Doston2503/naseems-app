import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
function Footer(props) {
  const {t, i18n} = useTranslation();
  const lang = i18n.resolvedLanguage;

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}course/categories`, {
        headers: {
          'Accept-Language': lang,
        },
      })
      .then((res) => {
        setCourses(res.data.results.slice(0, 4));
      })
      .catch((error) => {});
  }, [lang]);

  return (
    <div className="container">
      <div className="footer-component">
        <div className="row">
          <div className="col-2">
            <img  src="/assets/logo.svg" alt="" />

            <div className="info-text">
              {t("The platform was developed by naseems agency.")}
            </div>

            <img src="/assets/images/info-img.png" alt="" />
          </div>
          <div className="col-3">
            <div className="footer-col-title">{t("Useful resources")}</div>

            <ul>
              <li>
                  <a target="_blank" href="https://www.gov.uk/world/organisations/british-embassy-tashkent">
                    {t("British Embassy Tashkent")}
                  </a>
              </li>
              <li>
                  <a target="_blank" href="https://tfl.gov.uk">{t("Transport For London")}</a>
              </li>
              <li>
                  <a  target="_blank" href="https://mfa.uz/uz">{t("Ministry of Foreign Affairs")}</a>
              </li>
              <li>
                  <a  target="_blank" href="https://geccentre.co.uk/">{t("Global Education Career Centre")}</a>
              </li>
            </ul>
          </div>
          <div className="col-2 courses-footer-list">
            <div className="footer-col-title">{t("Courses")}</div>
            <ul>
              {courses?.map((item, index) => (
                <li key={index}>
                  <Link to={`courses/?category=${item?.id}`}>
                    <a href="#">{item?.title
                        .toLowerCase()
                        .replace(/^\S/u, c => c.toLocaleUpperCase(navigator.language))}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-2">
            <div className="footer-col-title">{t("Services")}</div>

            <ul>
              <li>
                <Link to="/about-us">{t("About")}</Link>
              </li>
              <li>
                <Link to="/courses">{t("Courses")}</Link>
              </li>
              <li>
                <Link to="/news-blogs">{t("News & blogs")}</Link>
              </li>
              <li>
                <Link to="/contact">{t("Contact us")}</Link>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <div className="footer-col-title">{t("Contact us")}</div>

            <ul>
              <li>
                <a href="tel:+998983031015">
                  <img
                      className="me-3"
                      src="/assets/images/phone.png"
                      alt="Phone"
                  />
                  +998 (98) 303-10-15
                </a>
              </li>

              <li>
                <a href="tel:+998981241015">
                  <img
                      className="me-3"
                      src="/assets/images/phone.png"
                      alt="Phone"
                  />
                  +998 (98) 124-10-15
                </a>
              </li>
              <li>
                <a href="mailto:naseemscorporate@gmail.com">
                  <img
                      className="me-3"
                      src="/assets/images/message.png"
                      alt=""
                  />
                  naseemscorporate@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr/>

        <div className="social-media">
          <div className="text">
            {t(
                "© Naseem’s consulting electronic platform 2024. All rights reserved"
            )}
          </div>

          <div className="d-flex">
            <a href="https://www.instagram.com/naseems_consulting/" className="text-decoration-none" target="_blank"
               rel="noopener noreferrer">
              <img src="/assets/images/instagram.png" alt="Instagram"/>
            </a>
            <a href="https://t.me/Naseems_Consulting" className="text-decoration-none" target="_blank"
               rel="noopener noreferrer">
              <img className="mx-4" src="/assets/images/telegram.png" alt="Telegram"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61567395464383" target="_blank" className="text-decoration-none">
              <img src="/assets/images/facebook.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
