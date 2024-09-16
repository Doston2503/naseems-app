import React, { useEffect, useState } from "react";
import "./ourValues.scss";
import axios from "axios";
import { API_URL } from "../../constants";
import { useTranslation } from "react-i18next";

function OurValues(props) {
    const {t, i18n} = useTranslation();
    const lang = i18n.resolvedLanguage;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}main/values/?page=1`, {
          headers: {
              'Accept-Language': lang,
              'Cache-Control': 'no-cache'
          },
      })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {});
  }, [lang]);
  return (
      <div className="our-values-component">
          <div className="all-main-title">{t("Our Values")}</div>
          <div className="main-text">{t("Our core values of quality, innovation, success and collaboration form the basis of everything we do")}</div>

          <div className="container">
              <div className="row">
                  {data?.map((item) => (
                      <div className="col-xl-4" key={item?.id}>
                          <div className="box">
                              <img src={item?.image} alt={item?.image}/>
                              <div className="title">{item?.title}</div>
                              <div className="text">{item?.content}</div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default OurValues;
