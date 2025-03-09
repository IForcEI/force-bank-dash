import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {Dashboard, Transactions, Notfound} from "../../pages"
import { Home } from "../../pages/home"

const router = createBrowserRouter([

	{
		path: '/',
		element: <Home />,
		errorElement: <Notfound />,
		children: [
			{
				path: '/Dashboard',
				element: <Dashboard />,
			},
			{
				path: '/Transactions',
				element: <Transactions />
			},
		]
	},

	

])

export const Router = () => {
	return (
			<RouterProvider router={router} />
	)
}