import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';

const HeroSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="carouselItem carouselItem1 position-relative">
                <Carousel.Caption className="carouselCaption position-absolute">
                    <h1 className="animate__animated animate__fadeInDown">We create beautiful Modern single Villa</h1>
                    {/* <Link to="/project-gallary" className="animate__animated animate__fadeInDown mt-2 mt-lg-4 d-inline-block text-decoration-none text-white bg-primary link">View More</Link> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem carouselItem2 position-relative">
                <Carousel.Caption className="carouselCaption position-absolute">
                    <h1 className="animate__animated animate__fadeInDown">Luxurious single family home</h1>
                         </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem carouselItem3 position-relative">
                <Carousel.Caption className="carouselCaption position-absolute">
                    <h1 className="animate__animated animate__fadeInDown">Pleasing  Bar restaurant with full aeration</h1>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroSlider;