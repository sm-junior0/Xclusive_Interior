import React from 'react';
import { Link } from 'react-router-dom';

// components
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

// images
import CategoryImg01 from '../assets/images/categories/01.jpg';
import CategoryImg02 from '../assets/images/categories/02.jpg';
import CategoryImg03 from '../assets/images/categories/03.jpg';
import CategoryImg04 from '../assets/images/categories/04.jpg';
import CategoryImg05 from '../assets/images/categories/05.jpg';
import OngoingImg01 from '../assets/images/ongoing/01.JPG';
import OngoingImg02 from '../assets/images/ongoing/02.JPG';
import OngoingImg03 from '../assets/images/ongoing/03.JPG';
import OngoingImg04 from '../assets/images/ongoing/04.JPG';
import OngoingImg05 from '../assets/images/ongoing/05.JPG';
import OngoingImg06 from '../assets/images/ongoing/06.JPG';
import ImplementedImg01 from '../assets/images/implemented/01.JPG';
import ImplementedImg02 from '../assets/images/implemented/02.JPG';
import ImplementedImg03 from '../assets/images/implemented/03.JPG';
import ImplementedImg04 from '../assets/images/implemented/04.JPG';
import ImplementedImg05 from '../assets/images/implemented/05.JPG';
import ImplementedImg06 from '../assets/images/implemented/06.JPG';
import DesignImg01 from '../assets/images/designs/01.jpg';
import DesignImg02 from '../assets/images/designs/02.jpg';
import DesignImg03 from '../assets/images/designs/03.jpg';
import DesignImg04 from '../assets/images/designs/04.jpg';
import DesignImg05 from '../assets/images/designs/05.jpg';
import DesignImg06 from '../assets/images/designs/06.jpg';


const Services = () => {
    return (
        <AppLayout>
            <BreadCrumb page="services" />

            {/* What We Do Section */}
            <div className="sectionTitle pt-5">
                <h1 className="text-center text-uppercase"><span>What </span> we do</h1>
            </div>

            <div className="serviceCards container-xl pt-4 pb-5 d-flex flex-wrap justify-content-center justify-content-lg-start" data-aos="fade-up">
                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={CategoryImg01} alt="ConstructionImg" />
                    <div className="cardTextContent">
                        <p>Architectural design and landscaping</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={CategoryImg02} alt="ConstructionImg" />
                    <div className="cardTextContent">
                        <p>Civil and structural engineering</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={CategoryImg03} alt="ConstructionImg" />
                    <div className="cardTextContent">
                        <p>Land surveying</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={CategoryImg04} alt="ConstructionImg" />
                    <div className="cardTextContent">
                        <p>Estate development</p>
                    </div>
                </div>

                <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={CategoryImg05} alt="ConstructionImg" />
                    <div className="cardTextContent">
                        <p>Interior design</p>
                    </div>
                </div>

                {/* <div className="card mb-3 ms-2 me-2 flex-grow-1">
                    <img src={ConstructionImg06} alt="ConstructionImg" />
                    <div className="cardTextContent">
                        <p>Total Construction</p>
                    </div>
                </div> */}
            </div>

            {/* Ongoing Projects Section */}
            <div className="container-fluid serviceGallary p-0">
                <div className="sectionTitle pt-5 pb-5">
                    <h1 className="text-center text-uppercase">Ongoing <span>Projects</span></h1>
                </div>
                <div className="gallaryWrapper mt-4">
                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={OngoingImg01} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Single family house</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Aesthetic single family house built in 278 sqm</p>
                            
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={OngoingImg02} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Large Building</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Beautiful 4 studios  building</p>
                            
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={OngoingImg03} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Residential house</p>
                        </div>
                        <div className="cardText">
                            <p className="title">G+1 2in1 residential house</p>
                           
                        </div>
                    </Link>

                    
                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={OngoingImg04} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Family building</p>
                        </div>
                        <div className="cardText">
                            <p className="title">G+1 with a penthouse single  family building</p>
                           
                        </div>
                    </Link>

                    
                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={OngoingImg05} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Large house</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Pleasing four in one house</p>
                            
                        </div>
                    </Link>

                    
                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={OngoingImg06} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Residential villa</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Pleasing residential villa</p>
                     
                        </div>
                    </Link>
                </div>
            </div>

            {/* Some Implemented Projects Section */}
            <div className="container-fluid serviceGallary p-0">
                <div className="sectionTitle pt-5 pb-5">
                    <h1 className="text-center text-uppercase">Some <span>Implemented Projects</span></h1>
                </div>
                <div className="gallaryWrapper mt-4">
                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={ImplementedImg01} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Villa</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Aesthetic villa</p>
                           
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={ImplementedImg02} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Aesthetic villa</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Single family aesthetic villa</p>
                           
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={ImplementedImg03} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>House</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Beautiful House</p>
                          
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={ImplementedImg04} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Villa</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Wonderfull villa</p>
                           
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={ImplementedImg05} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Residential villa</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Residential villa</p>
                         
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="construction" className="gallaryCard">
                        <img src={ImplementedImg06} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Residential villa</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Single family residential house</p>
                        </div>
                    </Link>

                </div>
            </div>

            {/* Our Designs Section */}
            <div className="container-fluid serviceGallary p-0">
                <div className="sectionTitle pt-5 pb-5">
                    <h1 className="text-center text-uppercase">Our <span>Designs</span></h1>
                </div>
                <div className="gallaryWrapper mt-4">
                    <Link to="/project-gallery" state="interior" className="gallaryCard">
                        <img src={DesignImg01} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Twin houses</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Aesthetic Twin houses with 2 families per each</p>
                         
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="interior" className="gallaryCard">
                        <img src={DesignImg02} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>luxurious home</p>
                        </div>
                        <div className="cardText">
                            <p className="title">luxurious home</p>
                        
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="interior" className="gallaryCard">
                        <img src={DesignImg03} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Single family home</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Luxurious two single family home</p>
                          
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="interior" className="gallaryCard">
                        <img src={DesignImg04} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>modern apartment</p>
                        </div>
                        <div className="cardText">
                            <p className="title">modern apartment</p>
                            
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="interior" className="gallaryCard">
                        <img src={DesignImg05} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Modern single family house</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Modern single family G+1 house in 254sqm</p>
                            
                        </div>
                    </Link>

                    <Link to="/project-gallery" state="interior" className="gallaryCard">
                        <img src={DesignImg06} alt="exclusiveImg" />
                        <div className="hoverText">
                            <p>Full aeration bar resto</p>
                        </div>
                        <div className="cardText">
                            <p className="title">Pleasing  Bar restaurant with full aeration</p>
                          
                        </div>
                    </Link>

                </div>
            </div>
        </AppLayout>
    );
};

export default Services;