import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./gallaryModal.scss";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useTranslation } from "react-i18next";

function GalleryModal({ modal, toggle, modalData }) {
  const { t } = useTranslation();

  const items = modalData?.map((item, index) => {
    return (
      <div key={index} className="carousel-items" onClick={toggle}>
        <img className="main-img" src={item?.media} alt="" />
      </div>
    );
  });

  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <Modal isOpen={modal} toggle={toggle} className="gallery-modal">
      <ModalHeader toggle={toggle}>
        <div className="modal-title">{t("Gallery")}</div>
      </ModalHeader>
      <ModalBody>
        <div className="row my-3">
          <div className="col-xl-1" />
          <div className="col-xl-10">
            <AliceCarousel
              items={items}
              responsive={responsive}
              duration={400}
              animationType="slide"
              infinite
              disableDotsControls
            />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default GalleryModal;
