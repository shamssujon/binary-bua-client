import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
	const { title, image, description } = service;
	return (
		<div className="service border bg-white p-4">
			<img src={image} alt="" />
			<h4 className="text-2xl">{title}</h4>
			<p>{description}</p>
			<Link className="btn btn-primary">Details</Link>
		</div>
	);
};

export default ServiceCard;
