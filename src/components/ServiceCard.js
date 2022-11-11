import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
	const { _id, title, price, imageURL, description } = service;
	return (
		<div className="service rounded border bg-white p-6 flex flex-col justify-between">
			<div className="mb-4 aspect-6/4 overflow-hidden">
				<img src={imageURL} alt="" className="h-full w-full object-cover rounded-t" />
			</div>
			<div className="mb-4 flex-1">
				<h4 className="mb-2 text-2xl font-bold">{title}</h4>
				<p className="text-lg">
					{description.length > 100 ? description.slice(0, 100) + "..." : description}
				</p>
			</div>
			<div>
				<p className="text-lg font-bold">Price: starts from {price} taka / hour</p>
				<Link to={`/services/service/${_id}`} className="btn btn-primary mt-4 w-full">
					Details
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard;
