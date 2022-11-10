import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
	// const services = useLoaderData();
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("https://binary-bua-server.vercel.app/services?items=3")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<section className="py-10 md:py-20">
			<div className="container">
				<h2 className="mb-8 text-center text-4xl font-bold">Popular Services</h2>

				<div className="services grid gap-8 lg:grid-cols-3">
					{services.map((service) => (
						<ServiceCard key={service._id} service={service} />
					))}
				</div>

				<div className="mt-10 text-center">
					<Link to={"/services"} className="btn btn-secondary btn-lg">
						See all services
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Services;
