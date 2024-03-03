import React from 'react';
import './courseDetail.scss'
import {Link} from "react-router-dom";

function CourseDetail(props) {
    return (
        <div className="course-detail-page">
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
                                    MANAGEMENT
                                </button>
                                <div className="date">
                                    Start date : March 12, 2024
                                </div>
                            </div>

                            <div className="title">
                                Advanced masterclass in business administration
                            </div>
                            <div className="text">
                                Our Essential Management Skills course enables managers, department heads and team
                                leaders to develop the necessary skills to lead their teams to achieve the vision,
                                mission and goals of your organisation.
                            </div>

                            <table className="table table-light table-borderless">
                                <thead>
                                <tr>
                                    <th>Venue</th>
                                    <th>Duration</th>
                                    <th>Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Online</td>
                                    <td>20 hours</td>
                                    <td>12 February 2024</td>
                                </tr>
                                <tr>
                                    <td>Online</td>
                                    <td>20 hours</td>
                                    <td>12 February 2024</td>
                                </tr>
                                </tbody>
                            </table>

                            <div className="title mb-4">
                                Who should attend?
                            </div>

                            <div className="step-box">
                                <img src="/assets/images/step-icon.svg" alt=""/>
                                <div className="ms-3">
                                    Senior Managers who would like to refresh their leadership, management and team
                                    building skills
                                </div>
                            </div>
                            <div className="step-box">
                                <img src="/assets/images/step-icon.svg" alt=""/>
                                <div className="ms-3">
                                    Senior Managers who would like to refresh their leadership, management and team
                                    building skills
                                </div>
                            </div>
                            <div className="step-box">
                                <img src="/assets/images/step-icon.svg" alt=""/>
                                <div className="ms-3">
                                    Senior Managers who would like to refresh their leadership, management and team
                                    building skills
                                </div>
                            </div>


                            <div className="title mb-4 mt-5">
                                Outcomes
                            </div>

                            <div className="step-box">
                                <img src="/assets/images/step-icon.svg" alt=""/>
                                <div className="ms-3">
                                    Senior Managers who would like to refresh their leadership, management and team
                                    building skills
                                </div>
                            </div>
                            <div className="step-box">
                                <img src="/assets/images/step-icon.svg" alt=""/>
                                <div className="ms-3">
                                    Senior Managers who would like to refresh their leadership, management and team
                                    building skills
                                </div>
                            </div>
                            <div className="step-box">
                                <img src="/assets/images/step-icon.svg" alt=""/>
                                <div className="ms-3">
                                    Senior Managers who would like to refresh their leadership, management and team
                                    building skills
                                </div>
                            </div>
                            
                            <button className="register-btn">
                                Regiter now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;