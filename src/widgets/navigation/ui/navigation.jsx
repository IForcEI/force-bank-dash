import { NavigationLink } from '../../../features/NavigationLink'
import './navigation.css'

export const Navigation = () => {
	return (
		<div className='navigation'>
			<div className='navigation__logo'>
				<h1 className='navigation__logo-title'>BankDash.</h1>
			</div>
			<ul className='navigation__item'>
				<NavigationLink
					icon={'Dashboard.svg'}
					iconAlt={'Dashboard'}
					to={'/Dashboard'}
					title={'Dashboard'}
				/>
				<NavigationLink
					icon={'Transactions.svg'}
					iconAlt={'Transactions'}
					to={'/Transactions'}
					title={'Transactions'}
				/>
				<NavigationLink
					icon={'Accounts.svg'}
					iconAlt={'Accounts'}
					to={'/Accounts'}
					title={'Accounts'}
				/>
				<NavigationLink
					icon={'Investments.svg'}
					iconAlt={'Investments'}
					to={'/Investments'}
					title={'Investments'}
				/>
				<NavigationLink
					icon={'CreditCards.svg'}
					iconAlt={'CreditCards'}
					to={'/CreditCards'}
					title={'CreditCards'}
				/>
				<NavigationLink
					icon={'Loans.svg'}
					iconAlt={'Loans'}
					to={'/Loans'}
					title={'Loans'}
				/>
				<NavigationLink
					icon={'Services.svg'}
					iconAlt={'Services'}
					to={'/Services'}
					title={'Services'}
				/>
				<NavigationLink
					icon={'MyPrivileges.svg'}
					iconAlt={'MyPrivileges'}
					to={'/MyPrivileges'}
					title={'MyPrivileges'}
				/>
				<NavigationLink
					icon={'Setting.svg'}
					iconAlt={'Setting'}
					to={'/Setting'}
					title={'Setting'}
				/>
			</ul>
		</div>
	)
}
