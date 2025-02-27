import React from 'react';
import { Link } from 'react-router-dom';

// images
import InteriorImg from '../assets/images/interior/09.jpg';
import ConstructionImg from '../assets/images/construction/08.jpg';

const ServiceDetailsCard = ({type}) => {
    return (
        <div className="container-lg pt-4 pb-5" data-aos="fade-up" data-aos-duration="700">
            <div className={`serviceDetailsCard ${type} position-relative pt-4 pb-4 d-flex w-100`}>
                <div className="serviceDetailsCardImg">
                    <img src={type === 'interior' ? InteriorImg : ConstructionImg} alt={type}/>
                </div> 

                <div className={`serviceDetailsCardDesc position-absolute ${type === 'interior' ? 'interiorDesc' : 'constructionDesc'}`}>
                    <h2>{type}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit repellendus ipsa libero totam
                        quod est cumque nobis architecto fugiat nesciunt ducimus eius Quidem sit commodi nemo quaerat magnam
                        nostrum voluptatibus fugiat reiciendis ratione pariatur totam voluptatem minima sapiente harum.</p>
                    <div className="buttonBox">
                        <Link to={`/${type}`} className="learnMoreBtn">Learn more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetailsCard;