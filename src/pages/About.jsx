import React from 'react';
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// images
import AboutImage01 from '../assets/images/exclusive/03.jpg';
import AboutImage02 from '../assets/images/construction/01.jpg';

const About = () => {
    return (
        <AppLayout>
            <BreadCrumb page="about" />
            
            <div className="about container-lg pt-xl-4 pb-5">
                <div className="aboutWrap my-5 px-2 py-3 d-flex flex-column flex-lg-row justify-content-center" data-aos="fade-up" data-aos-duration="700">
                    <div className="aboutImage position-relative w-100 w-lg-50 me-lg-2 me-xl-4">
                        <img src={ AboutImage01} className="w-100 h-100" alt="about-img"/>
                    </div>
                    <div className="aboutDesc w-100 w-lg-50 pt-1 mt-4 mt-lg-0 ms-lg-2 ms-xl-4">
                        <h3>Welcome to Interiorx!</h3>
                        <h1>Best Interior Solutions Here</h1>
                        <p>Atque molestias illo consectetur odio laborum libero consectetur accusamus reiciendis molestias
                            laboriosam omnis dolor cupiditate fugit iusto perferendis praesentium eos excepturi magnam
                            corporis earum magnam est cumque commodi voluptate distinctio perspiciatis aperiam rerum quae
                            soluta quam incidunt quis beatae corrupti eaque.</p>
                        <p>Dacilis in corporis ad itaque minus necessitatibus laudantium quod inventore sint repellat nam
                            lorem ipsum dolor sit amet consectetur adipisicing elit atque molestias illo consectetur odio
                            laborum libero doloremque. </p>
                        <button>Read More</button>
                    </div>
                </div>

                <div className="aboutWrap mt-5 px-2 py-3 pb-xl-5 d-flex flex-column-reverse flex-lg-row justify-content-center" data-aos="fade-up" data-aos-duration="700">
                    <div className="aboutDesc w-100 w-lg-50 pt-1 mt-4 mt-lg-0 me-lg-2 me-xl-4">
                        <h3>We Build & Install</h3>
                        <h1>Your Dream Construction Project</h1>
                        <p>Atque molestias illo consectetur odio laborum libero consectetur accusamus reiciendis molestias
                            laboriosam omnis dolor cupiditate fugit iusto perferendis praesentium eos excepturi magnam
                            corporis earum magnam est cumque commodi voluptate distinctio perspiciatis aperiam rerum quae
                            soluta quam incidunt quis beatae corrupti eaque.</p>
                        <p>Dacilis in corporis ad itaque minus necessitatibus laudantium quod inventore sint repellat nam
                            lorem ipsum dolor sit amet consectetur adipisicing elit atque molestias illo consectetur odio
                            laborum libero doloremque. </p>
                        <button>Read More</button>
                    </div>

                    <div className="aboutImage position-relative w-100 w-lg-50 ms-lg-2 ms-xl-4">
                        <img src={AboutImage02} className="w-100 h-100" alt="about-img"/>
                    </div>
                </div>
            </div>

            <div className="customerReview w-100 h-auto py-5">
                <div className="sectionTitle reviewTitle">
                    <h1 className="text-white text-center text-uppercase"><span>Customer</span> Review</h1>
                </div>
                <div className="reviewCards container mx-auto mt-5 mt-lg-0 h-auto d-flex flex-column flex-lg-row justify-content-center align-items-center">
                    <div className="card h-auto">
                        <FaQuoteLeft className="reviewIcon text-white" />
                        <p className="reviewDesc text-white mt-3 mt-sm-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore
                            cumque commodi neque rerum. Excepturi quibusdam ab quod qui quisquam numquam neque incidunt expedita
                            iure alias eos saepe inventore cum quam quidem provident praesentium. Facere cum delectus aut eum
                            totam.</p>
                        <p className="text-white">- Jhon Doe, USA</p>
                    </div>

                    <div className="card h-auto">
                        <FaQuoteLeft className="reviewIcon text-white" />
                        <p className="reviewDesc text-white mt-3 mt-xl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore
                            cumque commodi neque rerum. Excepturi quibusdam ab quod qui quisquam numquam neque incidunt expedita
                            iure alias eos saepe inventore cum quam quidem provident praesentium. Facere cum delectus aut eum
                            totam.</p>
                        <p className="text-white">- Jhon Doe, USA</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default About;