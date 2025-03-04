import React from 'react';
import { Link } from 'react-router-dom';
import { FaDraftingCompass, FaRulerCombined, FaHardHat, FaPhoneAlt } from 'react-icons/fa';

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
                    <h2>{type === 'interior' ? "Awesome Architectures" : "Our Specializations"}</h2>

                    {type === 'interior' ? (
                        <p>
                            Revolutionize your living and working spaces with cutting-edge interior designs that seamlessly blend aesthetics with functionality. Our expert designers work hand in hand with you to bring your vision to life, creating spaces that reflect your personality and meet your needs. Whether you're refreshing a single room or transforming an entire building, we ensure every element is designed with precision and creativity.
                        </p>
                    ) : (
                        <div className="specializationGrid">
                            <div className="specializationCard">
                                <FaDraftingCompass className="specializationIcon" />
                                <h3>Architecture</h3>
                                <p>Innovative design solutions blending functionality and aesthetics.</p>
                            </div>

                            <div className="specializationCard">
                                <FaRulerCombined className="specializationIcon" />
                                <h3>Land Surveying</h3>
                                <p>Precision mapping and measurement for construction projects.</p>
                            </div>

                            <div className="specializationCard">
                                <FaHardHat className="specializationIcon" />
                                <h3>Construction</h3>
                                <p>High-quality, sustainable, and durable construction services.</p>
                            </div>
                        </div>
                    )}

                    <div className="buttonBox">
                        {type === 'interior' ? (
                            <div className="contactInfo">
                                <h3 className="reachUsTitle">Reach Us</h3>
                                <p className="contactNumber">
                                    <FaPhoneAlt className="phoneIcon" />
                                    <a href="tel:+250788123456">+250 788 123 456</a>
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetailsCard;