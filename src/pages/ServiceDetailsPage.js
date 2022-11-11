import CustomerReviews from "components/CustomerReviews";
import ServiceDetails from "components/ServiceDetails";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetailsPage = () => {
	const serviceData = useLoaderData();
	return (
		<>
			<ServiceDetails service={serviceData}></ServiceDetails>
            <CustomerReviews></CustomerReviews>
		</>
	);
};

export default ServiceDetailsPage;