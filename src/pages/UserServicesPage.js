import ServiceCard from "components/ServiceCard";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const UserServicesPage = () => {
	const { user } = useContext(AuthContext);
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch(`https://binary-bua-server.vercel.app/services?email=${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
				console.log(data);
			});
	}, [user.email]);
	return (
		<section className="py-10 md:py-20">
			<div className="container">
				<h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
					Services Added by {user?.email}
				</h2>
				<div className="services grid gap-8 lg:grid-cols-3">
					{services.map((service) => (
						<ServiceCard key={service._id} service={service}>
							<div className="mt-4 grid grid-cols-2 gap-2">
								<button className="btn btn-secondary">Edit</button>
								<button className="btn btn-danger">Delete</button>
							</div>
						</ServiceCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default UserServicesPage;
