import React from 'react';
import './gallery.scss'
import HomeCarousel from "../home-carousel/HomeCarousel";
function Gallery(props) {
    return (
        <div className="gallery-page">
            <div className="gallery-title">
                Gallery
            </div>
            <div className="gallery-text">
                Naseems consulting is - <span>Opportunity</span> book
            </div>
            <HomeCarousel/>
        </div>
    );
}

export default Gallery;