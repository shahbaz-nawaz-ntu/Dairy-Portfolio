import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'; 
import Image6 from '../../assets/images/resource/client.jpg'; // Adjust path to your image

function OfferSectionTwo() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="offer-section-three pt-0" id='offer'>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 order-2">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <span className="sub-title">Nordic BioGains Benefits</span>
                                    <h2>Always Delivering Results—Naturally.</h2>
                                </div>
                                <div className="info-box">
                                    <span className="count">01</span>
                                    <h5 className="title">Advanced Feed Additive Solutions</h5>
                                    <div className="text">We develop science-backed nutritional products like rumen-protected nutrients, yeast additives, and trace minerals that support optimal livestock health and performance.</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">02</span>
                                    <h5 className="title">Customized Nutrition Programs</h5>
                                    <div className="text">From tailored vitamin-mineral premixes to phytogenic solutions and enzyme blends — our formulations are designed to match the unique needs of farmers and veterinarians.</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">03</span>
                                    <h5 className="title">Sustainable & Trusted Innovation</h5>
                                    <div className="text">With Nordic values at our core, we focus on eco-friendly, quality-controlled production that’s trusted by farmers and recommended by experts across the globe.

</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={Image6} alt="Offer Image" />
                                    </figure>
                                    {/* <div className="video-box">
                                        <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                            <i className="icon fa fa-play"></i>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {/* <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="Fvae8nxzVz4" // Update with your actual video ID
                onClose={() => setOpen(false)}
            /> */}
        </>
    );
}

export default OfferSectionTwo;
