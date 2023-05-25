import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Start = lazy(() => import("./start"));
const Quiz = lazy(() => import("./question"));

function Routes() {
	const publicRoutes = [
		{
			path: "/",
			element: (
				<Suspense fallback={null}>
					<Start />
				</Suspense>
			),
		},
		{
			path: "/quiz",
			element: (
				<Suspense fallback={null}>
					<Quiz />
				</Suspense>
			),
		},
	];

	return useRoutes([...publicRoutes]);
}

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default AppRoutes;
