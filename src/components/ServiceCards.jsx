import React from 'react';

// images
import InteriorImg from '../assets/images/interior/01.jpg';
import ConstructionImg from '../assets/images/construction/01.jpg';

const ServiceCards = () => {
    return (
        <div className="serviceCards">
            <div className="sectionTitle pt-5">
                <h1 className="text-center text-uppercase"><span>Our</span> Services</h1>
                <p className="text-center text-uppercase">What we do</p>
            </div>

            <div className="container-lg pt-4 pb-5 d-flex flex-wrap justify-content-center justify-content-lg-start" data-aos="fade-up" data-aos-duration="700">
                <div className="card mb-4 mb-lg-5 ms-2 me-2 flex-grow-1">
                    <img src={InteriorImg} alt="interior"/>

                    <div className="cardTextContent">
                        <p>Interior Design</p>
                    </div>
                </div>

                <div className="card mb-4 mb-sm-5 ms-2 me-2 flex-grow-1">
                    <img src={ConstructionImg} alt="architecture"/>

                    <div className="cardTextContent">
                        <p>Architecture</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;