import React from 'react';
import Header from "../../sections/header/Header";
import TreningCourse from "../../sections/trening-course/TreningCourse";
import Gallery from "../../sections/gallery/Gallery";
import LatestNews from "../../sections/latest-news/LatestNews";
import Faq from "../../sections/faq/Faq";
import Partner from "../../sections/partner/Partner";

function Home(props) {
    return (
        <>
            <Header/>
            <TreningCourse/>
            <Gallery/>
            <LatestNews/>
            <Faq/>
            <Partner/>
        </>
    );
}

export default Home;