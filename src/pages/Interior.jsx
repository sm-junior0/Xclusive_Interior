import React from 'react';
import { Link } from 'react-router-dom';

// components
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

// images
import InteriorImg01 from '../assets/images/interior/01.jpg';
import InteriorImg02 from '../assets/images/interior/02.jpg';
import InteriorImg03 from '../assets/images/interior/03.jpg';
import InteriorImg05 from '../assets/images/interior/05.jpg';
import InteriorImg06 from '../assets/images/interior/06.jpg';
import InteriorImg08 from '../assets/images/interior/08.jpg';
import ExclusiveImg01 from '../assets/images/exclusive/01.jpg';
import ExclusiveImg02 from '../assets/images/exclusive/02.jpg';
import ExclusiveImg03 from '../assets/images/exclusive/03.jpg';
import ExclusiveImg04 from '../assets/images/exclusive/04.jpg';
import ExclusiveImg05 from '../assets/images/exclusive/05.jpg';
import ExclusiveImg06 from '../assets/images/exclusive/06.jpeg';

const Interior = () => {
    return (
        <AppLayout>
            <BreadCrumb page="interior"/>
            <div className="sectionTitle pt-5">
                <h1 className="text-center text-uppercase"><span>Interior </span> Services</h1>
                <p className="text-center text-uppercase">What we do</p>
            </div>

            <div className="serviceCards container-xl pt-4 pb-5 d-flex flex-wrap justify-content-center justify-content-lg-start" data-aos="fade-up">
                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={InteriorImg01} alt="interiorImg"/>

                    <div className="cardTextContent">
                        <p>Residential</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={InteriorImg02} alt="interiorImg"/>

                    <div className="cardTextContent">
                        <p>Commercial</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={InteriorImg03} alt="interiorImg"/>

                    <div className="cardTextContent">
                        <p>Instutution</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={InteriorImg08} alt="interiorImg"/>

                    <div className="cardTextContent">
                        <p>Office</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={InteriorImg05} alt="interiorImg"/>

                    <div className="cardTextContent">
                        <p>Resort</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={InteriorImg06} alt="interiorImg"/>

                    <div className="cardTextContent">
                        <p>Hotel</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid serviceGallary p-0">
                <div className="sectionTitle pt-5 pb-5">
                    <h1 className="text-center text-uppercase">Best Interior <span>Designs</span></h1>
                </div>

                <div className="gallaryWrapper mt-4">
                    <Link to="/project-gallary" state="interior" className="gallaryCard">
                        <img src={ExclusiveImg01} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Interior Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>

                    <Link to="/project-gallary" state="interior" className="gallaryCard">
                        <img src={ExclusiveImg02} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Interior Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>

                    <Link to="/project-gallary" state="interior" className="gallaryCard">
                        <img src={ExclusiveImg03} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Interior Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>

                    <Link to="/project-gallary" state="interior" className="gallaryCard">
                        <img src={ExclusiveImg04} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Interior Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>

                    <Link to="/project-gallary" state="interior" className="gallaryCard">
                        <img src={ExclusiveImg05} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Interior Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>

                    <Link to="/project-gallary" state="interior" className="gallaryCard">
                        <img src={ExclusiveImg06} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Interior Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}

export default Interior;