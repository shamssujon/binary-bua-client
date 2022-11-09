import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<div className="App">
			<div className="flex min-h-screen flex-col justify-between bg-slate-50 text-slate-800">
				<RouterProvider router={router}></RouterProvider>
				<Toaster />
			</div>
		</div>
	);
}

export default App;
