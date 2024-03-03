import React from 'react';
import './newsBlogPage.scss'
import {Link} from "react-router-dom";
function News(props) {
    return (
        <div className="news-blog-page">
            <div className="title">
                News & blogs
            </div>
            <div className="text">
                Latest news about trainings
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="news-box">
                            <img src="/assets/images/news.png" alt="news img" className="img-fluid"/>
                            <div className="news-title">
                                10 Reasons to Choose an International Corporate
                                Training Provider for Local Business Growth
                            </div>
                            <Link to="/news-blogs/detail">
                                Details <img src="/assets/images/arrow-top.png" alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="news-box">
                            <img src="/assets/images/news.png" alt="news img" className="img-fluid"/>
                            <div className="news-title">
                                What’s the difference between Sales and Marketing?
                            </div>
                            <Link to="/news-blogs/detail">
                                Details <img src="/assets/images/arrow-top.png" alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="news-box">
                            <img src="/assets/images/news.png" alt="news img" className="img-fluid"/>
                            <div className="news-title">
                                Unlocking Success: Business Transformation and
                                Its Impact on Your Organisation
                            </div>
                            <Link to="/news-blogs/detail">
                                Details <img src="/assets/images/arrow-top.png" alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;