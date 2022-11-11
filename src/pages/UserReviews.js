import ReviewCard from "components/ReviewCard";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const UserReviews = () => {
	const { user, successToast } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch(`https://binary-bua-server.vercel.app/reviews?email=${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setReviews(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [user.email]);

	// Delete a review
	const handleDelete = (id) => {
		const confirmDelete = window.confirm(`Want to delete?`);

		if (confirmDelete) {
			fetch(`https://binary-bua-server.vercel.app/reviews/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						successToast(`Deleted successfully`);

						const remaining = reviews.filter((review) => review._id !== id);
						setReviews(remaining);
					}
				})
				.catch((error) => console.error(error));
		}
	};
	return (
		<section className="py-10">
			<div className="container">
				<h2 className="mb-8 text-center text-4xl font-bold">
					My Reviews: {reviews?.length}
				</h2>
				{reviews.length === 0 ? (
					<p className="text-center text-xl">No reviews yet :(</p>
				) : (
					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{reviews.map((review) => (
							<ReviewCard key={review._id} review={review}>
								<div className="mt-4 grid grid-cols-2 gap-2">
									<button className="btn btn-secondary">Edit</button>
									<button
										className="btn btn-danger"
										onClick={() => handleDelete(review._id)}>
										Delete
									</button>
								</div>
							</ReviewCard>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default UserReviews;
