import MainLayout from "layouts/MainLayout";
import AddServicePage from "pages/AddServicePage";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import ServiceDetailsPage from "pages/ServiceDetailsPage";
import ServicesPage from "pages/ServicesPage";
import UserServicesPage from "pages/UserServicesPage";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "*",
				element: <ErrorPage></ErrorPage>,
			},
			{
				path: "/",
				element: <HomePage></HomePage>,
			},
			{
				path: "/services",
				element: <ServicesPage></ServicesPage>,
				loader: async () => {
					return fetch("https://binary-bua-server.vercel.app/services");
				},
			},
			{
				path: "/services/service/:id",
				element: <ServiceDetailsPage></ServiceDetailsPage>,
				loader: async ({ params }) => {
					return fetch(
						`https://binary-bua-server.vercel.app/services/service/${params.id}`
					);
				},
			},
			{
				path: "/services/service/add",
				element: <AddServicePage></AddServicePage>,
			},
			{
				path: "/user_services",
				element: <UserServicesPage></UserServicesPage>,
				loader: async ({ params }) => {
					return fetch(
						`https://binary-bua-server.vercel.app/services?email=${params.email}`
					);
				},
			},
			{
				path: "/login",
				element: <LoginPage></LoginPage>,
			},
			{
				path: "/register",
				element: <RegisterPage></RegisterPage>,
			},
		],
	},
]);
