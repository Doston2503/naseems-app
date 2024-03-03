import React from 'react';
import './ourValues.scss'

function OurValues(props) {
    return (
        <div className="our-values-component">
            <div className="all-main-title mb-5">
                Our Values
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="box">
                            <img src="/assets/about/quality.svg" alt=""/>
                            <div className="title">
                                Quality:
                            </div>
                            <div className="text">
                                We are committed to delivering high-quality programmes to our delegates and clients.
                                This includes ensuring that our instructors are knowledgeable and experienced, and that
                                their resources are up-to-date, relevant and effective.
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="box">
                            <img src="/assets/about/respect.svg" alt=""/>
                            <div className="title">
                                Respect:
                            </div>
                            <div className="text">
                                Mutual respect forms the basis of our business. We hold in high esteem our clients and
                                our delegates and we earn their respect in the way we behave. We value all our
                                stakeholders and treat them with consideration
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="box">
                            <img src="/assets/about/inovation.svg" alt=""/>
                            <div className="title">
                                Innovation::
                            </div>
                            <div className="text">
                                We are committed to delivering high-quality programmes to our delegates and clients.
                                This includes ensuring that our instructors are knowledgeable and experienced, and that
                                their resources are up-to-date, relevant and effective.
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="box">
                            <img src="/assets/about/success.svg" alt=""/>
                            <div className="title">
                                Success:
                            </div>
                            <div className="text">
                                We are committed to delivering high-quality programmes to our delegates and clients.
                                This includes ensuring that our instructors are knowledgeable and experienced, and that
                                their resources are up-to-date, relevant and effective.
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="box">
                            <img src="/assets/about/collaboration.svg" alt=""/>
                            <div className="title">
                                Collaboration:
                            </div>
                            <div className="text">
                                Mutual respect forms the basis of our business. We hold in high esteem our clients and
                                our delegates and we earn their respect in the way we behave. We value all our
                                stakeholders and treat them with consideration
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurValues;