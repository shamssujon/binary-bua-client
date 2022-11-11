import React, { useContext, useState } from "react";
import { BsEnvelope, BsFillPersonFill, BsGeoAlt, BsTelephone } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
	const [menuActive, setMenuActive] = useState(false);
	const [profileBtnActive, setProfileBtnActive] = useState(false);
	const { user, logOut, successToast, errorToast } = useContext(AuthContext);

	const handleLogOut = () => {
		setProfileBtnActive(!profileBtnActive);

		logOut()
			.then(() => {
				successToast("Signed out");
			})
			.catch((error) => {
				errorToast(error.message);
			});
	};
	const navigation = [
		{
			path: "/",
			title: "Home",
		},
		{
			path: "/services",
			title: "Services",
		},
		{
			path: "/blog",
			title: "Blog",
		},
		{
			path: "/contact",
			title: "Contact",
		},
	];

	return (
		<header className="header relative bg-blue-900 py-2 lg:bg-white lg:p-0">
			<div className="container">
				<div className="flex justify-between gap-4">
					{/* Logo */}
					<Link to="/" className="flex flex-shrink-0 items-center gap-2">
						<img src={logo} alt="" className="h-14 w-14" />
						<span className="text-2xl font-bold text-white lg:text-cyan-600">
							Binary Bua
						</span>
					</Link>

					{/* Header contacts */}
					<div className="hidden items-center divide-x-2 lg:flex">
						<div className="flex items-center gap-4 p-4">
							<BsTelephone className="text-2xl text-cyan-600" />
							<div className="">
								<h5 className="text-sm font-bold uppercase text-zinc-400">
									Call me:
								</h5>
								<p className="text-lg font-bold text-blue-900">+88 01780 691149</p>
							</div>
						</div>
						<div className="flex items-center gap-4 p-4">
							<BsEnvelope className="text-2xl text-cyan-600" />
							<div className="">
								<h5 className="text-sm font-bold uppercase text-zinc-400">
									Email me:
								</h5>
								<p className="text-lg font-bold text-blue-900">binary@bua.com</p>
							</div>
						</div>
						<div className="flex items-center gap-4 p-4">
							<BsGeoAlt className="text-2xl text-cyan-600" />
							<div className="">
								<h5 className="text-sm font-bold uppercase text-zinc-400">
									Address:
								</h5>
								<p className="text-lg font-bold text-blue-900">
									Pasher Goli, Dhaka
								</p>
							</div>
						</div>
					</div>

					{/* Header Buttons */}
					<div className="flex items-center gap-3 lg:hidden">
						{/* Account */}
						<div className="relative">
							<button
								title={user?.displayName || "Login"}
								onClick={() => setProfileBtnActive(!profileBtnActive)}
								className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-cyan-500/10 bg-slate-200 text-center outline-2 outline-offset-2 transition hover:bg-slate-300  focus:bg-slate-300 focus:outline focus:outline-cyan-500/20 active:outline-cyan-500/50 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-700 dark:focus:bg-slate-700">
								{user?.photoURL ? (
									<img
										src={user?.photoURL}
										alt={user?.displayName}
										className="h-full w-full object-cover"
									/>
								) : (
									<BsFillPersonFill className="h-full w-full p-2" />
								)}
							</button>

							{/* Dropdown content */}
							<div
								className={`absolute right-0 top-full z-10 mt-4 w-56 overflow-hidden rounded border bg-white shadow ${
									profileBtnActive ? "visible opacity-100" : "invisible opacity-0"
								}`}>
								{user?.uid ? (
									<div>
										{user?.displayName && (
											<p className="p-4">
												Hello, {user?.displayName.split(" ")[0]}
											</p>
										)}
										<ul className="divide-y">
											<li>
												<Link
													className="block px-4 py-2 font-semibold uppercase hover:bg-cyan-600 hover:text-white"
													to={"/profile"}>
													Profile
												</Link>
											</li>
											<li>
												<Link
													className="block px-4 py-2 font-semibold uppercase hover:bg-cyan-600 hover:text-white"
													to={"/userreviews"}>
													My Reviews
												</Link>
											</li>
											<li>
												<Link
													className="block px-4 py-2 font-semibold uppercase hover:bg-cyan-600 hover:text-white"
													to={"/user_services"}>
													My Services
												</Link>
											</li>
											<li>
												<button
													className="block w-full px-4 py-2 text-left font-semibold uppercase hover:bg-cyan-600 hover:text-white"
													onClick={handleLogOut}>
													Log out
												</button>
											</li>
										</ul>
									</div>
								) : (
									<div className="p-4">
										<h4 className="mb-4 text-xl font-bold">
											Sign up or log in to your account.
										</h4>
										<div className="grid gap-2">
											<Link
												onClick={() =>
													setProfileBtnActive(!profileBtnActive)
												}
												to={"/login"}
												className="btn btn-primary">
												Login
											</Link>
											<Link
												onClick={() =>
													setProfileBtnActive(!profileBtnActive)
												}
												to={"/register"}
												className="btn btn-secondary">
												Register
											</Link>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Nav Toggler */}
						<button
							type="button"
							onClick={() => setMenuActive(!menuActive)}
							className="relative h-6 w-8">
							<span
								className={`absolute left-1/2 top-0 block h-0.5 w-full origin-top-right -translate-x-1/2 transform rounded bg-white transition will-change-transform ${
									menuActive ? "-rotate-45" : "rotate-0"
								}`}></span>
							<span
								className={`absolute left-1/2 top-1/2 block h-0.5 w-full origin-left -translate-y-1/2 -translate-x-1/2 transform rounded bg-white transition  will-change-transform ${
									menuActive ? "scale-x-0" : "scale-x-100"
								}`}></span>
							<span
								className={`absolute left-1/2 bottom-0 block h-0.5 w-full origin-bottom-right -translate-x-1/2 transform rounded bg-white transition will-change-transform ${
									menuActive ? "rotate-45" : "rotate-0"
								}`}></span>
						</button>
					</div>

					{/* Mobile Menu */}
					<div
						className={`absolute top-full left-0 right-0 z-10 origin-top transform bg-blue-900 py-2 shadow transition-all lg:hidden ${
							menuActive
								? "visible scale-y-100 opacity-100"
								: "invisible scale-y-0 opacity-0 lg:visible lg:scale-y-100 lg:opacity-100"
						}`}>
						<div className="flex flex-col text-center">
							{navigation.map((item, index) => (
								<NavLink
									key={index}
									to={item.path}
									className={({ isActive }) =>
										(isActive
											? "bg-cyan-600 hover:bg-cyan-500"
											: "hover:bg-blue-800") +
										" block px-6 py-4 font-semibold uppercase text-white transition "
									}>
									{item.title}
								</NavLink>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Desktop menubar */}
			<div className="hidden bg-blue-900 lg:block">
				<div className="container flex items-center justify-between">
					{/* Navigation */}
					<div className="flex flex-col flex-wrap items-center lg:flex-row">
						{navigation.map((item, index) => (
							<NavLink
								key={index}
								to={item.path}
								className={({ isActive }) =>
									(isActive
										? "bg-cyan-600 hover:bg-cyan-500"
										: "hover:bg-blue-800") +
									" block px-6 py-4 font-semibold uppercase text-white transition "
								}>
								{item.title}
							</NavLink>
						))}
					</div>

					{/* Account */}
					<div className="relative">
						<button
							title={user?.displayName || "Login"}
							onClick={() => setProfileBtnActive(!profileBtnActive)}
							className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-cyan-500/10 bg-slate-200 text-center outline-2 outline-offset-2 transition hover:bg-slate-300  focus:bg-slate-300 focus:outline focus:outline-cyan-500/20 active:outline-cyan-500/50 dark:bg-slate-600 dark:text-white dark:hover:bg-slate-700 dark:focus:bg-slate-700">
							{user?.photoURL ? (
								<img
									src={user?.photoURL}
									alt={user?.displayName}
									className="h-full w-full object-cover"
								/>
							) : (
								<BsFillPersonFill className="h-full w-full p-2" />
							)}
						</button>

						{/* Dropdown content */}
						<div
							className={`absolute right-0 top-full z-10 mt-4 w-56 overflow-hidden rounded border bg-white shadow ${
								profileBtnActive ? "visible opacity-100" : "invisible opacity-0"
							}`}>
							{user?.uid ? (
								<div>
									{user?.displayName && (
										<p className="p-4">
											Hello, {user?.displayName.split(" ")[0]}
										</p>
									)}
									<ul className="divide-y">
										<li>
											<Link
												className="block px-4 py-2 font-semibold uppercase hover:bg-cyan-600 hover:text-white"
												to={"/profile"}>
												Profile
											</Link>
										</li>
										<li>
											<Link
												className="block px-4 py-2 font-semibold uppercase hover:bg-cyan-600 hover:text-white"
												to={"/userreviews"}>
												My Reviews
											</Link>
										</li>
										<li>
											<Link
												className="block px-4 py-2 font-semibold uppercase hover:bg-cyan-600 hover:text-white"
												to={"/user_services"}>
												My Services
											</Link>
										</li>
										<li>
											<button
												className="block w-full px-4 py-2 text-left font-semibold uppercase hover:bg-cyan-600 hover:text-white"
												onClick={handleLogOut}>
												Log out
											</button>
										</li>
									</ul>
								</div>
							) : (
								<div className="p-4">
									<h4 className="mb-4 text-xl font-bold">
										Sign up or log in to your account.
									</h4>
									<div className="grid gap-2">
										<Link
											onClick={() => setProfileBtnActive(!profileBtnActive)}
											to={"/login"}
											className="btn btn-primary">
											Login
										</Link>
										<Link
											onClick={() => setProfileBtnActive(!profileBtnActive)}
											to={"/register"}
											className="btn btn-secondary">
											Register
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
