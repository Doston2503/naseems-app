import React, { useEffect, useState } from "react";
import "./newsBlogPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants";
import Pagination from "@mui/material/Pagination";
import { useTranslation } from "react-i18next";
function News(props) {
    const {t, i18n} = useTranslation();
    const lang = i18n.resolvedLanguage;

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${API_URL}news/list/?page=${page}`, {
          headers: {
              'Accept-Language': lang,
          },
      })
      .then((res) => {
        setData(res.data.results);
        setCount(res.data.count);
      })
      .catch((error) => {});
  }, [page,lang]);

  function handleChange(e) {
    setPage(e.target.textContent);
  }
  return (
    <div className="news-blog-page">
      <div className="title">{t("News & blogs")}</div>
      <div className="text">{t("Latest news about trainings")}</div>

      <div className="container">
        <div className="row">
          {data?.map((item) => (
            <div className="col-xl-4" key={item?.id}>
              <div className="news-box">
                <img src={item?.image} alt={item?.title} className="main-img" />
                <div className="news-title">{item?.title}</div>
                <Link to={"/news-blogs/" + item.slug}>
                  {t("Details")}{" "}
                  <img src="/assets/images/arrow-top.png" alt="" />
                </Link>
              </div>
            </div>
          ))}
          <div className="mt-5 d-flex justify-content-end">
            <Pagination
              onChange={handleChange}
              // hideNextButton={true}
              // hidePrevButton={true}
              className="pagination"
              color="primary"
              count={count / 10 + 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
