import React from "react";
import { useTranslation } from "react-i18next";
import HomeCarousel from "../home-carousel/HomeCarousel";
import "./gallery.scss";
function Gallery(props) {
  const { t } = useTranslation();

  return (
    <div className="gallery-page">
      <div className="gallery-title">{t("Gallery")}</div>
      <div className="gallery-text">
        <div
          dangerouslySetInnerHTML={{
            __html: t("Naseems consulting is - <span>Opportunity</span> book"),
          }}
        />
      </div>
      <HomeCarousel />
    </div>
  );
}

export default Gallery;
