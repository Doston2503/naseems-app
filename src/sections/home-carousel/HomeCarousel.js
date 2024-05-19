import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './homeCarousel.scss'
import GalleryModal from "../../components/galleryModal/GalleryModal";

function HomeCarousel(props) {
    const [modal, setModal] = useState(false);
    const [id, setId] = useState(-1);

    const toggle = () => {
        setModal(!modal);

    };
    const items = [
        <div key={1} className="carousel-items padding-item" onClick={toggle}>
           <div className="first-row-item">
               <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
               <div className="overlay">
                   <img src="/assets/gallery/play.png" alt=""/>
               </div>
           </div>
            <div className="second-row-item">
                <img className="main-img" src="/assets/gallery/img2.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
        </div>,
        <div key={1} className="carousel-items" onClick={toggle}>
            <div className="first-row-item">
                <img className="main-img" src="/assets/gallery/img2.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
            <div className="second-row-item">
                <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
        </div>,
        <div key={1} className="carousel-items padding-item" onClick={toggle}>
            <div className="first-row-item">
                <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
            <div className="second-row-item">
                <img className="main-img" src="/assets/gallery/img2.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
        </div>,
        <div key={1} className="carousel-items" onClick={toggle}>
            <div className="first-row-item">
                <img className="main-img" src="/assets/gallery/img2.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
            <div className="second-row-item">
                <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
        </div>,
        <div key={1} className="carousel-items padding-item" onClick={toggle}>
            <div className="first-row-item">
                <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
            <div className="second-row-item">
                <img className="main-img" src="/assets/gallery/img2.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
        </div>,
        <div key={1} className="carousel-items" onClick={toggle}>
            <div className="first-row-item">
                <img className="main-img" src="/assets/gallery/img2.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
            <div className="second-row-item">
                <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
        </div>,
        <div key={1} className="carousel-items padding-item" onClick={toggle}>
            <div className="first-row-item">
                <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
            <div className="second-row-item">
                <img className="main-img" src="/assets/gallery/img2.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
        </div>,
        <div key={1} className="carousel-items" onClick={toggle}>
            <div className="first-row-item">
                <img className="main-img" src="/assets/gallery/img2.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
            <div className="second-row-item">
                <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
                <div className="overlay">
                    <img src="/assets/gallery/play.png" alt=""/>
                </div>
            </div>
        </div>,
    ];

    const responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 5 },
    };


    return (
       <div className="home-gallery-carousel">
           <AliceCarousel
               items={items}
               responsive={responsive}
               duration={400}
               animationType="slide"
               autoPlay
               autoPlayInterval={1000}
               slideTransitionDuration={500}
               infinite
               disableButtonsControls
               disableDotsControls
           />
           <GalleryModal modal={modal} toggle={toggle}/>
       </div>
    );
}

export default HomeCarousel;