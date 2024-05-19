import React, {useEffect, useState} from 'react';
import './partner.scss'
import axios from "axios";
import {API_URL} from "../../constants";
function Partner(props) {

    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}main/partners/?page=1`)
            .then((res)=>{
                setData(res.data.results);
            }).catch((error)=>{
        })
    },[]);

    return (
        <div className="partner-component">
            <div className="partner-title">
                Our partners
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="partner-box">
                            {data?.map((item)=>(
                                <div className="box" key={item.id}>
                                    <a href={item?.link} target="_blank">
                                        <img src={item?.image} alt={item?.image}/>
                                    </a>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;