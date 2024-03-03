import React from 'react';
import './treningCourse.scss'
import {Link} from "react-router-dom";

function TreningCourse(props) {
    return (
        <div className="trening-course-page">
            <div className="container">
                <div className="trening-main-text">
                    For three decades, we've helped organizations thrive by maximizing the potential of their leaders,
                    managers, and professionals. We offer 100+ short courses across various fields, delivered globally
                    in-person, online, or through blended learning. Our approach unites practical experience with
                    academic insights, providing highly relevant, immediately-implementable skills. Our exceptional
                    client service is proven by our outstanding satisfaction ratings and loyal customer base."
                </div>

                <div className="row">
                    <div className="col-xl-4">
                        <div className="trening-box">
                            <div className="count">+22K</div>
                            <div className="text">
                                Students use our platform
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 border-box">
                        <div className="trening-box">
                            <div className="count">+950</div>
                            <div className="text">
                                Courses in Fiction Platform
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="trening-box">
                            <div className="count">+150</div>
                            <div className="text">
                                Recently issued certificates
                            </div>
                        </div>
                    </div>
                </div>

                <div className="trening-main-title">
                    Corporate training courses
                </div>

                <div className="row">
                    <div className="col-xl-4">
                    <Link to="/courses" className="course-box">
                        <div className="course-box-title">
                            MANAGEMENT
                        </div>
                       <div>
                           <img src="/assets/trening/img1.png" alt=""/>
                       </div>
                    </Link>
                </div>
                    <div className="col-xl-4">
                        <Link to="/courses" className="course-box">
                            <div className="course-box-title">
                                BANKING AND FINANCE
                            </div>
                            <div>
                                <img src="/assets/trening/img2.png" alt=""/>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4">
                        <Link to="/courses" className="course-box">
                            <div className="course-box-title">
                                LEADERSHIP
                            </div>
                           <div>
                               <img src="/assets/trening/img3.png" alt=""/>
                           </div>
                        </Link>
                    </div>
                    <div className="col-xl-4">
                        <Link to="/courses" className="course-box course-box-4">
                            <div className="course-box-title">
                                HUMAN RESOURCES
                            </div>
                           <div>
                               <img src="/assets/trening/img4.png" alt=""/>
                           </div>
                        </Link>
                    </div>
                    <div className="col-xl-4">
                        <Link to="/courses" className="course-box">
                            <div className="course-box-title">
                                LAW
                            </div>
                            <div>
                                <img src="/assets/trening/img5.png" alt=""/>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-4">
                        <Link to="/courses" className="course-box">
                            <div className="course-box-title">
                                DIGITAL
                            </div>
                           <div>
                               <img src="/assets/trening/img6.png" alt=""/>
                           </div>
                        </Link>
                    </div>
                    <div className="col-xl-4">
                        <Link to="/courses" className="course-box">
                            <div className="course-box-title">
                                GOVERNANCE AND RISK MANAGEMENT
                            </div>
                           <div>
                               <img src="/assets/trening/img7.png" alt=""/>
                           </div>
                        </Link>
                    </div>
                    <div className="col-xl-4">
                        <Link to="/courses" className="course-box">
                            <div className="course-box-title">
                                EMPLOYEE WELLBEING AND DIVERSITY
                            </div>
                           <div>
                               <img src="/assets/trening/img8.png" alt=""/>
                           </div>
                        </Link>
                    </div>
                    <div className="col-xl-4">
                        <Link to="/courses" className="course-box">
                            <div className="course-box-title">
                                SUSTAINABILITY AND CLIMATE CHANGE
                            </div>
                           <div>
                               <img src="/assets/trening/img9.png" alt=""/>
                           </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TreningCourse;