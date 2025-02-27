import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// images
import ExclusiveImg01 from '../assets/images/exclusive/01.jpg';
import ExclusiveImg02 from '../assets/images/exclusive/02.jpg';
import ExclusiveImg03 from '../assets/images/exclusive/03.jpg';
import ExclusiveImg04 from '../assets/images/exclusive/04.jpg';
import ExclusiveImg05 from '../assets/images/exclusive/05.jpg';
import ExclusiveImg06 from '../assets/images/exclusive/06.jpg';
import ExclusiveImg07 from '../assets/images/exclusive/07.jpg';
import ExclusiveImg08 from '../assets/images/exclusive/08.jpg';
import ExclusiveImg09 from '../assets/images/exclusive/09.jpg';
import ExclusiveImg10 from '../assets/images/exclusive/10.jpg';
import ExclusiveImg11 from '../assets/images/exclusive/11.jpg';
import ExclusiveImg12 from '../assets/images/exclusive/12.jpg';

const ExclusiveGallary = () => {
    const [activeInterior, setActiveInterior] = useState(true);
    const [activeConstruction, setActiveConstruction] = useState(false);
    
    const handleInterior = () => {
        setActiveConstruction(false);
        setActiveInterior(true);
    }

    const handleConstruction = () => {
        setActiveInterior(false);
        setActiveConstruction(true);
    }

    return (
        <div className="gallary container-xxl pt-4">
            <div className="sectionTitle pt-5">
                <h1 className="text-center text-uppercase"><span>Exclusive</span> Projects</h1>
            </div>

            <div className="gallaryContents">
                <ul className="filterMenu" data-aos="fade-up" data-aos-duration="500">
                    <li className={activeInterior ? 'activeMenu' : null} onClick={handleInterior}>Interior</li>
                    <li className={activeConstruction ? 'activeMenu' : null} onClick={handleConstruction}>Construction</li>
                </ul>

                <div className="filterItems" data-aos="fade-up" data-aos-duration="700">
                    <Link to="project-gallary" state="interior" className={`card ${activeInterior ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg01} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="interior" className={`card ${activeInterior ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg02} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="interior" className={`card ${activeInterior ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg03} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="interior" className={`card ${activeInterior ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg04} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="interior" className={`card ${activeInterior ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg05} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="interior" className={`card ${activeInterior ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg06} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="construction" className={`card ${activeConstruction ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg07} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="construction" className={`card ${activeConstruction ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg08} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="construction" className={`card ${activeConstruction ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg09} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="construction" className={`card ${activeConstruction ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg10} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="construction" className={`card ${activeConstruction ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg11} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>

                    <Link to="project-gallary" state="construction" className={`card ${activeConstruction ? 'activeCard' : 'deleteCard'}`}>
                        <img src={ExclusiveImg12} alt="exclusiveImg"/>
                        <p className="hoverText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus
                            exercitationem dolorum sit ipsum saepe provident vel repellat reprehenderit.</p>
                        <div className="cardText">
                            <p>Project Title Here</p>
                            <p>Stauts</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ExclusiveGallary;