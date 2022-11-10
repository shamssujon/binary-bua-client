import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testimonials = () => {
	const reviews = [
		{
			author: "Hero Alom",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem molestias, dolorem optio atque amet? Nisi, culpa consectetur. Recusandae, nisi!",
		},
		{
			author: "Hero Alom",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem molestias, dolorem optio atque amet? Nisi, culpa consectetur. Recusandae, nisi!",
		},
		{
			author: "Hero Alom",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem molestias, dolorem optio atque amet? Nisi, culpa consectetur. Recusandae, nisi!",
		},
		{
			author: "Hero Alom",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quidem molestias, dolorem optio atque amet? Nisi, culpa consectetur. Recusandae, nisi!",
		},
	];
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
							<SwiperSlide className="h-auto">
								<div className="h-full rounded border bg-white p-8 text-center shadow-md shadow-slate-500/10">
									<div>
										<img
											src="https://www.dhakamaidagency.com/images/resource/author-1.jpg"
											alt=""
											className="mx-auto mb-3 block h-20 w-20 rounded-full border-4 border-blue-900/50 object-cover"
										/>
										<h6 className="text-lg font-bold text-blue-900">
											{review.author}
										</h6>
									</div>
									<div className="mt-4">
										<p className="text-xl">"{review.desc}"</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
