import React, { useEffect, useState } from "react";
import "./partner.scss";
import axios from "axios";
import { API_URL } from "../../constants";
import { useTranslation } from "react-i18next";
function Partner(props) {
    const {t, i18n} = useTranslation();
    const lang = i18n.resolvedLanguage;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}main/partners/?page=1`, {
          headers: {
              'Accept-Language': lang,
          },
      })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {});
  }, [lang]);

  return (
    <div className="partner-component">
      <div className="partner-title">{t("Our partners")}</div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="partner-box">
              {data?.map((item) => (
                <div className="box" key={item.id}>
                  <a href={item?.link} target="_blank">
                    <img src={item?.image} alt={item?.image} />
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
