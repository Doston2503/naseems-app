import React from 'react';
import './newsDetail.scss'
import {Link} from "react-router-dom";

function NewsDetail(props) {
    return (
        <div className="news-detail-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2"/>
                    <div className="col-xl-8">
                        <div className="course-line">
                            <Link to="/courses">News & blogs</Link>
                            <img src="/assets/images/go-right.png" alt=""/>
                            <b>
                                Reasons to Choose an Internation...
                            </b>
                        </div>

                        <div className="detail-box">
                            <div className="detail-box-header">
                                <button>
                                    Blog
                                </button>
                                <div className="date d-flex">
                                    <span>March 12, 2024</span>
                                    <span className="ms-3">
                                       <img src="/assets/images/view.png" className="me-1" alt=""/>
                                       99 000 000</span>
                                </div>
                            </div>

                            <div className="title">
                                Reasons to Choose an International Corporate
                                Training Provider for Local Business Growth
                            </div>
                            <div className="text">
                                In today’s interconnected global economy, businesses
                                around the world are constantly
                                seeking ways to compete on an international scale.
                            </div>

                            <div className="news-detail-img mb-4">
                                <img className="img-fluid" src="/assets/images/news-detail.png" alt=""/>
                            </div>

                            <div className="sub-title">
                                10 reasons why to consider an international provider:
                            </div>

                            <div className="reason-text">
                                <span>
                                    1.
                                </span>
                              <span>
                                    Access to Cutting-Edge Expertise: London is home to some of the world’s leading
                                experts and thought leaders in various industries. By partnering with an international
                                corporate training provider based in London, businesses in other parts of the world such
                                as EMEA gain access to cutting-edge expertise that may not be readily available locally.
                              </span>
                            </div>
                            <div className="reason-text">
                                <span>
                                    2.
                                </span>
                                <span>
                                    Access to Cutting-Edge Expertise: London is home to some of the world’s leading
                                experts and thought leaders in various industries. By partnering with an international
                                corporate training provider based in London, businesses in other parts of the world such
                                as EMEA gain access to cutting-edge expertise that may not be readily available locally.
                              </span>
                            </div>
                            <div className="reason-text">
                                <span>
                                    3.
                                </span>
                                <span>
                                    Access to Cutting-Edge Expertise: London is home to some of the world’s leading
                                experts and thought leaders in various industries. By partnering with an international
                                corporate training provider based in London, businesses in other parts of the world such
                                as EMEA gain access to cutting-edge expertise that may not be readily available locally.
                              </span>
                            </div>

                            <div className="news-detail-img my-4">
                                <img className="img-fluid" src="/assets/images/news-detail.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDetail;