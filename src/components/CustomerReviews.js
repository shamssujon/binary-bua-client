import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const CustomerReviews = ({ service }) => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch(`https://binary-bua-server.vercel.app/reviews?id=${service._id}`)
			.then((res) => res.json())
			.then((data) => {
				setReviews(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [service._id]);
	return (
		<section className="py-10">
			<div className="container">
				<h2 className="mb-8 text-center text-4xl font-bold">
					Customer Reviews: {reviews?.length}
				</h2>

				{reviews.length === 0 ? (
					<p className="text-center text-xl">No reviews yet :(</p>
				) : (
					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{reviews.map((review) => (
							<ReviewCard key={review._id} review={review}></ReviewCard>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default CustomerReviews;
