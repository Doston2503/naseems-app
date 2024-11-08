import React, {useEffect} from "react";
import "./contact.scss";
import axios from "axios";
import { API_URL } from "../../constants";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Contact({courseId,setCourseId}) {
  const { t } = useTranslation();
  function addContact(e) {
    e.preventDefault();

    let data = {
      type:2,
      full_name: e.target?.fullName?.value,
      phone: e.target?.phone?.value,
      email: e.target?.email?.value,
      content: e.target?.description?.value,
    };
    if (courseId) {
      data.type = 1;
      data.course=courseId
    }

    axios
      .post(`${API_URL}main/contacts/`, data)
      .then((res) => {
        toast.success(t("Message sent successfully!"));
        e.target.reset();
        setCourseId(null);
      })
      .catch((error) => {
        toast.error(t("There was an error sending the message!"));
      });
  }

  useEffect(() => {
    return () => {
      setCourseId(null);
    }
  }, []);
  return (
    <div className="contact-page">
      <div className="title">{t("Contact us")}</div>
      <div className="text">
        {t("Get in touch with our creator-friendly support team")}
      </div>

      <div className="contact-form-section">
        <div className="container">
          <div className="row my-3">
            <div className="form-title">{t("Contact us")}</div>
            <div className="form-text">
              {t("We’ll get back to you as soon as possible.")}
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
