import React from 'react';
import './faq.scss'
function Faq(props) {
    return (
        <div className="faq-component">
            <div className="faq-title">
                Frequently asked questions
            </div>

          <div className="container">
              <div className="row">
                  <div className="col-xl-12">
                      <div id="accordion">

                          <div className="card">
                              <div className="card-header" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                 <span> Which markets do you operate in ? </span>
                                  <img src="/assets/images/faq-arrow.png" alt=""/>
                              </div>
                              <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                                  <div className="card-body">
                                      Naseems consulting is leading corporate training provider,
                                      offering over 150 short courses (3 days - 3 weeks) in the following
                                      subject areas: Advanced Management; Leadership; Law; Oil & Gas; Digital;
                                      Operations Management; Finance; Human Resources;
                                      Public Relations; Sales; Compliance; Sustainability; and Employee Well Being.
                                  </div>
                              </div>
                          </div>

                          <div className="card">
                              <div className="card-header " data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                  <span>Who we are? </span>
                                  <img src="/assets/images/faq-arrow.png" alt=""/>

                              </div>
                              <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                  <div className="card-body">
                                      Naseems consulting is leading corporate training provider,
                                      offering over 150 short courses (3 days - 3 weeks) in the following
                                      subject areas: Advanced Management; Leadership; Law; Oil & Gas; Digital;
                                      Operations Management; Finance; Human Resources;
                                      Public Relations; Sales; Compliance; Sustainability; and Employee Well Being.
                                  </div>
                              </div>
                          </div>

                          <div className="card">
                              <div className="card-header" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                  <span>Do you offer training overseas</span>
                                  <img src="/assets/images/faq-arrow.png" alt=""/>
                              </div>
                              <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                  <div className="card-body">
                                      Naseems consulting is leading corporate training provider,
                                      offering over 150 short courses (3 days - 3 weeks) in the following
                                      subject areas: Advanced Management; Leadership; Law; Oil & Gas; Digital;
                                      Operations Management; Finance; Human Resources;
                                      Public Relations; Sales; Compliance; Sustainability; and Employee Well Being.
                                  </div>
                              </div>
                          </div>

                          <div className="card">
                              <div className="card-header" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                  <span>What language is the training in?</span>
                                  <img src="/assets/images/faq-arrow.png" alt=""/>
                              </div>
                              <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                  <div className="card-body">
                                      Naseems consulting is leading corporate training provider,
                                      offering over 150 short courses (3 days - 3 weeks) in the following
                                      subject areas: Advanced Management; Leadership; Law; Oil & Gas; Digital;
                                      Operations Management; Finance; Human Resources;
                                      Public Relations; Sales; Compliance; Sustainability; and Employee Well Being.
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default Faq;