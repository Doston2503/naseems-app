import React, { useState } from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import ContactModal from "../../components/contactModal/ContactModal";

const Header = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const { t } = useTranslation();

  return (
    <div className="header-component">
      <div className="container">
        <div className="row">
          <div className="col-xl-2">
            <div className="header-top-left-img">
              <img src="/assets/images/header-overlay.png" alt="" />
              <div className="overlay">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="header-title">
              {t("Corporate training courses")}
            </div>
            <div className="header-text">
              {t(
                "High-value, high-impact customized corporate training programmed for teams, delivered globally and designed to suit client requirements."
              )}
            </div>
          </div>
          <div className="col-xl-2">
            <div className="header-top-right-img">
              <img src="/assets/images/header-right-top-img.png" alt="" />
              <div className="overlay">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4">
            <div className="header-bottom-left-img">
              <img src="/assets/images/header-overlay-big.png" alt="" />
              <div className="overlay">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
          <div className="col-xl-4 ">
            <div className="add-contact" onClick={toggle}>
              <button>
                <img
                  src="/assets/images/add-contact.svg"
                  alt="add contact image"
                />
                <span>{t("Contact us")} </span>
              </button>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="header-bottom-right-img">
              <img src="/assets/images/header-right-bottom-img.png" alt="" />
              <div className="overlay">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal modal={modal} toggle={toggle} />
    </div>
  );
};

export default Header;
