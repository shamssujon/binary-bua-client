import PageHeader from "components/PageHeader";
import ServiceDetails from "components/ServiceDetails";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetailsPage = () => {
	const serviceData = useLoaderData();
	return (
		<>
			{/* <PageHeader title={serviceData.title}></PageHeader> */}
			<ServiceDetails service={serviceData}></ServiceDetails>
		</>
	);
};

export default ServiceDetailsPage;
