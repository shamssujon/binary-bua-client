import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
	return (
		<>
			<Header></Header>
			<main className="flex-1">
				<Outlet></Outlet>
			</main>
			<Footer></Footer>
		</>
	);
};

export default MainLayout;
