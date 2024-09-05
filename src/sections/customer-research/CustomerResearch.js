import React from "react";
import "./customerReaearch.scss";
import { useTranslation } from "react-i18next";

function CustomerResearch(props) {
  const { t } = useTranslation();

  return (
    <div className="customer-research-component">
      <div className="about-us">{t("About us")}</div>
      <div className="customer-research">
        {t("Democratizing customer research")}
      </div>
      <div className="text">{t("We’re on a mission to make that reality")}</div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerResearch;
