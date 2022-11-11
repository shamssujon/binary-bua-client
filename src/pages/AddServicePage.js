import { AuthContext } from "../contexts/AuthProvider";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

const AddServicePage = () => {
	const { user, successToast } = useContext(AuthContext);
	// Add a service
	const {
		register,
		handleSubmit,
		watch,
        reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (serviceData) => {
		serviceData.customerEmail = user?.email;

		fetch("https://binary-bua-server.vercel.app/services/service/add", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(serviceData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data.acknowledged) {
					successToast("Service added successfully");
                    reset();
				}
			});
	};
	return (
		<section className="py-10 lg:py-20">
			<div className="container">
				<h2 className="mb-8 text-center text-4xl font-bold">Add a service</h2>
				<div className="mx-auto max-w-lg">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="grid gap-6 rounded-md border bg-white p-8 shadow">
						<div className="grid gap-2">
							<label htmlFor="title" className="font-bold">
								Service title
							</label>
							<input
								id="title"
								type="text"
								{...register("title", { required: true })}
								className="block w-full rounded border px-4 py-2 text-lg focus:outline-2 focus:outline-cyan-600"
							/>
							{errors.title && (
								<p className="text-sm text-rose-500">Title is required</p>
							)}
						</div>
						<div className="grid gap-2">
							<label htmlFor="price" className="font-bold">
								Price
							</label>
							<input
								id="price"
								type="text"
								{...register("price", {
									required: {
										value: true,
										message: "Price is required",
									},
								})}
								className="block w-full rounded border px-4 py-2 text-lg focus:outline-2 focus:outline-cyan-600"
							/>
							{errors.price && (
								<p className="text-sm text-rose-500">{errors.price.message}</p>
							)}
						</div>
						<div className="grid gap-2">
							<label htmlFor="imageURL" className="font-bold">
								Image URL
							</label>
							<input
								id="imageURL"
								type="text"
								{...register("imageURL", {
									required: {
										value: true,
										message: "Image URL is required",
									},
								})}
								className="block w-full rounded border px-4 py-2 text-lg focus:outline-2 focus:outline-cyan-600"
							/>
							{errors.imageURL && (
								<p className="text-sm text-rose-500">{errors.imageURL.message}</p>
							)}
						</div>
						<div className="grid gap-2">
							<label htmlFor="description" className="font-bold">
								Service description
							</label>
							<textarea
								id="description"
								rows="3"
								{...register("description", {
									required: {
										value: true,
										message: "Service description is required",
									},
								})}
								className="block w-full rounded border px-4 py-2 text-lg focus:outline-2 focus:outline-cyan-600"></textarea>

							{errors.description && (
								<p className="text-sm text-rose-500">
									{errors.description.message}
								</p>
							)}
						</div>
						<input
							type="submit"
							value="Add service"
							className="btn btn-primary cursor-pointer"
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AddServicePage;
