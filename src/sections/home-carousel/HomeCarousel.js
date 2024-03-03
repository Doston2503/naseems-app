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
        <div key={1} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
            <div className="overlay">
                <img src="/assets/gallery/play.png" alt=""/>
            </div>
        </div>,
        <div key={2} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
            <div className="overlay">
                <img src="/assets/gallery/play.png" alt=""/>
            </div>
        </div>,
        <div key={3} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
            <div className="overlay">
                <img src="/assets/gallery/play.png" alt=""/>
            </div>
        </div>,
        <div key={4} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
            <div className="overlay">
                <img src="/assets/gallery/play.png" alt=""/>
            </div>
        </div>,
        <div key={5} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
            <div className="overlay">
                <img src="/assets/gallery/play.png" alt=""/>
            </div>
        </div>,
        <div key={6} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
            <div className="overlay">
                <img src="/assets/gallery/play.png" alt=""/>
            </div>
        </div>,
        <div key={7} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
            <div className="overlay">
                <img src="/assets/gallery/play.png" alt=""/>
            </div>
        </div>,
        <div key={8} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
            <div className="overlay">
                <img src="/assets/gallery/play.png" alt=""/>
            </div>
        </div>,
        <div key={9} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/img1.png" alt=""/>
            <div className="overlay">
                <img src="/assets/gallery/play.png" alt=""/>
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