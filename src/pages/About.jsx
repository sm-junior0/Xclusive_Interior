import React from "react";
import AppLayout from "../layouts/AppLayout";
import BreadCrumb from "../components/BreadCrumb";

// icons
import { FaQuoteLeft } from "react-icons/fa";

// images
import AboutImage01 from "../assets/images/exclusive/03.jpg";
import AboutImage02 from "../assets/images/exclusive/10.jpg";
import Stuff01 from "../assets/images/stuff/01.png";
import Stuff02 from "../assets/images/stuff/02.png";
import Stuff03 from "../assets/images/stuff/03.png";
import Stuff04 from "../assets/images/stuff/04.png";
import Stuff05 from "../assets/images/stuff/05.png";
import Stuff06 from "../assets/images/stuff/06.png";

const About = () => {
  return (
    <AppLayout>
      <BreadCrumb page="about" />

      <div className="about container-lg pt-xl-4 pb-5">
        <div
          className="aboutWrap my-5 px-2 py-3 d-flex flex-column flex-lg-row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="aboutImage position-relative w-100 w-lg-50 me-lg-2 me-xl-4">
            <img src={AboutImage01} className="w-100 h-100" alt="about-img" />
          </div>
          <div className="aboutDesc w-100 w-lg-50 pt-1 mt-4 mt-lg-0 ms-lg-2 ms-xl-4">
            <h3>Welcome to XQDC Ltd!</h3>
            <h1>Your Design and Build Partner</h1>
            <p>
              XQDC Ltd is a dynamic and innovative design and build company
              based in Kigali, specializing in transforming visions into reality
              with comprehensive solutions in the construction industry.
            </p>
            <p>
              We pride ourselves on delivering high-quality designs,
              environmental sustainability, and innovative workmanship
              throughout every stage of the construction process.
            </p>
            <button>Read More</button>
          </div>
        </div>

        <div
          className="aboutWrap mt-5 px-2 py-3 pb-xl-5 d-flex flex-column-reverse flex-lg-row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="aboutDesc w-100 w-lg-50 pt-1 mt-4 mt-lg-0 me-lg-2 me-xl-4">
            <h3>Our Services</h3>
            <h1>Comprehensive Construction Solutions</h1>
            <p>
              We offer a range of services including architectural designs,
              civil and structural engineering, land surveying, estate
              development, and interior design, ensuring each project meets
              local and international standards.
            </p>
            <p>
              Our dedicated team is committed to delivering excellence in every
              project, whether residential, commercial, or industrial.
            </p>
            <button>Read More</button>
          </div>

          <div className="aboutImage position-relative w-100 w-lg-50 ms-lg-2 ms-xl-4">
            <img src={AboutImage02} className="w-100 h-100" alt="about-img" />
          </div>
        </div>
      </div>
      <div className="customerReview w-100 h-auto py-5 d-flex flex-column align-items-center">
        <div className="sectionTitle reviewTitle text-center mb-4">
          <h1 className="text-white text-uppercase">
            <span>Our Team</span> Members
          </h1>
        </div>

        <div className="reviewCards d-flex flex-wrap justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card h-auto text-center mx-2">
                <span className="memberImage">
                  <img src={Stuff01} alt="Managing Director" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                </span>
                <h3 className="text-white">Structural Engineer</h3>
                <p className="reviewDesc text-white mt-3 mt-sm-4">
                  "A passionate Structural Engineer dedicated to creating safe, sustainable, and efficient building solutions, ensuring high standards of safety and performance. Collaborates closely with architects and contractors to transform concepts into durable structures while focusing on cost-effectiveness and quality."
                </p>
                <p className="reviewDesc text-white mt-3 mt-sm-4">Abikunda Blaise</p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card h-auto text-center mx-2">
                <span className="memberImage">
                  <img src={Stuff02} alt="CEO" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                </span>
                <h3 className="text-white">CEO/Founder</h3>
                <p className="reviewDesc text-white mt-3 mt-xl-4">
                  "A creative Architectural and 3D Modeler with extensive experience in managing 3D architectural renders. Excels in team leadership, organizational skills, and adaptability, always seeking new challenges for personal and professional growth."
                </p>
                <p className="reviewDesc text-white mt-3 mt-sm-4">Byiringiro Moses</p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card h-auto text-center mx-2">
                <span className="memberImage">
                  <img src={Stuff03} alt="Quantity Surveyor" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                </span>
                <h3 className="text-white">Quantity Surveyor</h3>
                <p className="reviewDesc text-white mt-3 mt-xl-4">
                  "A certified Civil Engineer with four years of experience as a Clerk of Work, now specializing in quantity surveying. Expertise in cost estimation and project budgeting drives a commitment to delivering high-quality results in every project."
                </p>
                <p className="reviewDesc text-white mt-3 mt-sm-4">Mushimiyimana Theodore</p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card h-auto text-center mx-2">
                <span className="memberImage">
                  <img src={Stuff04} alt="Civil Engineer" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                </span>
                <h3 className="text-white">Civil Engineer</h3>
                <p className="reviewDesc text-white mt-3 mt-xl-4">
                  "A Civil Engineer with an A0 degree, multitasking as a CAD Technician and designer. Possesses strong skills in construction technology and technical works, including electricity and plumbing."
                </p>
                <p className="reviewDesc text-white mt-3 mt-sm-4">NKIYIZEYE ISHIMWE Francois Regis</p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card h-auto text-center mx-2">
                <span className="memberImage">
                  <img src={Stuff05} alt="Architect" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                </span>
                <h3 className="text-white">Architect</h3>
                <p className="reviewDesc text-white mt-3 mt-xl-4">
                  "A Civil Engineer working as a CAD Technician and designer, well-versed in construction technology and building services designs. Specializes in Mechanical, Electrical, and Plumbing systems, with training from a recognized academy."
                </p>
                <p className="reviewDesc text-white mt-3 mt-sm-4">Nshimiyumukiza JMV</p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card h-auto text-center mx-2">
                <span className="memberImage">
                  <img src={Stuff06} alt="Survey Engineer" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
                </span>
                <h3 className="text-white">Survey Engineer</h3>
                <p className="reviewDesc text-white mt-3 mt-xl-4">
                  "A skilled professional with a Bachelor's Degree in Surveying and Geomatics Engineering, specializing in land surveying and geospatial data analysis. Successfully led surveying operations for a major construction project, utilizing advanced tools for precise data collection."
                </p>
                <p className="reviewDesc text-white mt-3 mt-sm-4">RUKUNDO Jean d’amour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default About;
