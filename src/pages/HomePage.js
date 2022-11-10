import About from "components/About";
import Testimonials from "components/Testimonials";
import Hero from "components/Hero";
import Services from "components/Services";
import React from "react";

const HomePage = () => {
	return (
		<div>
			<Hero></Hero>
			<Services></Services>
			{/* <About></About> */}
			<Testimonials />
		</div>
	);
};

export default HomePage;
