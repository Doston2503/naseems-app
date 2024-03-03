import React from 'react';
import './customerReaearch.scss'

function CustomerResearch(props) {
    return (
        <div className="customer-research-component">
            <div className="about-us">About us</div>
            <div className="customer-research">
                Democratizing customer research
            </div>
            <div className="text">
                We’re on a mission to make that reality
            </div>

            <div className="our-mission">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <img className="img-fluid" src="/assets/about/mission.png" alt=""/>
                        </div>
                        <div className="col-xl-7">
                            <div className="mission-title">
                                Our Mission
                            </div>
                            <div className="mission-text">
                               <span>
                                    Everybody at LCT International is passionate about learning, and the transformative
                                effect that it can have in the professional development of individuals, teams and whole
                                organisations.
                               </span>
                                <span>
                                    Our mission is to empower individuals and organisations to achieve their full
                                    potential through transformative and impactful corporate training solutions.
                                </span>
                                <span>
                                    We deliver high-quality, accessible, and innovative learning experiences
                                    that enable our clients to prosper from the opportunities and challenges
                                    of the 21st century, drive positive change and drive success.
                                </span>
                                <span>
We foster a collaborative and supportive environment and are dedicated to helping our clients achieve their personal
                                    and professional goals and make a lasting impact in their communities.
                                </span>
                                <span>
We foster a collaborative and supportive environment and are dedicated to helping our clients achieve their personal and professional goals and make a lasting impact in their communities.
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