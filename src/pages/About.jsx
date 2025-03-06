import React, { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import BreadCrumb from "../components/BreadCrumb";


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
        "Moses is Highly multitasking creative architectural and 3D modeler with extensive experience in the creation and management of 3D architectural renders. Able to work as part of a team under his leadership with very good organizational skills, proactive attitude and ability to adapt quickly to changing environments. He's always looking for a new challenge where his skills can be used effectively; one which will make best use of existing skills while enabling further personal and professional development. An enthusiastic and flexible person who is able to meet deadlines, good communication and very advising to the client and handle high pressure situations.",
    },
    {
      id: 2,
      name: "Uwimanimpaye Felix",
      title: "Managing Director (MD)",
      image: Stuff07,
      description:
        "Felix is a visionary leader with a strong background in project management and strategic planning. As the Managing Director, he oversees the company's operations, ensuring that all projects align with the organization's goals and values. His leadership fosters innovation, collaboration, and excellence across all teams.",
    },
    {
      id: 3,
      name: "Abikunda Blaise",
      title: "Structural Engineer",
      image: Stuff01,
      description: 
        "Blaise is a structural engineer with a degree. He is passionate about creating safe, sustainable, and innovative solutions for a wide range of building and infrastructure projects. Moreover, he specializes in designing structures that are both resilient and efficient, ensuring they meet the highest standards of safety and performance. He works closely with architects, contractors, and clients to transform concepts into tangible, functional structures that stand the test of time. He's dedicated to ensuring every project is executed with precision, focusing on durability and cost-effectiveness while maintaining the highest quality standards. Core Competencies:\n• Structural Analysis & Design\n• Building Code Compliance\n• Seismic & Wind Load Analysis\n• Sustainable & Green Building Practices\n• Problem Solving & Innovation in Design\n• Collaboration & Team Coordination.\nHis goal is to contribute to projects that enhance the built environment and support the needs of the community."
    },
    {
      id: 4,
      name: "NKIYIZEYE ISHIMWE Francois Regis",
      title: "Civil Engineer",
      image: Stuff04,
      description:
        "Regis is a Civil Engineer with A0 degree in civil engineering from INES Ruhengeri multitasking as a CAD Technician and designer. He is good in both construction technology and technical works such as electricity & plumbing. He is a hard worker and associates with praying and choir singing.",
    },
    {
      id: 5,
      name: "Nshimiyumukiza JMV",
      title: "Architect",
      image: Stuff05,
      description:
        "JMV is a Civil Engineer with a degree, working as CAD Technician and designer. He is well informed in construction technology and building services designs such as Mechanical (HVAC), Electricity & Plumbing (MEP) with specialization gained from Nziza training Academy. He is a hard worker and associates it with soccer playing.",
    },
    {
      id: 6,
      name: "RUKUNDO Jean d'amour",
      title: "Survey Engineer",
      image: Stuff06,
      description:
        "Rukundo Jean Damour is a highly skilled professional with a Bachelor's Degree in Surveying and Geomatics Engineering. He has extensive expertise in land surveying, geomatics, building surveying, topographic surveying, physical planning, and geospatial data analysis. His technical proficiency includes the application of Geographic Information Systems (GIS), remote sensing technologies, and global positioning systems (GPS) for climate and environmental monitoring and spatial data management. As one of the big achievements, Rukundo led the surveying operations for the Inzovu Mall Construction Project, a mega building project in Kigali, Rwanda, where he oversees control surveying, boundary delineation, site layout, and construction staking. His ability to integrate advanced surveying tools such as LiDAR, total stations, and drones ensures precise and efficient data collection, essential for large-scale infrastructure development. Known for his technical acumen and leadership, Rukundo is a key asset in managing complex surveying tasks with high accuracy and reliability. His passion for advancing the surveying profession and commitment to high standards of quality and accuracy made him a valuable asset to any project at our organization.",
    },
    {
      id: 7,
      name: "Mushimiyimana Theodore",
      title: "Quantity Surveyor",
      image: Stuff03,
      description:
        "Theodore is a certified civil engineer with 4 years of experience as clerk of work in the building construction industry. Thereafter, he has been dedicated to specializing in quantity surveying, where he gained valuable expertise in cost estimation, project budgeting, and resource management. His experience and passion for both civil engineering and quantity surveying drive him to deliver high-quality results and contribute effectively to any project.",
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
            XQDC Ltd is a dynamic and innovative design and build company that offers comprehensive solutions for the construction industry. Our company was founded with the desire of transforming visions into reality by providing end-to-end services that include high quality designs, environmental sustainability, high innovative workmanship during construction, and the supply of high-quality materials. Whether it's residential, commercial, or industrial projects.
            </p>
            <p>
            XQDC Ltd is dedicated to delivering excellence for both designs and through every stage of the construction process.
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