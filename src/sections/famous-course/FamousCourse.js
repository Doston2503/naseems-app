import React from 'react';
import './famousCourse.scss'
import {Link} from "react-router-dom";

function FamousCourse(props) {

    function filterCourse(e) {
        e.preventDefault()
    }

    return (
        <div className="famous-course-component">
            <div className="title">
                Courses
            </div>
            <div className="text">
                Our famous courses
            </div>

            <div className="container">
                <div className="row">
                    <form onSubmit={filterCourse}>
                        <select name="category"
                                className="form-select">
                            <option value="category">Category</option>
                            <option value="category">Category</option>
                            <option value="category">Category</option>
                        </select>
                        <select name="country"
                                className="form-select">
                            <option value="country">Country</option>
                            <option value="country">Country</option>
                            <option value="country">Country</option>
                        </select>
                        <input
                            placeholder="YYYY-MM-DD"
                            className="form-control"
                            name="date"
                            type="date"/>
                    </form>
                </div>

                <div className="row">
                    <div className="col-xl-6">
                     <Link to="/courses/detail">
                         <div className="course-box">
                             <img src="/assets/images/course-img.png" alt=""/>

                             <div className="course-box-for-text">
                                 <div className="course-name">
                                     Advanced masterclass in business administration
                                 </div>
                                 <div className="course-country">
                                     <div className="d-inline">
                                         <img src="/assets/images/flag.png" alt=""/>
                                     </div>
                                     <div className="ms-2 country-name">Paris, France</div>
                                 </div>
                                 <div className="course-date">
                                     <span>From</span>: 15.03.2024  <span className="ms-2">To</span>: 12.04.2024
                                 </div>
                             </div>
                         </div>
                     </Link>
                    </div>
                    <div className="col-xl-6">
                        <Link to="/courses/detail">
                            <div className="course-box">
                                <img src="/assets/images/course-img.png" alt=""/>

                                <div className="course-box-for-text">
                                    <div className="course-name">
                                        Advanced masterclass in business administration
                                    </div>
                                    <div className="course-country">
                                        <div className="d-inline">
                                            <img src="/assets/images/flag.png" alt=""/>
                                        </div>
                                        <div className="ms-2 country-name">Paris, France</div>
                                    </div>
                                    <div className="course-date">
                                        <span>From</span>: 15.03.2024  <span className="ms-2">To</span>: 12.04.2024
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-6">
                        <Link to="/courses/detail">
                            <div className="course-box">
                                <img src="/assets/images/course-img.png" alt=""/>

                                <div className="course-box-for-text">
                                    <div className="course-name">
                                        Advanced masterclass in business administration
                                    </div>
                                    <div className="course-country">
                                        <div className="d-inline">
                                            <img src="/assets/images/flag.png" alt=""/>
                                        </div>
                                        <div className="ms-2 country-name">Paris, France</div>
                                    </div>
                                    <div className="course-date">
                                        <span>From</span>: 15.03.2024  <span className="ms-2">To</span>: 12.04.2024
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-xl-6">
                        <Link to="/courses/detail">
                            <div className="course-box">
                                <img src="/assets/images/course-img.png" alt=""/>

                                <div className="course-box-for-text">
                                    <div className="course-name">
                                        Advanced masterclass in business administration
                                    </div>
                                    <div className="course-country">
                                        <div className="d-inline">
                                            <img src="/assets/images/flag.png" alt=""/>
                                        </div>
                                        <div className="ms-2 country-name">Paris, France</div>
                                    </div>
                                    <div className="course-date">
                                        <span>From</span>: 15.03.2024  <span className="ms-2">To</span>: 12.04.2024
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FamousCourse;