import { AuthContext } from "../contexts/AuthProvider";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "components/ServiceCard";

const UserServicesPage = () => {
	const { user } = useContext(AuthContext);
    const services = useLoaderData();
    console.log(services);
	return (
		<section className="py-10 md:py-20">
			<div className="container">
				<h2 className="mb-8 text-center text-4xl font-bold">
					Services Added by {user?.email}
				</h2>
                <div className="services grid gap-8 lg:grid-cols-3">
					{services.map((service) => (
						<ServiceCard key={service._id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default UserServicesPage;
