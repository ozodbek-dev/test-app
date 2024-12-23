import React from "react";
import { RouterProvider } from "react-router";
import router from "routes";

const AppRoutes = () => {
	return <RouterProvider router={router()} />;
};

export default AppRoutes;
