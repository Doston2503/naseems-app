import React from 'react';
import './contact.scss'
import axios from "axios";
import {API_URL} from "../../constants";
import {toast} from "react-toastify";

function Contact(props) {
    function addContact(e) {
        e.preventDefault();
        let data={
            full_name:e.target?.fullName?.value,
            phone:e.target?.phone?.value,
            email:e.target?.email?.value,
            content:e.target?.description?.value,
        };
        axios.post(`${API_URL}main/contacts/`,data)
            .then((res)=>{
                toast.success("Ma'lumotlar yuborildi");
                e.target.reset();
                console.log(res);
            }).catch((error)=>{
            toast.error("Ma'lumotlar yuborishda xatolik yuz berdi");
        })
    }
    return (
        <div className="contact-page">
            <div className="title">
                Contact us
            </div>
            <div className="text">
                Get in touch with our creator-friendly support team
            </div>

          <div className="contact-form-section">
              <div className="container">
                  <div className="row my-3">
                      <div className="form-title">
                          Contact us
                      </div>
                      <div className="form-text">
                          We’ll get back to you as soon as possible.
                      </div>
                      <div className="col-xl-6">
                          <div className="contact-form">
                              <form onSubmit={addContact}>
                                  <label htmlFor="fullName" className="mt-3">
                                      Full name
                                  </label>
                                  <input
                                      required={true}
                                      name="fullName"
                                      id="fullName"
                                      className="form-control"
                                      type="text"/>

                                  <label htmlFor="phone" className="mt-4">
                                      Phone number *
                                  </label>
                                  <input
                                      required={true}
                                      name="phone"
                                      id="phone"
                                      className="form-control"
                                      type="text"/>

                                  <label htmlFor="email" className="mt-4">
                                      E-mail
                                  </label>
                                  <input
                                      name="email"
                                      id="email"
                                      className="form-control"
                                      type="email"/>

                                  <label htmlFor="description" className="mt-4">
                                      Description
                                  </label>
                                  <textarea name="description" id="description"
                                            cols="30" rows="3" className="form-control"/>

                                  <button type="submit" className="mt-4 submit-btn">
                                      Submit
                                  </button>
                              </form>
                          </div>
                      </div>
                      <div className="col-xl-6 text-center">
                          <img src="/assets/images/contact-modal.png"
                               alt="contact modal image" className="contact-modal-image"/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default Contact;