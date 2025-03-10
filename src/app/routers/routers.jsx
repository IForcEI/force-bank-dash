import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from '../../pages/Dashboard/ui/Dashboard'
import {
	Accounts,
	CreditCards,
	Home,
	Investments,
	Loans,
	MyPrivileges,
	Notfound,
	Services,
	Setting,
	Transactions,
} from '../../pages/index'

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
				element: <Transactions />,
			},
			{
				path: '/Accounts',
				element: <Accounts />,
			},
			{
				path: '/Investments',
				element: <Investments />,
			},
			{
				path: '/CreditCards',
				element: <CreditCards />,
			},
			{
				path: '/Loans',
				element: <Loans />,
			},
			{
				path: '/Services',
				element: <Services />,
			},
			{
				path: '/MyPrivileges',
				element: <MyPrivileges />,
			},
			{
				path: '/Setting',
				element: <Setting />,
			},
		],
	},
])

export const Router = () => {
	return <RouterProvider router={router} />
}
