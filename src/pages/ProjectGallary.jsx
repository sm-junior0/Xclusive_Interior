import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// components
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

// icons
import { FaLink } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward  } from 'react-icons/io';

// images
import InteriorImg01 from '../assets/images/interior/01.jpg';
import InteriorImg02 from '../assets/images/interior/02.jpg';
import InteriorImg03 from '../assets/images/interior/03.jpg';
import InteriorImg04 from '../assets/images/interior/04.jpg';
import InteriorImg05 from '../assets/images/interior/05.jpg';
import InteriorImg06 from '../assets/images/interior/06.jpg';
import InteriorImg07 from '../assets/images/interior/07.jpg';
import InteriorImg08 from '../assets/images/interior/08.jpg';
import InteriorImg09 from '../assets/images/interior/09.jpg';
import InteriorImg10 from '../assets/images/interior/10.jpg';
import InteriorImg11 from '../assets/images/interior/11.jpg';
import InteriorImg12 from '../assets/images/interior/12.jpg';
import ConstructionImg01 from '../assets/images/construction/01.jpg';
import ConstructionImg02 from '../assets/images/construction/02.jpg';
import ConstructionImg03 from '../assets/images/construction/03.jpg';
import ConstructionImg04 from '../assets/images/construction/04.jpg';
import ConstructionImg05 from '../assets/images/construction/05.jpg';
import ConstructionImg06 from '../assets/images/construction/06.jpg';
import ConstructionImg07 from '../assets/images/construction/07.jpg';
import ConstructionImg08 from '../assets/images/construction/08.jpg';
import ConstructionImg09 from '../assets/images/construction/09.jpg';
import ConstructionImg10 from '../assets/images/construction/10.jpg';
import ConstructionImg11 from '../assets/images/construction/11.jpg';
import ConstructionImg12 from '../assets/images/construction/12.jpg';

const ProjectGallary = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [activeLightbox, setActiveLightbox] = useState(false);

    const location = useLocation();
    const type = location.state;

    useEffect(() => {
         // slide when arrow key down
         document.onkeydown = (event) => {
            // slide left
            if (event.keyCode === 37) {
                setSlideIndex((prev) => (prev + 11) % 12);
            }

            // slide right
            if (event.keyCode === 39) {
                setSlideIndex((prev) => ((prev + 1) % 12));
            }
        }
    })

    const handleShowLightbox = (index) => {
        setActiveLightbox(true);
        setSlideIndex(index);
    }

    const handleCloseLightbox = () => {
        setActiveLightbox(false);
    }

    const handleSlideLeft = (e) => {
        e.stopPropagation();
        setSlideIndex((prev) => (prev + 11) % 12);
    }

    const handleSlideRight = (e) => {
        e.stopPropagation();
        setSlideIndex((prev) => ((prev + 1) % 12));
    }

    return (
        <AppLayout>
            <BreadCrumb page="project-interior" />

            <div className="container-lg gallary">
                <div className="gallaryContents">
                    <div className="filterItems projectItems" data-aos="fade-up">                    
                        <div className="card" onClick={() => handleShowLightbox(0)}>
                            {type === "interior" && <img src={InteriorImg03} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg03} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(1)}>
                            {type === "interior" && <img src={InteriorImg02} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg02} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(2)}>
                            {type === "interior" && <img src={InteriorImg01} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg01} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>
                        
                        <div className="card" onClick={() => handleShowLightbox(3)}>
                            {type === "interior" && <img src={InteriorImg07} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg07} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(4)}>
                            {type === "interior" && <img src={InteriorImg04} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg04} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(5)}>
                            {type === "interior" && <img src={InteriorImg06} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg06} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(6)}>
                            {type === "interior" && <img src={InteriorImg05} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg05} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(7)}>
                            {type === "interior" && <img src={InteriorImg11} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg11} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(8)}>
                            {type === "interior" && <img src={InteriorImg12} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg12} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(9)}>
                            {type === "interior" && <img src={InteriorImg08} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg08} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(10)}>
                            {type === "interior" && <img src={InteriorImg09} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg09} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>

                        <div className="card" onClick={() => handleShowLightbox(11)}>
                            {type === "interior" && <img src={InteriorImg10} alt="projectImg"/>}
                            {type === "construction" && <img src={ConstructionImg10} alt="projectImg"/>}
                            <p className="hoverText"><FaLink/></p>
                        </div>
                    </div>
                </div>

                <div className={`lightbox ${activeLightbox ? 'showLightbox' : null}`} onClick={() => setActiveLightbox(false)}>
                    <div className="wrapper">
                        <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
                            <div className="header">
                                <p>Img: <span>{slideIndex + 1} of 12</span></p>
                                <div className="closeBtn" onClick={handleCloseLightbox}>
                                    <span id="closeLightbox"></span>
                                </div>
                            </div>
                
                            {type === "interior" && <div className="imageBox">
                                {slideIndex === 0 && <img src={InteriorImg03} alt="lightboxImg"/>}
                                {slideIndex === 1 && <img src={InteriorImg02} alt="lightboxImg"/>}
                                {slideIndex === 2 && <img src={InteriorImg01} alt="lightboxImg"/>}
                                {slideIndex === 3 && <img src={InteriorImg07} alt="lightboxImg"/>}
                                {slideIndex === 4 && <img src={InteriorImg04} alt="lightboxImg"/>}
                                {slideIndex === 5 && <img src={InteriorImg06} alt="lightboxImg"/>}
                                {slideIndex === 6 && <img src={InteriorImg05} alt="lightboxImg"/>}
                                {slideIndex === 7 && <img src={InteriorImg11} alt="lightboxImg"/>}
                                {slideIndex === 8 && <img src={InteriorImg12} alt="lightboxImg"/>}
                                {slideIndex === 9 && <img src={InteriorImg08} alt="lightboxImg"/>}
                                {slideIndex === 10 && <img src={InteriorImg09} alt="lightboxImg"/>}
                                {slideIndex === 11 && <img src={InteriorImg10} alt="lightboxImg"/>}
                            </div>}

                            {type === "construction" && <div className="imageBox">
                                {slideIndex === 0 && <img src={ConstructionImg03} alt="lightboxImg"/>}
                                {slideIndex === 1 && <img src={ConstructionImg02} alt="lightboxImg"/>}
                                {slideIndex === 2 && <img src={ConstructionImg01} alt="lightboxImg"/>}
                                {slideIndex === 3 && <img src={ConstructionImg07} alt="lightboxImg"/>}
                                {slideIndex === 4 && <img src={ConstructionImg04} alt="lightboxImg"/>}
                                {slideIndex === 5 && <img src={ConstructionImg06} alt="lightboxImg"/>}
                                {slideIndex === 6 && <img src={ConstructionImg05} alt="lightboxImg"/>}
                                {slideIndex === 7 && <img src={ConstructionImg11} alt="lightboxImg"/>}
                                {slideIndex === 8 && <img src={ConstructionImg12} alt="lightboxImg"/>}
                                {slideIndex === 9 && <img src={ConstructionImg08} alt="lightboxImg"/>}
                                {slideIndex === 10 && <img src={ConstructionImg09} alt="lightboxImg"/>}
                                {slideIndex === 11 && <img src={ConstructionImg10} alt="lightboxImg"/>}
                            </div>}
                        </div>

                        <div className="arrowBtns">
                            <span id="leftArrow" onClick={handleSlideLeft}>
                                <IoIosArrowBack className="arrowIcon"/>
                            </span>
                            <span id="rightArrow" onClick={handleSlideRight}>
                                <IoIosArrowForward className="arrowIcon"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default ProjectGallary;