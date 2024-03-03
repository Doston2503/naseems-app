import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './gallaryModal.scss'
import {Modal, ModalBody, ModalHeader} from 'reactstrap';

function GalleryModal({modal, toggle}) {
    const items = [
        <div key={1} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/big-img.png" alt=""/>
        </div>,
        <div key={2} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/big-img.png" alt=""/>
        </div>,
        <div key={3} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/big-img.png" alt=""/>
        </div>,
        <div key={4} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/big-img.png" alt=""/>
        </div>,
        <div key={5} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/big-img.png" alt=""/>
        </div>,
        <div key={6} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/big-img.png" alt=""/>
        </div>,
        <div key={7} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/big-img.png" alt=""/>
        </div>,
        <div key={8} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/big-img.png" alt=""/>
        </div>,
        <div key={9} className="carousel-items" onClick={toggle}>
            <img className="main-img" src="/assets/gallery/big-img.png" alt=""/>
        </div>,
    ];

    const responsive = {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 1 },
    };

    return (

        <Modal isOpen={modal} toggle={toggle} className="gallery-modal">
            <ModalHeader toggle={toggle}>
                <div className="modal-title">
                    Gallery
                </div>
            </ModalHeader>
            <ModalBody>
                <div className="row my-3">
                    <div className="col-xl-1"/>
                    <div className="col-xl-10">
                        <AliceCarousel
                            items={items}
                            responsive={responsive}
                            duration={400}
                            animationType="slide"
                            infinite
                            disableDotsControls
                        />
                    </div>
                </div>
            </ModalBody>

        </Modal>

    );
}

export default GalleryModal;