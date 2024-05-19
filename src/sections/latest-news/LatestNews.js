import React, {useEffect, useState} from 'react';
import './latestNews.scss'
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../constants";
function LatestNews(props) {
    const [data,setData]=useState([]);
    const [count,setCount]=useState(0);

    useEffect(()=>{
        axios.get(`${API_URL}news/list/?page=1`)
            .then((res)=>{
                setData(res.data.results);
                setCount(res.data.count);
            }).catch((error)=>{
        })
    },[]);
    return (
        <div className="latest-news-page">
            <div className="title">
                Latest news
            </div>
            <div className="container">
                <div className="row">
                    {data?.map((item)=>(
                        <div className="col-xl-4" key={item?.id}>
                            <div className="news-box">
                                <img src={item?.image} alt={item?.title} className="news-img"/>
                                <div className="news-title">
                                    {item?.title}
                                </div>
                                <Link to={"/news-blogs/"+item.slug}>
                                    Details <img src="/assets/images/arrow-top.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LatestNews;
