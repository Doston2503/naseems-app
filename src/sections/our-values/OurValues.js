import React, { useEffect, useState } from "react";
import "./ourValues.scss";
import axios from "axios";
import { API_URL } from "../../constants";
import { useTranslation } from "react-i18next";

function OurValues(props) {
  const { t } = useTranslation();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}main/values/?page=1`)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="our-values-component">
      <div className="all-main-title mb-5">{t("Our Values")}</div>

      <div className="container">
        <div className="row">
          {data?.map((item) => (
            <div className="col-xl-4" key={item?.id}>
              <div className="box">
                <img src={item?.image} alt={item?.image} />
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
