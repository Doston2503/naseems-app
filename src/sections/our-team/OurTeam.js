import React, { useEffect, useState } from "react";
import "./ourTeam.scss";
import axios from "axios";
import { API_URL } from "../../constants";
import { useTranslation } from "react-i18next";
function OurTeam(props) {
    const {t, i18n} = useTranslation();
    const lang = i18n.resolvedLanguage;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}main/teams/?page=1`, {
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
    <div className="our-team-component">
      <div className="all-main-title mb-5">{t("Meet our team")}</div>

      <div className="container">
        <div className="row">
          {data?.map((item) => (
            <div className="col-xl-3" key={item?.id}>
              <div className="team-box">
                <img
                  className="w-100 h-100"
                  src={item?.image}
                  alt={item?.image}
                />
                <div className="overlay">
                  <div className="name">{item?.full_name}</div>
                  <div className="job">{item?.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
