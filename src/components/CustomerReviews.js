import React from "react";

const CustomerReviews = () => {
	return (
		<section className="py-10">
			<div className="container">
				<h2 className="text-center text-4xl font-bold mb-8">Customer Reviews</h2>

				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					<div className="h-full rounded border bg-white p-8 text-center shadow-md shadow-slate-500/10">
						<div>
							<img
								src="https://www.dhakamaidagency.com/images/resource/author-1.jpg"
								alt=""
								className="mx-auto mb-3 block h-20 w-20 rounded-full border-4 border-blue-900/50 object-cover"
							/>
							<h6 className="text-lg font-bold text-blue-900">review.author</h6>
                            <p>sujon322@gmail.com</p>
						</div>
						<div className="mt-4">
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis vero ea tempora animi ad. Culpa architecto voluptatibus voluptas animi!</p>
						</div>
					</div>
					<div className="h-full rounded border bg-white p-8 text-center shadow-md shadow-slate-500/10">
						<div>
							<img
								src="https://www.dhakamaidagency.com/images/resource/author-1.jpg"
								alt=""
								className="mx-auto mb-3 block h-20 w-20 rounded-full border-4 border-blue-900/50 object-cover"
							/>
							<h6 className="text-lg font-bold text-blue-900">review.author</h6>
                            <p>sujon322@gmail.com</p>
						</div>
						<div className="mt-4">
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis vero ea tempora animi ad. Culpa architecto voluptatibus voluptas animi!</p>
						</div>
					</div>
					<div className="h-full rounded border bg-white p-8 text-center shadow-md shadow-slate-500/10">
						<div>
							<img
								src="https://www.dhakamaidagency.com/images/resource/author-1.jpg"
								alt=""
								className="mx-auto mb-3 block h-20 w-20 rounded-full border-4 border-blue-900/50 object-cover"
							/>
							<h6 className="text-lg font-bold text-blue-900">review.author</h6>
                            <p>sujon322@gmail.com</p>
						</div>
						<div className="mt-4">
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis vero ea tempora animi ad. Culpa architecto voluptatibus voluptas animi!</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomerReviews;
