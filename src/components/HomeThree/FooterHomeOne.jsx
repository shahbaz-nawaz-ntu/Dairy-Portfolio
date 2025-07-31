import { Link } from 'react-router-dom';
import logo1 from "../../assets/images/logo8.png"
import Image1 from '../../assets/images/background/2.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';


function FooterHomeOne({ className }) {
    return (
        <footer className={`main-footer ${className || ''}`}>
            <div className="bg-image" style={{ backgroundImage: `url(${Image1})` }}></div>

            {/* Widgets Section */}
            <div className="widgets-section">
                <div className="auto-container w-100">
                    <div className="d-flex align-item-center justify-content-between flex-xl-row flex-column ">
                        {/* Footer Column - About */}
                        <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12 ">
                            <div className="footer-widget about-widget">
                                <div className="logo">
                                    <Link to="/"><img src={logo1} alt="Logo" /></Link >
                                </div>
                                <div className="text fs-5">To deliver the most reliable and science-based animal nutrition solutions that enhance livestock health, boost farm productivity, and support sustainable growth for our clients in the dairy and livestock industry.</div>
                                {/* <ul className="social-icon-two">
                                    <li><Link  to="#"><i className="fab fa-twitter"></i></Link ></li>
                                    <li><Link  to="#"><i className="fab fa-facebook"></i></Link ></li>
                                    <li><Link  to="#"><i className="fab fa-pinterest"></i></Link ></li>
                                    <li><Link  to="#"><i className="fab fa-instagram"></i></Link ></li>
                                </ul> */}
                            </div>
                        </div>

                        {/* Footer Column - Explore */}
                        {/* <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget">
                                <h3 className="widget-title">Explore</h3>
                                <ul className="user-Link s">
                                    <li><Link  to="#">About Company</Link ></li>
                                    <li><Link  to="#">Meet the Team</Link ></li>
                                    <li><Link  to="#">News & Media</Link ></li>
                                    <li><Link  to="#">Our Projects</Link ></li>
                                    <li><Link  to="#">Contact</Link ></li>
                                </ul>
                            </div>
                        </div> */}

                        {/* Footer Column - Contact */}
                        <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget contact-widget">
                                <h3 className="widget-title  fs-3">Contact us</h3>
                                <div className="widget-content">
                                    <div className="text fs-5">Bayswater, London, United Kingdom</div>
                                    <ul className="contact-info">
                                        <li><i className="fa fa-envelope"></i> <Link to="mailto:Sales@coralplus.ae">xyz@gmail.com</Link ></li>
                                        <li><i className="fa fa-phone-square"></i> <Link to="tel:+971588996975">+000000000000</Link >
                                            {/* <Link className='ml-10' to="tel:+971588838616">+971588838616</Link > */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ul className="social-icon-two d-flex flex-row align-items-center justify-content-xl-between flex-xl-column">
                            <li><Link to="#"><i className="fab fa-facebook"></i></Link ></li>
                            <li><Link to="#"><i className="fab fa-tiktok"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-google"></i></Link></li>
                            <li><Link to="#"
                                target="_blank"
                                rel="noopener noreferrer"><i className="fab fa-whatsapp"></i>
                            </Link></li>
                        </ul>

                        {/* Footer Column - Gallery */}
                        {/* <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget gallery-widget">
                                <h3 className="widget-title">Gallery</h3>
                                <div className="widget-content">
                                    <div className="outer clearfix">
                                        {[Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6].map((portfolio, index) => (
                                            <figure className="image" key={index}>
                                                <Link  to="#"><img src={portfolio} alt={`Portfolio ${index + 1}`} /></Link >
                                            </figure>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <MapSection /> */}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom ">
                <div className="auto-container d-flex justify-content-center bg-transparent">
                    <div className="inner-container">
                        <div className="copyright-text">&copy; Copyright reserved by <Link to="/">DairyForm</Link ></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterHomeOne;
