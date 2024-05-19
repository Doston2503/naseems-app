import React, {useEffect, useState} from 'react';
import './treningCourse.scss'
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../constants";

function TreningCourse(props) {
    const [data,setData]=useState([]);
    const [courses,setCourses]=useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}main/counters/?page=1`)
            .then((res)=>{
                setData(res.data.results);
            }).catch((error)=>{
        });

        axios.get(`${API_URL}course/list/?page=1`)
            .then((res)=>{
                setCourses(res.data.results);
            }).catch((error)=>{
        })
    },[]);

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
                    {data?.map(item=>(
                        <div className="col-xl-4" key={item?.id}>
                            <div className={item?.id===2 ? "trening-box border-box":"trening-box"}>
                                <div className="count">+ {item?.count>1000 ? (item?.count/1000)+"K":item?.count}</div>
                                <div className="text">
                                    {item?.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="trening-main-title">
                    Corporate training courses
                </div>

                <div className="row">
                    {courses?.map((item,index)=>(
                        <div className="col-xl-4" key={index}>
                            <Link to={"courses/"+item?.slug} className="course-box">
                                <div className="course-box-title">
                                    {item?.category?.title}
                                </div>
                                <div>
                                    {/*<img src={item?.image} alt=""/>*/}
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default TreningCourse;