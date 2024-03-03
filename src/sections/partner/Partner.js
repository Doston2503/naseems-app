import React from 'react';
import './partner.scss'
function Partner(props) {
    return (
        <div className="partner-component">
            <div className="partner-title">
                Our partners
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="partner-box">
                            <div className="box">
                                <img src="/assets/partner/partner3.png" alt="img"/>
                            </div>
                            <div className="box middle-box">
                                <img src="/assets/partner/partner1.png" alt="img"/>
                            </div>
                            <div className="box middle-box">
                                <img src="/assets/partner/partner2.png" alt="img"/>
                            </div>
                            <div className="box">
                                <img src="/assets/partner/partner5.png" alt="img"/>
                            </div>
                            <div className="box middle-box">
                                <img src="/assets/partner/partner6.png" alt="img"/>
                            </div>
                        </div>
                        <div className="partner-box">
                            <div className="box">
                                <img src="/assets/partner/partner8.png" alt="img"/>
                            </div>
                            <div className="box big-box">
                                <img src="/assets/partner/partner7.png" alt="img"/>
                            </div>
                            <div className="box">
                                <img src="/assets/partner/partner3.png" alt="img"/>
                            </div>
                            <div className="box big-box">
                                <img src="/assets/partner/partner9.png" alt="img"/>
                            </div>
                            <div className="box">
                                <img src="/assets/partner/partner10.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;