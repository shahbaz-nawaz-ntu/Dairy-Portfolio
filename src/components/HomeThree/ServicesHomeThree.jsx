import { Link  } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from 'react';
import icon1 from '../../assets/images/resource/png/product1.png';
import icon2 from '../../assets/images/resource/png/product2.png';
import icon3 from '../../assets/images/resource/png/milk2.jpg';
import icon4 from '../../assets/images/resource/png/milk3.jpg';
import icon5 from '../../assets/images/resource/png/milk4.jpg';
import icon6 from '../../assets/images/resource/png/milk5.jpg';
import icon7 from '../../assets/images/resource/png/milk6.jpg';
import icon8 from '../../assets/images/resource/png/milk7.jpg';
import icon9 from '../../assets/images/resource/png/milk8.jpg';
import icon10 from '../../assets/images/resource/png/milk9.jpg';
import icon11 from '../../assets/images/resource/png/milk10.jpg';
import icon12 from '../../assets/images/resource/png/milk11.jpg';
import icon13 from "../../assets/images/resource/png/milk12.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

function ServicesHomeThree({ className }) {
	const sliderRef = useRef();

	useEffect(() => {
  setTimeout(() => {
    sliderRef.current?.slickGoTo(0); // force re-rendering
  }, 100);
}, []);

	const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,           // enable autoplay
  autoplaySpeed: 3000,      // time between slides in ms (3000ms = 3 seconds)
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



    return (
        <>
        <section className={`services-section-three ${className || ''}`} id='services'>
        <div className="auto-container">
			<div className="sec-title text-center">	
				<span className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				<br />
				<h2 className='sub-title fs-1 mt-3'>Lorem, ipsum dolor.</h2>
			</div>
			<div className="outer-box">
				<div className="row justify-content-center">
					<Slider {...settings}>
					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon1} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Lorem, ipsum dolor.<br/> dipisicing elit</Link ></h6>
							<div className="text">Dairy Farm</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon13} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Dairy Farm </Link ></h6>
							<div className="text">NMilk / Cow<br/>
								Lorem ipsum dolor sit.</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon8} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Dairy <br/> Farm</Link ></h6>
							<div className="text">Lorem, ipsum. <br/>
								Lorem ipsum dolor sit amet.</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="200ms">
						<div className="inner-box ">
							<img src={icon2} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>dairy Farm</Link ></h6>
							<div className="text">Lorem, ipsum dolor.</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="400ms">
						<div className="inner-box ">
							<img src={icon3} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Dairy Farm <br/>SYSTEM</Link ></h6>
							<div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box ">
							<img src={icon4} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>airy Farm <br/>Milk</Link ></h6>
							<div className="text">Lorem ipsum dolor sit amet.</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon5} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Milk <br/>Dairy Farm </Link ></h6>
							<div className="text">Lorem ipsum dolor sit.</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon6} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>GATE <br/>Lorem.</Link ></h6>
							<div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur.</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon7} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Lorem, ipsum. <br/> Lorem.</Link ></h6>
							<div className="text">Lorem ipsum dolor sit.</div>
						</div>
					</div>
					{/* <div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon8} className='icon p-10 ' alt="" />
							<h6 className="title"><Link  to="/service-details">IT <br/>SECURITY&ELV SOLUTIONS </Link ></h6>
							<div className="text">Providing the solutions for tech business</div>
						</div>
					</div> */}
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon9} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>LIGHT <br/>Lorem.</Link ></h6>
							<div className="text">Lorem ipsum dolor sit.</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon10} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>MILk <br/>Cow</Link ></h6>
							<div className="text">Lorem ipsum dolor sit amet. </div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon11} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Milk <br/>Cow</Link ></h6>
							<div className="text">Lorem ipsum dolor sit.</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon12} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>Cow  <br/> Milk</Link ></h6>
							<div className="text">Lorem ipsum dolor sit.</div>
						</div>
					</div>
					</Slider>
				</div>
			</div>
		</div>
        </section>      
        </>
    );
}

export default ServicesHomeThree;
