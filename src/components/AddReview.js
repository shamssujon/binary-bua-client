import { AuthContext } from "../contexts/AuthProvider";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const AddReview = ({ service }) => {
	const { user, successToast, errorToast } = useContext(AuthContext);
	console.log(user);
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			serviceId: service._id,
			reviewerName: user?.displayName || "",
			reviewerEmail: user?.email || "",
			reviewerPhoto: user?.photoURL || "",
			reviewText: "",
		},
	});

	const onSubmit = (inputedReview) => {
		console.log(inputedReview);

		fetch(`https://binary-bua-server.vercel.app/review/add`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(inputedReview),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					reset();
					successToast("Your review is added successfully");
				}
			})
			.catch((error) => {
				console.log(error);
				errorToast(error);
			});
	};

	return (
		<section className="py-10">
			<div className="container">
				<h2 className="mb-8 text-center text-4xl font-bold">Add a review</h2>

				{user?.uid ? (
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mx-auto grid max-w-xl gap-6 rounded-md border bg-white p-8 shadow">
						<div className="grid gap-2">
							<label htmlFor="reviewText" className="font-bold">
								Write your review
							</label>
							<textarea
								id="reviewText"
								rows="3"
								{...register("reviewText", {
									required: {
										value: true,
										message: "Enter review",
									},
								})}
								className="block w-full rounded border px-4 py-2 text-lg focus:outline-2 focus:outline-cyan-600"></textarea>

							{errors.reviewText && (
								<p className="text-sm text-rose-500">{errors.reviewText.message}</p>
							)}
						</div>
						<input
							type="submit"
							value="Add review"
							className="btn btn-primary cursor-pointer"
						/>
					</form>
				) : (
					<div className="text-center">
						<Link to={"/login"} className="text-blue-700">
							Please login to add a review
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default AddReview;
