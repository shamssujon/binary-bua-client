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
		<section className="py-10">
			<div className="container">
				<h2 className="text-center text-4xl font-bold">Services</h2>

				<div className="services grid grid-cols-3">
					{services.map((service) => (
						<ServiceCard key={service._id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
