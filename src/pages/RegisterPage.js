import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const RegisterPage = () => {
	const { createUser, googleSignIn, successToast, errorToast } = useContext(AuthContext);

	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	// Create user with email/pass
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (userCredentials) => {
		const { name, email, password } = userCredentials;

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				successToast("Account created successfully!");
				// Navigate user back to where they came from
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				errorToast(error.message);
			});
	};

	// Google Login
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				successToast("Logged in with google");
				// Navigate user back to where they came from
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				errorToast(error.message);
			});
	};
	return (
		<section className="py-10 lg:py-20">
			<div className="container">
				<h2 className="mb-8 text-center text-4xl font-bold">Sign up</h2>
				<div className="mx-auto max-w-lg">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="grid gap-6 rounded-md border bg-white p-8 shadow">
						<div className="grid gap-2">
							<label htmlFor="name" className="font-bold">
								Full name
							</label>
							<input
								id="name"
								type="text"
								{...register("name", { required: true })}
								className="block w-full rounded border px-4 py-2 text-lg focus:outline-2 focus:outline-cyan-600"
							/>
							{errors.name && (
								<p className="text-sm text-rose-500">Name is required</p>
							)}
						</div>
						<div className="grid gap-2">
							<label htmlFor="email" className="font-bold">
								Email address
							</label>
							<input
								id="email"
								type="email"
								{...register("email", { required: true })}
								className="block w-full rounded border px-4 py-2 text-lg focus:outline-2 focus:outline-cyan-600"
							/>
							{errors.email && (
								<p className="text-sm text-rose-500">Email is required</p>
							)}
						</div>
						<div className="grid gap-2">
							<label htmlFor="password" className="font-bold">
								Choose password
							</label>
							<input
								id="password"
								type="password"
								{...register("password", {
									required: {
										value: true,
										message: "Password is required",
									},
									pattern: {
										value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{4,20}$/,
										message:
											"Password should be 4 to 20 charecters long with small, capital, and special charecters",
									},
								})}
								className="block w-full rounded border px-4 py-2 text-lg focus:outline-2 focus:outline-cyan-600"
							/>
							{errors.password && (
								<p className="text-sm text-rose-500">{errors.password.message}</p>
							)}
						</div>
						<input
							type="submit"
							value="Sign up"
							className="btn btn-primary cursor-pointer"
						/>
					</form>
					<div className="mt-8 text-center">
						<p>OR</p>
						<div className="mt-4 flex items-center justify-center gap-2">
							<button
								className="btn bg-red-600 text-white"
								onClick={handleGoogleSignIn}>
								<BsGoogle className="h-6 w-6" />
								continue with Google
							</button>
						</div>
					</div>
					<p className="mt-8 text-center">
						Already have an account?{" "}
						<Link to={"/login"} className="text-primary font-semibold">
							Log in
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default RegisterPage;
