import React from 'react';
import './contactModal.scss'
import {Modal, ModalBody, ModalHeader} from 'reactstrap';

function ContactModal({modal, toggle}) {
    function addContact(e) {
        e.preventDefault()
    }

    return (

        <Modal isOpen={modal} toggle={toggle} className="contact-modal">
            <ModalHeader toggle={toggle}>
                <div className="modal-title">
                    Contact us
                </div>
                <div className="modal-text">
                    We’ll get back to you as soon as possible.
                </div>
            </ModalHeader>
            <ModalBody>
                <div className="row my-3">

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
            </ModalBody>

        </Modal>

    );
}

export default ContactModal;