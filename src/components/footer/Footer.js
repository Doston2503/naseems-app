import React from 'react';
import './footer.scss'
import {Link} from "react-router-dom";
function Footer(props) {
    return (
        <div className="container">
            <div className="footer-component">
                <div className="row">
                    <div className="col">
                        <img src="/assets/logo.svg" alt=""/>

                        <div className="info-text">
                            The platform was developed by naseems agency.
                        </div>

                        <img src="/assets/images/info-img.png" alt=""/>
                    </div>
                    <div className="col">
                        <div className="footer-col-title">
                            Useful resources
                        </div>

                       <ul>
                           <li><a href=""> <a href="#">Naseems.uz</a></a></li>
                           <li><a href=""> <a href="#">Naseems.uz</a></a></li>
                           <li><a href=""> <a href="#">Naseems.uz</a></a></li>
                           <li><a href=""> <a href="#">Naseems.uz</a></a></li>
                       </ul>
                    </div>
                    <div className="col">
                        <div className="footer-col-title">
                            Courses
                        </div>

                        <ul>
                            <li><a href=""> <a href="#">BANKING AND FINANCE</a></a></li>
                            <li><a href=""> <a href="#">OPERATIONS </a></a></li>
                            <li><a href=""> <a href="#">MANAGEMENT</a></a></li>
                            <li><a href=""> <a href="#">DIGITAL</a></a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="footer-col-title">
                            Services
                        </div>

                        <ul>
                            <li><Link to="/about-us"> About</Link></li>
                            <li><Link to="/courses"> Courses</Link></li>
                            <li><Link to="/news-blogs"> News & blogs</Link></li>
                            <li><Link to="/contact"> Contact us</Link></li>

                        </ul>
                    </div>
                    <div className="col">
                        <div className="footer-col-title">
                            Contact us
                        </div>

                        <ul>
                            <li><a href=""> <a href="#">
                                <img className="me-3" src="/assets/images/phone.png" alt=""/>
                                +99891 220 00 00</a></a></li>
                            <li><a href=""> <a href="#">
                                <img className="me-3" src="/assets/images/message.png" alt=""/>
                                info@naseems.uz </a></a></li>
                        </ul>
                    </div>
                </div>

                <hr/>

                <div className="social-media">
                    <div className="text">
                        © Naseem’s consulting electronic platform 2024. All rights reserved
                    </div>

                    <div className="d-flex">
                        <a href="#" className="text-decoration-none">
                            <img src="/assets/images/instagram.png" alt=""/>
                        </a>
                        <a href="#" className="text-decoration-none">
                            <img className="mx-4" src="/assets/images/telegram.png" alt=""/>
                        </a>
                        <a href="#" className="text-decoration-none">
                            <img src="/assets/images/facebook.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;