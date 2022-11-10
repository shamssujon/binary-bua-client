import ServiceCard from "components/ServiceCard";
import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const ServicesPage = () => {
	const services = useLoaderData();
	return (
		<section className="py-10 md:py-20">
			<div className="container">
				<div className="mb-8 flex flex-wrap items-center justify-between gap-4">
					<h2 className="text-3xl font-bold md:text-4xl">All Services</h2>
					<Link to={"/"} className="btn btn-primary">
						<BsPlusLg />
						Add a new service
					</Link>
				</div>

				<div className="services grid gap-8 lg:grid-cols-3">
					{services.map((service) => (
						<ServiceCard key={service._id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesPage;
