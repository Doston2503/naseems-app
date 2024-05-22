import React, { useEffect, useState } from "react";
import "./newsDetail.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";
import { useTranslation } from "react-i18next";

function NewsDetail(props) {
  const { t } = useTranslation();

  const params = props.match.params.detail;

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}news/detail/${params}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {});
  }, []);

  const dateObj = new Date(data?.created_date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <div className="news-detail-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-2" />
          <div className="col-xl-8">
            <div className="course-line">
              <Link to="/news-blogs">{t("News & blogs")}</Link>
              <img src="/assets/images/go-right.png" alt="" />
              <b>{params}</b>
            </div>

            <div className="detail-box">
              <div className="detail-box-header">
                <button>Blog</button>
                <div className="date d-flex">
                  <span>{formattedDate}</span>
                  {/*  <span className="ms-3">
                                       <img src="/assets/images/view.png" className="me-1" alt=""/>
                                       99 000 000</span>*/}
                </div>
              </div>

              <div className="title">{data?.title}</div>

              <div className="news-detail-img mb-4">
                <img
                  className="img-fluid w-100"
                  src={data?.image}
                  alt={data?.title}
                />
              </div>

              <div className="reason-text">{data?.content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
