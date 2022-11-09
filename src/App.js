import HomePage from "pages/HomePage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage></HomePage>,
		},
	]);
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
};

export default App;
