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
                                    <span className="sub-title">Dairy Farm Benefits</span>
                                    <h2>Always Deliver Best Quality More than you Expected</h2>
                                </div>
                                <div className="info-box">
                                    <span className="count">01</span>
                                    <h5 className="title">Lorem ipsum dolor sit.</h5>
                                    <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime deleniti vitae est ipsam ipsa blanditiis!.</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">02</span>
                                    <h5 className="title">Lorem ipsum dolor sit amet.</h5>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laudantium eius sed maiores aliquid culpa consequuntur quisquam voluptatem veritatis iusto!</div>
                                </div>
                                <div className="info-box">
                                    <span className="count">03</span>
                                    <h5 className="title">Lorem ipsum dolor sit amet consectetur.</h5>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim nulla corrupti illum id. Iste atque nostrum architecto. Non dolorem nihil debitis obcaecati ipsam ad?

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
