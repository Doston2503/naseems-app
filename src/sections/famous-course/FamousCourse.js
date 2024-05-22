import React from "react";
import "./famousCourse.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import Pagination from "@mui/material/Pagination";

function FamousCourse(props) {
  const { t } = useTranslation();

  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [courses, setCourses] = useState([]);

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const [url, setUrl] = useState(`${API_URL}course/list/?page=${page}`);

  useEffect(() => {
    axios
      .get(`${API_URL}course/categories`)
      .then((res) => {
        setCategories(res.data.results);
      })
      .catch((error) => {});

    axios
      .get(`${API_URL}course/countries`)
      .then((res) => {
        setCountries(res.data.results);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCourses(res.data.results);
        setCount(res.data.count);
      })
      .catch((error) => {});
  }, [page, url]);

  function filterCourse(e) {
    e.preventDefault();

    let URL = `${API_URL}course/list/?page=${page}`;

    if (e.target.category.value) {
      URL += `&category=${e.target.category.value}`;
    }

    if (e.target.country.value) {
      URL += `&country=${e.target.country.value}`;
    }
    setPage(1);
    setUrl(URL);
  }

  function handleChange(e) {
    setPage(e.target.textContent);
  }

  return (
    <div className="famous-course-component">
      <div className="title">{t("Courses")}</div>
      <div className="text">{t("Our famous courses")}</div>

      <div className="container">
        <div className="row">
          <form onSubmit={filterCourse}>
            <select name="category" className="form-select">
              <option value={""}>{t("All category")}</option>
              {categories?.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
            <select name="country" className="form-select">
              <option value={""}>{t("All country")}</option>
              {countries?.map((country, index) => (
                <option key={index} value={country.id}>
                  {country.title}
                </option>
              ))}
            </select>
            <input
              placeholder="YYYY-MM-DD"
              className="form-control"
              name="date"
              type="date"
            />

            <button type="submit">{t("Filter")}</button>
          </form>
        </div>

        <div className="row">
          {courses?.map((course, index) => (
            <div className="col-xl-6" key={index}>
              <Link to={"courses/" + course?.slug}>
                <div className="course-box">
                  <img className="poster" src={course?.image} alt="" />

                  <div className="course-box-for-text">
                    <div className="course-name">{course?.title}</div>
                    <div className="course-country">
                      <div className="d-inline">
                        <img
                          className="poster"
                          src={course?.country?.image}
                          alt=""
                        />
                      </div>
                      <div className="ms-2 country-name">
                        {course?.country?.title}
                      </div>
                    </div>
                    <div className="course-date">
                      <span>{t("From")}</span>: 15.03.2024{" "}
                      <span className="ms-2">{t("To")}</span>: 12.04.2024
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-5 d-flex justify-content-end">
          <Pagination
            onChange={handleChange}
            className="pagination"
            color="primary"
            count={count / 10 + 1}
          />
        </div>
      </div>
    </div>
  );
}

export default FamousCourse;
