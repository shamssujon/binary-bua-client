import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about/about.jpg";
const About = () => {
	return (
		<section className="py-10 md:py-20">
			<div className="container">
				<div className="grid items-center gap-10 lg:grid-cols-2">
					<div className="img">
						<img src={aboutImg} alt="" />
					</div>
					<div className="">
						<h2 className="mb-4 text-4xl font-bold">Welcome to Binary Bua</h2>
						<p className="mb-6 text-lg">
							Binary Bua is a professional house keeper. Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Officiis, nemo quidem pariatur quia est
							beatae eius autem odit porro. Autem earum quam tempora voluptate
							perspiciatis consequuntur nemo.
						</p>
						<div className="">
							<Link to={"/services"} className="btn btn-primary">
								See all services
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
