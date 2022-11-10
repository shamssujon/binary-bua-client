import MainLayout from "layouts/MainLayout";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import ServicesPage from "pages/ServicesPage";
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
				// loader: async () => {
				// 	return fetch("https://binary-bua-server.vercel.app/services?items=3");
				// },
			},
			{
				path: "/services",
				element: <ServicesPage></ServicesPage>,
				loader: async () => {
					return fetch("https://binary-bua-server.vercel.app/services");
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
