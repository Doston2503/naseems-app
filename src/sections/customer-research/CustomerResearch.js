import React from "react";
import "./customerReaearch.scss";
import { useTranslation } from "react-i18next";

function CustomerResearch(props) {
  const { t } = useTranslation();

  return (
    <div className="customer-research-component">
      <div className="about-us">{t("About us")}</div>
      <div className="customer-research">
        {t("We have more than 15 years of international experience in providing training, consulting and travel services for the professional development of our clients.")}
      </div>
      <div className="text">{t("We cooperate with educational institutions in Great Britain, Ireland, Malta, Canada, America, Australia, South Africa, Japan, South Korea, Poland, Hungary, Germany, Czech Republic, Latvia and many other European countries.")}</div>

      <div className="our-mission">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <img
                className="img-fluid"
                src="/assets/about/mission.png"
                alt=""
              />
            </div>
              <div className="col-xl-7">
                  <div className="mission-title">{t("Our Mission")}</div>
                  <div className="mission-text">
                <span>
                  {t(
                      "Our mission is to provide high-quality business training, travel and study abroad services that provide personal and professional development."
                  )}
                </span>
                  </div>

                  <div className="mission-text" style={{fontWeight: 700}}>
                <span>
                  {t("For each of our eager-to-learn customers:")}
                </span>
                  </div>

                  <div className="mission-text" >
                <span>
                  {t("- a wider understanding of the problems and opportunities of our current century")}
                </span>
                  </div>

                  <div className="mission-text">
                <span>
                  {t("- personal and professional development")}
                </span>
                  </div>

                  <div className="mission-text" >
                <span>
                  {t("- getting high-quality, convenient and innovative experiences that enable change and success")}
                </span>
                  </div>

                  <div className="mission-text">
                <span>
                  {t("- at the same time, we offer the opportunity to see the world, network, study abroad and travel")}
                </span>
                  </div>

                  <div className="mission-text" style={{fontWeight: 700}}>
                <span>
                  {t("We are committed to helping our clients achieve their personal and professional goals and make a lasting impact on their communities")}
                </span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerResearch;
