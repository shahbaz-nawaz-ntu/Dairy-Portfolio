import React, { useState } from 'react';
import CounterUp from '../../lib/CounterUp.jsx';
import ModalVideo from 'react-modal-video';
import Image6 from '../../assets/images/resource/milk2.jpg';
function ChooseUs() {
    const [isOpen, setOpen] = useState(false);
    const skill1 = 86;
    const skill2 = 77;

    return (
        <>
            <section className="why-choose-us-two pt-0">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="inner-column wow fadeInLeft">
                                <div className="sec-title">
                                    <span className="sub-title">Why choose our Milk?</span>
                                    <h2>Why you Should Choose Our Dairy Farm Milk?</h2>
                                    <div className="text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias minus vero cupiditate repellat accusantium excepturi, accusamus sit dolor sapiente ducimus eaque, optio quae consectetur nemo dolores fugiat, aliquam odio laboriosam molestiae. Enim rerum nihil, nostrum, dolorum beatae perferendis in dignissimos officia, sunt suscipit ipsum. Iusto quae ipsum delectus et in at velit aspernatur, ab voluptatibus a, hic neque ullam fuga sunt blanditiis quas explicabo earum nobis. Autem, praesentium ea quos eius laborum vitae libero temporibus ex similique in est aliquid fugiat commodi facilis, assumenda cum placeat soluta perferendis ad! At ullam corporis incidunt explicabo, in sapiente natus necessitatibus reprehenderit ipsam non expedita deleniti, est sit porro facere!
                                        {/* We view ourselves as a vital part of each of our client’s teams and know our success
                                        hinges on them being successful. We have worked with many of our clients for years and
                                        attribute our high client retention rate to our response to their needs and consistent dedication
                                        to the iron ging success by monitoring their premises, offices, employees, students, staff, etc... */}
                                    </div>
                                </div>

                                {/* Info Boxes */}
                                {/* <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle"></i>
                                            <h6 className="title">Integer et massa sit</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="info-box">
                                            <i className="icon fa fa-check-circle"></i>
                                            <h6 className="title">Integer et massa sit</h6>
                                        </div>
                                    </div>
                                </div> */}

                                {/* Skills Section */}
                                {/* <div className="skills">
                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Technology</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: '86%' }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">
                                                            <span className="count-text"><CounterUp count={skill1} time={3} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="skill-item">
                                        <div className="skill-header">
                                            <h6 className="skill-title">Solutions</h6>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="bar progress-line" style={{ width: '77%' }}>
                                                    <div className="skill-percentage">
                                                        <div className="count-box">
                                                            <span className="count-text"><CounterUp count={skill2} time={3} /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="">
                                <figure className="">
                                    <img src={Image6} alt="Why Choose Us" />
                                    {/* <a onClick={() => setOpen(true)} className="play-btn lightbox-image">
                                        <i className="icon fa fa-play"></i>
                                    </a> */}
                                </figure>
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
                videoId="Fvae8nxzVz4" // YouTube video ID
                onClose={() => setOpen(false)}
            /> */}
        </>
    );
}

export default ChooseUs;
