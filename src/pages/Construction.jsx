import React from 'react';
import { Link } from 'react-router-dom';

// components
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

// images
import ConstructionImg01 from '../assets/images/construction/01.jpg';
import ConstructionImg02 from '../assets/images/construction/02.jpg';
import ConstructionImg09 from '../assets/images/construction/09.jpg';
import ConstructionImg04 from '../assets/images/construction/04.jpg';
import ConstructionImg05 from '../assets/images/construction/05.jpg';
import ConstructionImg06 from '../assets/images/construction/06.jpg';
import ExclusiveImg07 from '../assets/images/exclusive/07.jpg';
import ExclusiveImg08 from '../assets/images/exclusive/08.jpg';
import ExclusiveImg09 from '../assets/images/exclusive/09.jpg';
import ExclusiveImg10 from '../assets/images/exclusive/10.jpg';
import ExclusiveImg11 from '../assets/images/exclusive/11.jpg';
import ExclusiveImg12 from '../assets/images/exclusive/12.jpg';

const Construction = () => {
    return (
        <AppLayout>
            <BreadCrumb page="construction"/>
            
            <div className="sectionTitle pt-5">
                <h1 className="text-center text-uppercase"><span>Construction </span> Services</h1>
                <p className="text-center text-uppercase">What we do</p>
            </div>

            <div className="serviceCards container-xl pt-4 pb-5 d-flex flex-wrap justify-content-center justify-content-lg-start" data-aos="fade-up">
                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={ConstructionImg01} alt="ConstructionImg"/>

                    <div className="cardTextContent">
                        <p>Soil test</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={ConstructionImg02} alt="ConstructionImg"/>

                    <div className="cardTextContent">
                        <p>Floor plan</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={ConstructionImg09} alt="ConstructionImg"/>

                    <div className="cardTextContent">
                        <p>3d of the project</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={ConstructionImg04} alt="ConstructionImg"/>

                    <div className="cardTextContent">
                        <p>Structural design</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={ConstructionImg05} alt="ConstructionImg"/>

                    <div className="cardTextContent">
                        <p>Landscaping</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={ConstructionImg06} alt="ConstructionImg"/>

                    <div className="cardTextContent">
                        <p>Total construction</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid serviceGallary p-0">
                <div className="sectionTitle pt-5 pb-5">
                    <h1 className="text-center text-uppercase">Construction <span>Projects</span></h1>
                </div>

                <div className="gallaryWrapper mt-4">
                    <Link to="/project-gallary" state="construction" className="gallaryCard">
                        <img src={ExclusiveImg07} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Construction Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>

                    <Link to="/project-gallary" state="construction" className="gallaryCard">
                        <img src={ExclusiveImg08} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Construction Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>

                  <Link to="/project-gallary" state="construction" className="gallaryCard">
                        <img src={ExclusiveImg09} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Construction Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>

                    <Link to="/project-gallary" state="construction" className="gallaryCard">
                        <img src={ExclusiveImg10} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Construction Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link>

                    <Link to="/project-gallary" state="construction" className="gallaryCard">
                        <img src={ExclusiveImg11} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Construction Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link> 

                    {/* <Link to="/project-gallary" state="construction" className="gallaryCard">
                        <img src={ExclusiveImg12} alt="exclusiveImg"/>

                        <div className="hoverText">
                            <p>Project Preview Title</p>
                        </div>

                        <div className="cardText">
                            <p className="title">Construction Project Title</p>
                            <p className="status">Status</p>
                        </div>
                    </Link> */}
                </div>
            </div>
        </AppLayout>
    );
}

export default Construction;