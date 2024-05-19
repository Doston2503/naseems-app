import React, {useEffect, useState} from 'react';
import './faq.scss'
import axios from "axios";
import {API_URL} from "../../constants";
function Faq(props) {
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}main/faq/?page=1`)
            .then((res)=>{
                setData(res.data.results);
            }).catch((error)=>{
        })
    },[]);

    return (
        <div className="faq-component">
            <div className="faq-title">
                Frequently asked questions
            </div>

          <div className="container">
              <div className="row">
                  <div className="col-xl-12">
                      <div id="accordion">
                          {data?.map((item,index)=>(

                              <div className="card" key={index}>
                                  <div className="card-header" data-bs-toggle="collapse"
                                       data-bs-target={`#collapse${item.id}`}>
                                      <span> {item.title} </span>
                                      <img src="/assets/images/faq-arrow.png" alt=""/>
                                  </div>
                                  <div id={`collapse${item.id}`} className="collapse" data-bs-parent="#accordion">
                                      <div className="card-body">
                                          {item.content}
                                      </div>
                                  </div>
                              </div>

                          ))}
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default Faq;