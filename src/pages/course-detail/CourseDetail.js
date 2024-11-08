import React, { useEffect, useState } from "react";
import "./courseDetail.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";
import AliceCarousel from "react-alice-carousel";

function CourseDetail({courseId,setCourseId}) {
  const {t, i18n} = useTranslation();
  const lang = i18n.resolvedLanguage;
  console.log(courseId,setCourseId)

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
        setCourseId(res.data.id);
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
  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 1 },
  };

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
              <div className="text" dangerouslySetInnerHTML={{__html: course?.content}}/>



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

              <div className="title mb-4 mt-5">{t("What we offer")}</div>

              {course?.extra_contents?.map((step, index) => {
                // `items` arrayni JSX tashqarisida e'lon qilamiz
                const items = step?.images?.map((image, imgIndex) => (
                    <div className="item" key={imgIndex}>
                      <img className="w-100 mb-3" style={{height: "400px"}} src={image?.image} alt=""/>
                    </div>
                ));

                return (
                    <div className="country-box" key={index}>
                      <div className="country-title">{step.title}</div>
                      <div className="country-content" dangerouslySetInnerHTML={{__html: step.content}}/>

                      <div className="row ">
                        <AliceCarousel
                            items={items}
                            responsive={responsive}
                            duration={400}
                            animationType="slide"
                            autoPlay
                            autoPlayInterval={1000}
                            slideTransitionDuration={500}
                            infinite
                            disableDotsControls
                        />
                      </div>
                    </div>
                );
              })}

              {course?.certifications?.map((item, index) => (
                  <>
                    <div key={index} className="title mb-3 mt-5">{item.title}</div>
                    <img className="w-100" src={item?.image} key={index} alt=""/>
                  </>
              ))}


              <Link style={{color: "white", textDecoration: "none"}} to={'/contact'}>
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
