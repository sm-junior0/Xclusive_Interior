import React, { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import BreadCrumb from "../components/BreadCrumb";

// icons
import { FaPhone } from "react-icons/fa";

// images
import AboutImage01 from "../assets/images/exclusive/03.jpg";
import AboutImage02 from "../assets/images/exclusive/10.jpg";
import Stuff01 from "../assets/images/stuff/01.png";
import Stuff02 from "../assets/images/stuff/02.png";
import Stuff03 from "../assets/images/stuff/03.png";
import Stuff04 from "../assets/images/stuff/04.png";
import Stuff05 from "../assets/images/stuff/05.png";
import Stuff06 from "../assets/images/stuff/06.png";
import Stuff07 from "../assets/images/stuff/07.jpg";   

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Byiringiro Moses",
      title: "CEO/Founder",
      image: Stuff02,
      description:
        "A highly creative architectural and 3D modeler with extensive experience in creating and managing 3D architectural renders. Moses excels in team leadership, organizational skills, and adaptability. He is proactive, meets deadlines, and thrives in high-pressure situations. His goal is to deliver innovative designs that exceed client expectations.",
  
    },
    {
      id: 2,
      name: "Uwimanimpaye Felix",
      title: "Managing Director (MD)",
      image: Stuff07, // Add an image for Felix
      description:
        "Felix is a visionary leader with a strong background in project management and strategic planning. As the Managing Director, he oversees the company's operations, ensuring that all projects align with the organization's goals and values. His leadership fosters innovation, collaboration, and excellence across all teams.",
    
    },
    {
      id: 3,
      name: "Abikunda Blaise",
      title: "Structural Engineer",
      image: Stuff01,
      description:
        "Blaise is a passionate structural engineer with expertise in creating safe, sustainable, and innovative building solutions. He specializes in designing resilient and efficient structures, ensuring compliance with safety standards. Blaise collaborates closely with architects and contractors to deliver high-quality, cost-effective projects that stand the test of time.",
   
    },
    {
      id: 4,
      name: "NKIYIZEYE ISHIMWE Francois Regis",
      title: "Civil Engineer",
      image: Stuff04,
      description:
        "Regis is a skilled civil engineer with expertise in construction technology, CAD design, and technical works such as electricity and plumbing. He is known for his hard work, dedication, and ability to multitask effectively. Regis is also passionate about community service and choir singing.",
 
    },
    {
      id: 5,
      name: "Nshimiyumukiza JMV",
      title: "Architect",
      image: Stuff05,
      description:
        "JMV is a civil engineer specializing in CAD design and building services, including Mechanical (HVAC), Electrical, and Plumbing (MEP) systems. He is well-versed in construction technology and has received specialized training from Nziza Training Academy. JMV is also an avid soccer player.",
  
    },
    {
      id: 6,
      name: "RUKUNDO Jean d’amour",
      title: "Survey Engineer",
      image: Stuff06,
      description:
        "Jean is a highly skilled survey engineer with expertise in land surveying, geomatics, and geospatial data analysis. He has led surveying operations for major projects, including the Inzovu Mall Construction Project. Jean is proficient in using advanced tools like LiDAR, total stations, and drones for precise data collection.",

    },
    {
      id: 7,
      name: "Mushimiyimana Theodore",
      title: "Quantity Surveyor",
      image: Stuff03,
      description:
        "Theodore is a certified civil engineer with extensive experience in quantity surveying. He specializes in cost estimation, project budgeting, and resource management. His dedication to delivering high-quality results makes him a valuable asset to any project.",
  
    },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

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
            {teamMembers.map((member) => (
              <div className="col-md-4 d-flex justify-content-center" key={member.id}>
                <div
                  className="card h-auto text-center mx-2"
                  onClick={() => handleMemberClick(member)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="memberImage">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="img-fluid rounded-circle"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </span>
                  <h3 className="text-white">{member.title}</h3>
                  <p className="text-white mt-3 mt-sm-4">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Team Member Details */}
      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="modal-details">
                <h2>{selectedMember.name}</h2>
                <h3>{selectedMember.title}</h3>
                <p>{selectedMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default About;