import React from 'react';
import { Link } from 'react-router-dom';

import AboutImage1 from '../../assets/images/resource/client9.jpg';
import AboutImage2 from '../../assets/images/resource/client8.jpg';
import AboutThumb from '../../assets/images/resource/thumb-1.jpg';
function AboutHomeThree({ className }) {
    return (
        <>
            <section className={`about-section-five pt-0 ${className || ''}`} id='about'>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Lorem, ipsum dolor.</span>
                                    <h2 className='fs-1'>Lorem ipsum, dolor sit | amet consectetur adipisicing  | elit. Mollitia, officiis.</h2>
                                    <div className="text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea excepturi consequuntur consectetur nisi repellat quidem, hic harum animi rem? Dolor eveniet, magnam veniam, earum minima tempora consequatur assumenda unde, reiciendis facilis nemo labore officiis et totam repudiandae ex natus enim corporis laudantium? Animi incidunt illum doloremque cum, dolore, possimus dolores tenetur suscipit iure obcaecati rem molestias, sint assumenda autem odit illo harum consequatur quae inventore praesentium tempora vero. Incidunt architecto excepturi suscipit explicabo laudantium illum assumenda! Ullam minima accusantium harum.
                                    </div>
                                </div>

                                {/* <ul className="list-style-three">
                                    <li>The business applications</li>
                                    <li>The business applications</li>
                                    <li>Revolutionary catalysts for change</li>
                                    <li>Revolutionary catalysts for change</li>
                                    <li>Catalysts for change seamlessly</li>
                                    <li>Catalysts for change seamlessly</li>
                                </ul>

                                <div className="btn-box d-flex">
                                    <Link  to="/about-us" className="theme-btn btn-style-one">
                                        <span className="btn-title">get in touch</span>
                                    </Link >
                                    <div className="founder-info">
                                        <div className="thumb">
                                            <img src={AboutThumb} alt="" />
                                        </div>
                                        <h5 className="name">Kevin Martin</h5>
                                        <span className="designation">Co Founder</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <figure className="image-1 overlay-anim wow fadeInUp">
                                    <img className='' src={AboutImage1} alt="About 9"/>
                                </figure>
                                <figure className="image-2 overlay-anim wow fadeInRight">
                                    <img src={AboutImage2} alt="About 10"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeThree;



