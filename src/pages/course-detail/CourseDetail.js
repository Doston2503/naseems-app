import React, { useEffect, useState } from "react";
import "./courseDetail.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";

function CourseDetail(props) {
  const { t } = useTranslation();

  const { detail } = useParams();

  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}course/${detail}`)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((error) => {});
  }, []);

  const dateObj = new Date(course?.created_date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return (
    <div className="course-detail-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-2" />
          <div className="col-xl-8">
            <div className="course-line">
              <Link to="/courses">{t("Courses")}</Link>
              <img src="/assets/images/go-right.png" alt="" />
              <b>{detail}</b>
            </div>

            <div className="detail-box">
              <div className="detail-box-header">
                <button>{course?.category?.title}</button>
                <div className="date">Start date: {formattedDate}</div>
              </div>

              <div className="title">{course?.title}</div>
              <div className="text">{course?.content}</div>

              <table className="table table-light table-borderless">
                <thead>
                  <tr>
                    <th>Venue</th>
                    <th>Duration</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Online</td>
                    <td>20 hours</td>
                    <td>12 February 2024</td>
                  </tr>
                  <tr>
                    <td>Online</td>
                    <td>20 hours</td>
                    <td>12 February 2024</td>
                  </tr>
                </tbody>
              </table>

              {course?.checklists?.map((item, index) => (
                <>
                  <div className="title mb-4 mt-4">{item.title}</div>
                  {item.items?.map((step, index) => (
                    <div className="step-box" key={index}>
                      <img src="/assets/images/step-icon.svg" alt="" />
                      <div className="ms-3">{step.title}</div>
                    </div>
                  ))}
                </>
              ))}

              <button className="register-btn">{t("Regiter now")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
