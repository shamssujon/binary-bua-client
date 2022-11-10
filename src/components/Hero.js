import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../assets/images/hero/1.jpg";
// Import Swiper styles
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Hero = () => {
	return (
		<div>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={40}
				slidesPerView={1}
				rewind={true}
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
							<div className="mx-auto text-center text-white lg:w-1/2">
								<h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl md:leading-tight">
									<span className="text-cyan-200">Multi talented</span> house maid
									for your service
								</h1>
								<p className="mb-8 text-xl leading-normal md:text-2xl md:leading-normal">
									Binary Bua is a professional house maid with 10 years+ real life
									experience. Can help you to take care your child, parents, house
									cleaning, cook and more.
								</p>
								<Link to={"/services"} className="btn btn-lg btn-primary">
									See all Services
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
