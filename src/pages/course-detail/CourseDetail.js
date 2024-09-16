import React, { useEffect, useState } from "react";
import "./courseDetail.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";

function CourseDetail(props) {
  const {t, i18n} = useTranslation();
  const lang = i18n.resolvedLanguage;

  const { detail } = useParams();

  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}course/${detail}`,{
      headers: {
        'Accept-Language': lang,
      },
    })
      .then((res) => {
        setCourse(res.data);
      })
      .catch((error) => {});
  }, [lang]);

  const dateObj = new Date(course?.created_date);
  const options = {year: "numeric", month: "long", day: "numeric"};
  let formattedDate;
  if (lang === 'uz') {
    // O'zbek tili uchun qo'lda sanani formatlash
    const uzbekMonths = [
      'yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun',
      'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'
    ];
    const day = dateObj.getDate();
    const month = uzbekMonths[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    formattedDate = `${day} ${month} ${year} yil`;
  } else {
    // Ingliz yoki rus tillari uchun toLocaleDateString ishlatiladi
    formattedDate = dateObj.toLocaleDateString(lang, options);
  }

  return (
    <div className="course-detail-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-2" />
          <div className="col-xl-8">
            <div className="course-line">
              <Link to="/courses">{t("Courses")}</Link>
              <img src="/assets/images/go-right.png" alt=""/>
              <b>{detail}</b>
            </div>

            <div className="detail-box">
              <div className="detail-box-header">
                <button>{course?.category?.title}</button>
                <div className="date">{formattedDate}</div>
              </div>

              <div className="title">{course?.title}</div>
              <div className="text">{course?.content}</div>


              {course?.checklists?.map((item, index) => (
                  <>
                    <div key={index} className="title mb-4 mt-4">{item.title}</div>
                    {item.items?.map((step, index) => (
                        <div className="step-box" key={index}>
                          <img src="/assets/images/step-icon.svg" alt=""/>
                          <div className="ms-3">{step.title}</div>
                        </div>
                    ))}
                  </>
              ))}

              <div  className="title mb-4 mt-5">{t("What we offer")}</div>

              {course?.extra_contents?.map((step, index) => (
                  <div className="country-box" key={index}>
                    <div className="country-title" >{step.title}</div>
                    <div className="country-content">{step.content}</div>

                    <div className="row">
                      {step?.images?.map((image, index) => (
                          <div className="col-xl-4" key={index}>
                            <img className="w-100 h-100 mb-3" src={image?.image} alt=""/>
                          </div>
                      ))}
                    </div>
                  </div>
              ))}

              {course?.certifications?.map((item, index) => (
                  <>
                    <div key={index} className="title mb-3 mt-5">{item.title}</div>
                          <img className="w-100" src={item?.image} key={index} alt=""/>
                  </>
              ))}


              <Link style={{color: "white", textDecoration: "none"}} to={'/contacts'}>
                <button className="register-btn">
                  {t("Regiter now")}
                </button>
              </Link>

          </div>
        </div>
      </div>
    </div>
</div>
)
  ;
}

export default CourseDetail;
