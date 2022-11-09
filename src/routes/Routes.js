import React from "react";
import MainLayout from "layouts/MainLayout";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
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
