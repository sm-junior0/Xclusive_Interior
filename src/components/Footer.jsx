import React from 'react';

// icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container py-4 pt-5 d-flex justify-between flex-wrap flex-xl-nowrap gap-3 gap-xl-5">
                <div className="footer-col text-white mb-4 mb-xl-0">
                    <p className="my-0 fs-2 ls-2 text-uppercase logo"><strong>Interior<span>X</span></strong></p>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit dolor nihil iste porro distinctio. In harum
                        quidem mollitia quas natus aliquam dolore dolores officiis neque quae delectus deserunt. Soluta
                        quisquam qui itaque est amet dolor id beatae.</p>
                    <div className="mt-4 d-flex align-items-center">
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
                    </div>
                </div>

                <div className="footer-col mb-3 mb-xl-0">
                    <p className="my-0 fs-5 text-white title"><strong>Latest news</strong></p>
                    <div className="mt-3 redirects">
                        <p className="my-3"><a className="text-decoration-none" href="/">Aut illum consequuntur quae dolores mollitia deserunt</a></p>
                        <p className="my-3"><a className="text-decoration-none" href="/">Estpti beatae placeat corporis non incidunt</a></p>
                        <p className="my-3"><a className="text-decoration-none" href="/">Molestiae aperiam laudantium ullam fuga laboriosam</a></p>
                        <p className="my-3"><a className="text-decoration-none" href="/">Repellat explore dolorem tenetur voluptate repudiandae</a></p>
                        <p className="my-3"><a className="text-decoration-none" href="/">Vero voluptate esse nostrum quaerat reiciendis eveniet</a></p>
                        <p className="my-3"><a className="text-decoration-none" href="/">Totam non blanditiis harum vitae accusamus</a></p>
                    </div>
                </div>

                <div className="footer-col text-white">
                    <p className="my-0 fs-5 title"><strong>Contact Us</strong></p>
                    <p className="mt-3">North Tower(3rd floor), Dhaka, Bangladesh</p>
                    <div className="address">
                        <p className="d-flex align-items-center"><strong>Phone: </strong><span>+88 01234-567899, +88 01298-765431</span></p>
                        <p className="d-flex align-items-center"><strong>Email: </strong><span>interiorx@example.com</span></p>
                        <p className="d-flex align-items-center"><strong>Web: </strong><a href="/" className="text-decoration-none text-white">www.interiorx.com</a></p>
                    </div>
                </div>
            </div>

            <div className="copyright container py-4 d-flex align-items-center justify-content-center">
                <p className="my-0 text-white">Created by <a className="text-decoration-none" href="https://github.com/riazul01" target="_blank" rel="noreferrer">riazul01</a> | &copy; 2023 - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;