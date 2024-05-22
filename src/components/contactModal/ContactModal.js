import React from "react";
import "./contactModal.scss";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function ContactModal({ modal, toggle }) {
  const { t } = useTranslation();

  function addContact(e) {
    e.preventDefault();
    let data = {
      full_name: e.target?.fullName?.value,
      phone: e.target?.phone?.value,
      email: e.target?.email?.value,
      content: e.target?.description?.value,
    };
    axios
      .post(`${API_URL}main/contacts/`, data)
      .then((res) => {
        toast.success(t("Message sent successfully!"));
        e.target.reset();
      })
      .catch((error) => {
        toast.error(t("There was an error sending the message!"));
      });
  }

  return (
    <Modal isOpen={modal} toggle={toggle} className="contact-modal">
      <ModalHeader toggle={toggle}>
        <div className="modal-title">{t("Contact us")}</div>
        <div className="modal-text">
          {t("We’ll get back to you as soon as possible.")}
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="row my-3">
          <div className="col-xl-6">
            <div className="contact-form">
              <form onSubmit={addContact}>
                <label htmlFor="fullName" className="mt-3">
                  {t("Full name")}
                </label>
                <input
                  required={true}
                  name="fullName"
                  id="fullName"
                  className="form-control"
                  type="text"
                />

                <label htmlFor="phone" className="mt-4">
                  {t("Phone number")} *
                </label>
                <input
                  required={true}
                  name="phone"
                  id="phone"
                  className="form-control"
                  type="text"
                />

                <label htmlFor="email" className="mt-4">
                  {t("E-mail")}
                </label>
                <input
                  name="email"
                  id="email"
                  className="form-control"
                  type="email"
                />

                <label htmlFor="description" className="mt-4">
                  {t("Description")}
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="3"
                  className="form-control"
                />

                <button type="submit" className="mt-4 submit-btn">
                  {t("Submit")}
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-6 text-center">
            <img
              src="/assets/images/contact-modal.png"
              alt="contact modal image"
              className="contact-modal-image"
            />
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ContactModal;
