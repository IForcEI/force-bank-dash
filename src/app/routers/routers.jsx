import { Accounts } from '@pages/Accounts/ui/Accounts'
import { CreditCards } from '@pages/CreditCards/ui/CreditCards'
import { Home } from '@pages/Home/ui/Home'
import { Investments } from '@pages/Investments/ui/Investments'
import { Loans } from '@pages/Loans/ui/Loans'
import { MyPrivileges } from '@pages/MyPrivileges/ui/MyPrivileges'
import { Notfound } from '@pages/Notfound/ui/Notfound'
import { Services } from '@pages/Services/ui/Services'
import { Setting } from '@pages/Setting/ui/Setting'
import { Transactions } from '@pages/Transactions/ui/Transactions'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Notfound />,
		children: [
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
