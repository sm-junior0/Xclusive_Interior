import React, { useState } from 'react';

// components
import AppLayout from '../layouts/AppLayout';
import BreadCrumb from '../components/BreadCrumb';

// icons
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Contact = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        clientType: 'new',
        textarea: ''
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            name: '',
            email: '',
            phone: '',
            clientType: 'new',
            textarea: ''
        })
    }

    return (
        <AppLayout>
            <BreadCrumb page="contact"/>

            <div className="container contact pt-2 pt-lg-5 pb-5" data-aos="fade-up" data-aos-duration="700">
                <div className="contactBox d-flex flex-column flex-lg-row mx-auto px-2 py-4 justify-content-center w-100 h-auto">
                    <div className="contactAddress w-100 w-lg-50 me-4">
                        <div className="contactTitle">
                            <h1>Let's Connect!</h1>
                            <p>We're here to help you with your design and build needs. Reach out to us!</p>
                        </div>
                        <div className="contactInfo">
                            <div className="officeAddress">
                                <h3 className="d-flex align-items-center"><FaMapMarkedAlt/><strong>Address:</strong></h3>
                                <p>Kigali, Rwanda</p>
                            </div>

                            <div className="contactMail">
                                <h3><IoMdMail/><strong>Mail:</strong></h3>
                                <p>
                                    <a href="mailto:Info@xclusiveqd.com " className="text-decoration-none text-dark">Info@xclusiveqd.com </a>
                                </p>
                            </div>

                            <div className="contactPhone">
                                <h3><FaPhone/><strong>Phone:</strong></h3>
                                <p>
                                    <a href="tel:+250781005276" className="text-decoration-none text-dark">+250 781 005 276</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm w-100 w-lg-50 mt-5 mt-lg-0">
                        <form className="w-100" onSubmit={handleSubmit}>
                            <div className="inputField w-100">
                                <input className="w-100 h-100 border-0" onChange={handleChange} value={user.name} name="name" type="text" placeholder="Your name" required/>
                            </div>

                            <div className="inputField w-100">
                                <input className="w-100 h-100 border-0" onChange={handleChange} value={user.email} name="email" type="email" placeholder="Your email" required/>
                            </div>

                            <div className="inputField w-100">
                                <input className="w-100 h-100 border-0" onChange={handleChange} value={user.phone} name="phone" type="text" placeholder="Phone number" required/>
                            </div>

                            <div className="inputField w-100">
                                <select className="w-100 h-100 border-0" onChange={handleChange} value={user.clientType} name="clientType" required>
                                    <option value="new">New client</option>
                                    <option value="existing">Existing</option>
                                </select>
                            </div>

                            <div className="textareaField w-100">
                                <textarea className="w-100 border-0" onChange={handleChange} value={user.textarea} name="textarea" id="textarea" placeholder="Your message" required></textarea>
                            </div>

                            <div className="buttonField">
                                <button className="text-white w-100 border-0" type="submit">Send</button>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </AppLayout>
    );
}

export default Contact;
