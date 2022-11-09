import React from "react";
import { BsEnvelope, BsGeoAlt, BsPerson, BsTelephone } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Header = () => {
	// const [menuActive, setMenuActive] = useState(false);
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
	];

	return (
		<header className="header relative bg-white">
			<div className="container">
				<div className="flex justify-between gap-8">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-2">
						<img src={logo} alt="" className="h-14 w-14" />
						<span className="text-2xl font-bold text-cyan-600">Binary Bua</span>
					</Link>

					<div className="bg-slate-00 grid grid-cols-3 divide-x-2">
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
									Pasher Goli, Bangladesh
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-blue-900">
				<div className="container flex justify-between">
					<div className="flex flex-col items-center lg:flex-row flex-wrap">    
						{navigation.map((item) => (
							<NavLink
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
					<div className="">
						<Link to={"/login"} className="btn btn-primary h-full rounded-none">
                            <BsPerson className="w-6 h-6" />
							Account
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
