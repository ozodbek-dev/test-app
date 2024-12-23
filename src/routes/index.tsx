/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import NotFound from "pages/not-found";
import { createBrowserRouter } from "react-router";
import Spinner from "shared/ui/Spinner";
import AppLayout from "widgets/layout";
import SubcategoryUI from "features/Subcategory/ui/SubategoryUI";
import SingleQuizUI from "features/Quiz/ui/SingleQuizUI";
import Option from "pages/Options";
import SingleQuiz from "pages/Quiz/pages/SingleQuiz";
import SingleSubcategory from "pages/Subcategory/SingleSubcategory";

const Quiz = lazy(() => import("pages/Quiz"));
const Category = lazy(() => import("pages/Category"));

const router = () => {
	return createBrowserRouter([
		{
			path: "/",
			loader: Spinner,
			element: <AppLayout />,
			errorElement: <NotFound />,
			children: [
				{
					index: true,
					loader: Spinner,
					element: <Category />,
					errorElement: <NotFound />,
				},
				{
					loader: Spinner,
					path: "/sub-category",
					errorElement: <NotFound />,
					children: [
						{
							index: true,
							element: <SubcategoryUI />,
						},
						{
							path: "/sub-category/:id",
							element: <SingleSubcategory />,
						},
					],
				},

				{
					path: "/quiz",
					loader: Spinner,
					errorElement: <NotFound />,
					children: [
						{
							index: true,
							path: "/quiz",
							element: <Quiz />,
						},
						{
							path: "/quiz/:id",
							element: <SingleQuiz />,
						},
					],
				},
				{
					path: "/options",
					loader: Spinner,
					errorElement: <NotFound />,
					children: [
						{
							index: true,
							path: "/options",
							element: <Option />,
						},
						{
							path: "/options/:id",
							loader: Spinner,
							element: <SingleQuizUI />,
						},
					],
				},
			],
		},
	]);
};

export default router;
