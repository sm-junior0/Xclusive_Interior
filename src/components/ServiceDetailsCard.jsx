import React from 'react';
import { Link } from 'react-router-dom';

// images
import InteriorImg from '../assets/images/interior/09.jpg';
import ConstructionImg from '../assets/images/construction/08.jpg';

const ServiceDetailsCard = ({ type }) => {
    return (
        <div className="container-lg pt-4 pb-5" data-aos="fade-up" data-aos-duration="700">
            <div className={`serviceDetailsCard ${type} position-relative pt-4 pb-4 d-flex w-100`}>
                <div className="serviceDetailsCardImg">
                    <img src={type === 'interior' ? InteriorImg : ConstructionImg} alt={type} />
                </div>

                <div className={`serviceDetailsCardDesc position-absolute ${type === 'interior' ? 'interiorDesc' : 'constructionDesc'}`}>
                    <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
                    <p>
                        {type === 'interior' 
                            ? "Transform your spaces with our innovative interior design solutions that blend functionality with aesthetics. Our team of experienced designers work closely with you to understand your vision and create spaces that reflect your style and meet your needs. Whether you're looking to redesign a single room or undertake a complete home renovation, we ensure that every detail is meticulously crafted to perfection."
                            : "Build your dreams with our comprehensive construction services, ensuring quality and durability at every step. From residential homes to commercial buildings, our experienced team manages all aspects of construction, including project planning, material selection, and on-site management. We prioritize safety and sustainability, using the latest techniques and technologies to deliver projects on time and within budget."}
                    </p>
                    <div className="buttonBox">
                        <Link to={`/${type}`} className="learnMoreBtn">Learn more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetailsCard;
