import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
function Footer(props) {
  const { t } = useTranslation();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}course/list/?page=1`)
      .then((res) => {
        setCourses(res.data.results.slice(0, 4));
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="container">
      <div className="footer-component">
        <div className="row">
          <div className="col">
            <img src="/assets/logo.svg" alt="" />

            <div className="info-text">
              {t("The platform was developed by naseems agency.")}
            </div>

            <img src="/assets/images/info-img.png" alt="" />
          </div>
          <div className="col">
            <div className="footer-col-title">{t("Useful resources")}</div>

            <ul>
              <li>
                <a href="">
                  {" "}
                  <a href="#">Naseems.uz</a>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <a href="#">Naseems.uz</a>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <a href="#">Naseems.uz</a>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <a href="#">Naseems.uz</a>
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="footer-col-title">{t("Courses")}</div>
            <ul>
              {courses?.map((item, index) => (
                <li key={index}>
                  <Link to={"courses/" + item?.slug}>
                    <a href="#">{item?.category?.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
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
          <div className="col">
            <div className="footer-col-title">{t("Contact us")}</div>

            <ul>
              <li>
                <a href="">
                  {" "}
                  <a href="#">
                    <img
                      className="me-3"
                      src="/assets/images/phone.png"
                      alt=""
                    />
                    +99891 220 00 00
                  </a>
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <a href="#">
                    <img
                      className="me-3"
                      src="/assets/images/message.png"
                      alt=""
                    />
                    info@naseems.uz{" "}
                  </a>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="social-media">
          <div className="text">
            {t(
              "© Naseem’s consulting electronic platform 2024. All rights reserved"
            )}
          </div>

          <div className="d-flex">
            <a href="#" className="text-decoration-none">
              <img src="/assets/images/instagram.png" alt="" />
            </a>
            <a href="#" className="text-decoration-none">
              <img className="mx-4" src="/assets/images/telegram.png" alt="" />
            </a>
            <a href="#" className="text-decoration-none">
              <img src="/assets/images/facebook.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
