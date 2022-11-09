import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import sliderImg1 from "../assets/images/hero/1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
const Hero = () => {
	return (
		<div>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}>
				<SwiperSlide>
					<div className="relative py-20">
						<img
							src={sliderImg1}
							alt=""
							className="absolute inset-0 -z-20 block h-full w-full object-cover"
						/>
						<div className="absolute inset-0 -z-10 h-full w-full bg-cyan-900 mix-blend-multiply"></div>
						<div className="container relative z-10">
							<div className="mx-auto w-1/2 text-center text-white">
								<h1 className="mb-4 text-6xl font-bold leading-tight">
									All in one, multitalented, house maid in the world
								</h1>
								<p className="mb-8 text-xl leading-normal">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
									veritatis, iste culpa expedita a blanditiis amet! Alias corporis
									sit natus?
								</p>
								<Link to={"/services"} className="btn btn-lg btn-primary">
									My Services
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Hero;
