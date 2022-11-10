import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<section className="py-10 lg:py-20">
			<div className="container">
				<h2 className="mb-8 text-center text-4xl font-bold">Login</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input type="text" {...register("name")} className="border" />
					<input type="email" {...register("email")} className="border" />
					<input type="submit" />
				</form>
			</div>
		</section>
	);
};

export default LoginPage;
