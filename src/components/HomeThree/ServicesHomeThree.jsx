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
				<span className=" ">Trusted Quality & Innovation in Animal Nutrition</span>
				<br />
				<h2 className='sub-title fs-1 mt-3'>About Nordic BioGain</h2>
			</div>
			<div className="outer-box">
				<div className="row justify-content-center">
					<Slider {...settings}>
					{/* <div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon1} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>NORDIC BIOGAIN</Link ></h6>
							<div className="text">recision Nutrition for Animal Growth</div>
						</div>
					</div> */}

					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon13} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>MAXIGAIN VM</Link ></h6>
							<div className="text">Optimized Nutrition for Cattle</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp ">
						<div className="inner-box">
							<img src={icon8} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>NORDIC <br /> MICROMIX </Link ></h6>
							<div className="text">Advanced Trace Mineral Supplement</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="200ms">
						<div className="inner-box ">
							<img src={icon2} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>NORDIC <br /> KETOAGUARD</Link ></h6>
							<div className="text"> Support for Dairy Cattle Transition</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="400ms">
						<div className="inner-box ">
							<img src={icon3} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>NORDIC <br /> Vit E50</Link ></h6>
							<div className="text">High-Potency Vitamin E for Livestock.</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="600ms">
						<div className="inner-box ">
							<img src={icon4} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>NORDIC <br /> VITALYEAST</Link ></h6>
							<div className="text">Boosting Rumen Health & Digestion</div>
						</div>
					</div>

					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon5} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>MYCONORD Y</Link ></h6>
							<div className="text">Broad-Spectrum Mycotoxin Binder</div>
						</div>
					</div>
					{/* <div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon6} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>NORDITOX GUARD</Link ></h6>
							<div className="text">Selective Mycotoxin Protection</div>
						</div>
					</div> */}
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon7} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>NORDIC <br /> KETOAGUARD</Link ></h6>
							<div className="text">Smooth Transition for Dairy Cattle</div>
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
							<h6 className="title"><Link>NORDIPHYTASE</Link ></h6>
							<div className="text">Boost Phosphorus Utilization, Cut Feed Costs</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon10} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>PROMETH <br /> NORDIC RP </Link ></h6>
							<div className="text">Rumen-Protected Methionine for Ruminants</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon11} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>NORDITOX <br /> GUARD</Link ></h6>
							<div className="text">Smart Mycotoxin Control</div>
						</div>
					</div>
					<div className="service-block-three col wow fadeInUp" data-wow-delay="800ms">
						<div className="inner-box">
							<img src={icon12} className='icon p-10 ' alt="" />
							<h6 className="title"><Link>NORDIC <br /> HERDMAX</Link ></h6>
							<div className="text">High-Performance Nutrition for Dairy Cattle</div>
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
