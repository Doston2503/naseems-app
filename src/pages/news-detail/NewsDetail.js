import React, {useEffect, useState} from "react";
import "./newsDetail.scss";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../constants";
import {useTranslation} from "react-i18next";

function NewsDetail(props) {
    const {t, i18n} = useTranslation();
    const lang = i18n.resolvedLanguage;

    const params = props.match.params.detail;

    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get(`${API_URL}news/detail/${params}`, {
                headers: {
                    'Accept-Language': lang,
                },
            })
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
            });
    }, [lang]);

    const dateObj = new Date(data?.created_date);
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
        <div className="news-detail-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2"/>
                    <div className="col-xl-8">
                        <div className="course-line">
                            <Link to="/news-blogs">{t("News & blogs")}</Link>
                            <img src="/assets/images/go-right.png" alt=""/>
                            <b>{params}</b>
                        </div>

                        <div className="detail-box">
                            <div className="detail-box-header">
                                <button>{t("Blog")}</button>
                                <div className="date d-flex">
                                    <span>{formattedDate}</span>

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
                            <div dangerouslySetInnerHTML={{__html: data?.content}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDetail;
