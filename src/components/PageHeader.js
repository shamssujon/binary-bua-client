import React from "react";

const PageHeader = ({ title }) => {
	return (
		<section className="py-10 bg-slate-200">
			<div className="container">
				<h2 className="text-4xl font-bold text-center">{title}</h2>
			</div>
		</section>
	);
};

export default PageHeader;
