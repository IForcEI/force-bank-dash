import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard, Notfound, Transactions } from '../../pages'
import { Home } from '../../pages/home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Notfound />,
		children: [
			{
				index: '/Dashboard',
				element: <Dashboard />,
			},
			{
				path: '/Dashboard',
				element: <Dashboard />,
			},
			{
				path: '/Transactions',
				element: <Transactions />,
			},
		],
	},
])

export const Router = () => {
	return <RouterProvider router={router} />
}
