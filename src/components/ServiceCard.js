import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
	const { title, image, description } = service;
	return (
		<div className="service border bg-white p-4 rounded">
			<div className="aspect-6/4 overflow-hidden mb-4">
				<img src={image} alt="" className="h-full w-full object-cover" />
			</div>
			<h4 className="text-2xl mb-2">{title}</h4>
			<p className="mb-3">{description}</p>
			<p>Price: Starts from 100 taka / hour</p>
			<Link to={"/services/service"} className="btn btn-primary mt-4">
				Details
			</Link>
		</div>
	);
};

export default ServiceCard;
