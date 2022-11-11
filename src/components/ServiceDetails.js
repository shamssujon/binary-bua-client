import React from "react";
import { BsTelephone } from "react-icons/bs";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceDetails = ({ service }) => {
	const { title, imageURL, price, description, _id } = service;
	return (
		<section className="py-10">
			<div className="container">
				<div className="grid gap-6 rounded-lg border bg-white p-6 lg:grid-cols-2 lg:gap-10">
					<PhotoProvider>
						<div className="aspect-6/4 overflow-hidden rounded-lg">
							<PhotoView src={imageURL}>
								<img
									src={imageURL}
									alt=""
									className="h-full w-full cursor-zoom-in object-cover"
								/>
							</PhotoView>
						</div>
					</PhotoProvider>
					<div className="">
						<h3 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h3>
						<p className="mb-4">{description}</p>
						<p className="mb-4 text-xl font-bold">Price: starts from {price} taka / hour</p>

						<a
							href="tel:+8801780691149"
							className="group inline-flex items-center gap-4 rounded-[100px] border-2 border-cyan-600 p-4 transition hover:bg-cyan-500">
							<span className="grid h-14 w-14 place-content-center rounded-full bg-slate-200 text-cyan-600">
								<BsTelephone className="text-2xl" />
							</span>
							<span className="">
								<h5 className="text-sm font-bold uppercase text-zinc-400 transition group-hover:text-white/70">
									Call to book
								</h5>
								<p className="text-lg font-bold text-blue-900 transition group-hover:text-white">
									+88 01780 691149
								</p>
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetails;
