import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./homeCarousel.scss";
import GalleryModal from "../../components/galleryModal/GalleryModal";
import axios from "axios";
import { API_URL } from "../../constants";

function HomeCarousel(props) {
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}gallery/list/home`)
      .then((res) => {
        setData(res.data);
        setModalData(res.data);
      })
      .catch((error) => {});
  }, []);

  const [modal, setModal] = useState(false);
  const [id, setId] = useState(-1);

  const toggle = () => {
    setModal(!modal);
  };

  // const items = [
  //   <div key={1} className="carousel-items padding-item" onClick={toggle}>
  //     <div className="first-row-item">
  //       <img className="main-img" src="/assets/gallery/img1.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //     <div className="second-row-item">
  //       <img className="main-img" src="/assets/gallery/img2.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //   </div>,
  //   <div key={1} className="carousel-items" onClick={toggle}>
  //     <div className="first-row-item">
  //       <img className="main-img" src="/assets/gallery/img2.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //     <div className="second-row-item">
  //       <img className="main-img" src="/assets/gallery/img1.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //   </div>,
  //   <div key={1} className="carousel-items padding-item" onClick={toggle}>
  //     <div className="first-row-item">
  //       <img className="main-img" src="/assets/gallery/img1.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //     <div className="second-row-item">
  //       <img className="main-img" src="/assets/gallery/img2.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //   </div>,
  //   <div key={1} className="carousel-items" onClick={toggle}>
  //     <div className="first-row-item">
  //       <img className="main-img" src="/assets/gallery/img2.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //     <div className="second-row-item">
  //       <img className="main-img" src="/assets/gallery/img1.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //   </div>,
  //   <div key={1} className="carousel-items padding-item" onClick={toggle}>
  //     <div className="first-row-item">
  //       <img className="main-img" src="/assets/gallery/img1.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //     <div className="second-row-item">
  //       <img className="main-img" src="/assets/gallery/img2.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //   </div>,
  //   <div key={1} className="carousel-items" onClick={toggle}>
  //     <div className="first-row-item">
  //       <img className="main-img" src="/assets/gallery/img2.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //     <div className="second-row-item">
  //       <img className="main-img" src="/assets/gallery/img1.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //   </div>,
  //   <div key={1} className="carousel-items padding-item" onClick={toggle}>
  //     <div className="first-row-item">
  //       <img className="main-img" src="/assets/gallery/img1.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //     <div className="second-row-item">
  //       <img className="main-img" src="/assets/gallery/img2.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //   </div>,
  //   <div key={1} className="carousel-items" onClick={toggle}>
  //     <div className="first-row-item">
  //       <img className="main-img" src="/assets/gallery/img2.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //     <div className="second-row-item">
  //       <img className="main-img" src="/assets/gallery/img1.png" alt="" />
  //       <div className="overlay">
  //         <img src="/assets/gallery/play.png" alt="" />
  //       </div>
  //     </div>
  //   </div>,
  // ];

  const itemData = [];
  for (let i = 0; i < data.length; i += 2) {
    itemData.push({ top: data[i], bottom: data[i + 1] });
  }

  const handleFilterImage = (id) => {
    const imageData = [...modalData];
    const myData = [
      imageData.find((item) => item.id === id),
      ...imageData.filter((item) => item.id !== id),
    ];
    setModalData(myData);
  };

  const items = itemData?.map((item, index) => (
    <div key={index} className="carousel-items padding-item" onClick={toggle}>
      <div
        className="first-row-item"
        onClick={() => handleFilterImage(item?.top?.id)}
      >
        <img className="main-img" src={item?.top?.media} alt="" />
        <div className="overlay">
          <img src="/assets/gallery/play.png" alt="" />
        </div>
      </div>
      <div
        className="second-row-item"
        onClick={() => handleFilterImage(item?.bottom?.id)}
      >
        <img className="main-img" src={item?.bottom?.media} alt="" />
        <div className="overlay">
          <img src="/assets/gallery/play.png" alt="" />
        </div>
      </div>
    </div>
  ));

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
      <GalleryModal modalData={modalData} modal={modal} toggle={toggle} />
    </div>
  );
}

export default HomeCarousel;
