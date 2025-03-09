import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import * as Pages from '/src/pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Pages.Home />,
		errorElement: <Pages.Notfound />,
		children: [
			{
				path: '/Dashboard',
				element: <Pages.Dashboard />,
			},
			{
				path: '/Transactions',
				element: <Pages.Transactions />,
			},
			{
				path: '/Accounts',
				element: <Pages.Accounts />,
			},
			{
				path: '/Investments',
				element: <Pages.Investments />,
			},
			{
				path: '/CreditCards',
				element: <Pages.CreditCards />,
			},
			{
				path: '/Loans',
				element: <Pages.Loans />,
			},
			{
				path: '/Services',
				element: <Pages.Services />,
			},
			{
				path: '/MyPrivileges',
				element: <Pages.MyPrivileges />,
			},
			{
				path: '/Setting',
				element: <Pages.Setting />,
			},
		],
	},
])

export const Router = () => {
	return <RouterProvider router={router} />
}
