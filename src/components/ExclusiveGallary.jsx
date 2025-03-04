import React from 'react';
import { Link } from 'react-router-dom';

// images
import ExclusiveImg01 from '../assets/images/exclusive/01.jpg';
import ExclusiveImg02 from '../assets/images/exclusive/02.jpg';
import ExclusiveImg03 from '../assets/images/exclusive/03.jpg';
import ExclusiveImg07 from '../assets/images/exclusive/07.jpg';
import ExclusiveImg09 from '../assets/images/exclusive/09.jpg';
import ExclusiveImg10 from '../assets/images/exclusive/10.jpg';

const ExclusiveGallary = () => {
    return (
        <div className="gallary container-xxl pt-4">
            <div className="sectionTitle pt-5">
                <h1 className="text-center text-uppercase"><span>Some of Our</span> Projects</h1>
            </div>

            <div className="gallaryContents">
                <div className="filterItems" data-aos="fade-up" data-aos-duration="700">
                    {/* Image 1 */}
                    <div className="card">
                        <img src={ExclusiveImg01} alt="exclusiveImg"/>
                        <p className="hoverText">Transform your space with interior design that blends beauty and functionality.</p>
                        <div className="cardText">
                            <p>Interior Design</p>
                            <p>Status</p>
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="card">
                        <img src={ExclusiveImg02} alt="exclusiveImg"/>
                        <p className="hoverText">Transform your space with interior design that blends beauty and functionality.</p>
                        <div className="cardText">
                            <p>Interior Design</p>
                            <p>Status</p>
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="card">
                        <img src={ExclusiveImg03} alt="exclusiveImg"/>
                        <p className="hoverText">Transform your space with interior design that blends beauty and functionality.</p>
                        <div className="cardText">
                            <p>Interior Design</p>
                            <p>Status</p>
                        </div>
                    </div>

                    {/* Image 7 */}
                    <div className="card">
                        <img src={ExclusiveImg07} alt="exclusiveImg"/>
                        <p className="hoverText">Single family residential house</p>
                        <div className="cardText">
                            <p>Single Family House</p>
                            <p>Status</p>
                        </div>
                    </div>

                    {/* Image 9 */}
                    <div className="card">
                        <img src={ExclusiveImg09} alt="exclusiveImg"/>
                        <p className="hoverText">Residential villa</p>
                        <div className="cardText">
                            <p>Residential Villa</p>
                            <p>Status</p>
                        </div>
                    </div>

                    {/* Image 10 */}
                    <div className="card">
                        <img src={ExclusiveImg10} alt="exclusiveImg"/>
                        <p className="hoverText">Well built Aesthetic house</p>
                        <div className="cardText">
                            <p>Family House</p>
                            <p>Status</p>
                        </div>
                    </div>
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-4 mb-5" data-aos="fade-up" data-aos-duration="600">
                    <Link to="project-gallary" className="btn btn-primary">
                        View All Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ExclusiveGallary;