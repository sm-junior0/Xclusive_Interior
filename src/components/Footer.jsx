import React from 'react';

// icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container py-4 pt-5 d-flex justify-between flex-wrap flex-xl-nowrap gap-3 gap-xl-5">
                <div className="footer-col text-white mb-4 mb-xl-0">
                    <p className="my-0 fs-2 ls-2 text-uppercase logo"><strong>XQDC<span>Ltd</span></strong></p>
                    <p className="mt-3">XQDC Ltd is a dynamic design and build company in Kigali, dedicated to transforming visions into reality. We prioritize quality, sustainability, and innovative workmanship in every project.</p>
                    {/* <div className="mt-4 d-flex align-items-center">
                        <a href="/" title="facebook" className="d-flex align-items-center justify-content-center socialLink">
                            <FaFacebookF className="icon"/>
                        </a>

                        <a href="/" title="twitter" className="d-flex align-items-center justify-content-center socialLink">
                            <FaTwitter className="icon"/>
                        </a>

                        <a href="/" title="linkedin" className="d-flex align-items-center justify-content-center socialLink">
                            <FaLinkedinIn className="icon"/>
                        </a>

                        <a href="/" title="telegram" className="d-flex align-items-center justify-content-center socialLink">
                            <FaTelegramPlane className="icon"/>
                        </a>
                    </div> */}
                </div>

                <div className="footer-col mb-3 mb-xl-0">
                    <p className="my-0 fs-5 text-white title"><strong>Specialisations</strong></p>
                    <div className="mt-3 redirects">
                        <p className="my-3"><a className="text-decoration-none" href="/">Architectural design and landscaping</a></p>
                        <p className="my-3"><a className="text-decoration-none" href="/">Civil and structural engineering</a></p>
                        <p className="my-3"><a className="text-decoration-none" href="/">Land surveying</a></p>
                        <p className="my-3"><a className="text-decoration-none" href="/">Estate development</a></p>
                        <p className="my-3"><a className="text-decoration-none" href="/">Interior design</a></p>
                    </div>
                </div>

                <div className="footer-col text-white">
                    <p className="my-0 fs-5 title"><strong>Contact Us</strong></p>
                    <p className="mt-3">Kigali, Rwanda</p>
                    <div className="address">
                        <p className="d-flex align-items-center"><strong>Phone: </strong><span>+250 781 005 276</span></p>
                        <p className="d-flex align-items-center"><strong>Email: </strong><span>info@xqdc.com</span></p>
                        <p className="d-flex align-items-center"><strong>Web: </strong><a href="/" className="text-decoration-none text-white">www.xqdc.com</a></p>
                    </div>
                </div>
            </div>

            <div className="copyright container py-4 d-flex align-items-center justify-content-center">
                <p className="my-0 text-white">&copy; {new Date().getFullYear()} - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
