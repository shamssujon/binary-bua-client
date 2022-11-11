import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewCard from "./ReviewCard";
const Testimonials = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch(`https://binary-bua-server.vercel.app/reviews?limit=5`)
			.then((res) => res.json())
			.then((data) => {
				setReviews(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	// const reviews = [
	// 	{
	// 		author: "Hero Alom",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem molestias, dolorem optio atque amet? Nisi, culpa consectetur. Recusandae, nisi!",
	// 	},
	// 	{
	// 		author: "Hero Alom",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem molestias, dolorem optio atque amet? Nisi, culpa consectetur. Recusandae, nisi!",
	// 	},
	// 	{
	// 		author: "Hero Alom",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem molestias, dolorem optio atque amet? Nisi, culpa consectetur. Recusandae, nisi!",
	// 	},
	// 	{
	// 		author: "Hero Alom",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem molestias, dolorem optio atque amet? Nisi, culpa consectetur. Recusandae, nisi!",
	// 	},
	// ];
	return (
		<section className="py-10 md:py-20">
			<div className="container">
				<h2 className="mb-8 text-center text-4xl font-bold">What's people saying</h2>

				<div className="">
					<Swiper
						// install Swiper modules
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1200: {
								slidesPerView: 3,
							},
						}}
						spaceBetween={40}
						slidesPerView={3}
						rewind={true}
						navigation
						pagination={{ clickable: true }}>
						{reviews.map((review) => (
							<SwiperSlide key={review._id} className="h-auto">
								<ReviewCard review={review}></ReviewCard>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
