import { NavLink } from 'react-router-dom'
import './navigation.css'

export const Navigation = () => {
	return (
		<div className='navigation'>
			<div className='navigation__logo'>
				<h1 className='navigation__logo-title'>BankDash.</h1>
			</div>
			<ul className='navigation__item'>
				<li className='navigation__list'>
					<img
						src='/img/navigation-icon/Dashboard.svg'
						alt='Dashboard'
						className='navigation__image-link'
					/>
					<NavLink className='navigation__link' to='/Dashboard'>
						Dashboard
					</NavLink>
				</li>
				<li className='navigation__list'>
					<img
						src='/img/navigation-icon/Transactions.svg'
						alt='Transactions'
						className='navigation__image-link'
					/>
					<NavLink className='navigation__link' to='/Transactions'>
						Transactions
					</NavLink>
				</li>
				<li className='navigation__list'>
					<img
						src='/img/navigation-icon/Accounts.svg'
						alt='Accounts'
						className='navigation__image-link'
					/>
					<NavLink className='navigation__link' to='/Accounts'>
						Accounts
					</NavLink>
				</li>
				<li className='navigation__list'>
					<img
						src='/img/navigation-icon/Investments.svg'
						alt='Investments'
						className='navigation__image-link'
					/>
					<NavLink className='navigation__link' to='/Investments'>
						Investments
					</NavLink>
				</li>
				<li className='navigation__list'>
					<img
						src='/img/navigation-icon/Credit-Cards.svg'
						alt='Credit Cards'
						className='navigation__image-link'
					/>
					<NavLink className='navigation__link' to='/Credit-Cards'>
						Credit Cards
					</NavLink>
				</li>
				<li className='navigation__list'>
					<img
						src='/img/navigation-icon/Loans.svg'
						alt='Loans'
						className='navigation__image-link'
					/>
					<NavLink className='navigation__link' to='/Loans'>
						Loans
					</NavLink>
				</li>
				<li className='navigation__list'>
					<img
						src='/img/navigation-icon/Services.svg'
						alt='Services'
						className='navigation__image-link'
					/>
					<NavLink className='navigation__link' to='/Services'>
						Services
					</NavLink>
				</li>
				<li className='navigation__list'>
					<img
						src='/img/navigation-icon/My-Privileges.svg'
						alt='My Privileges'
						className='navigation__image-link'
					/>
					<NavLink className='navigation__link' to='/My-Privileges'>
						My Privileges
					</NavLink>
				</li>
				<li className='navigation__list'>
					<img
						src='/img/navigation-icon/Setting.svg'
						alt='Setting'
						className='navigation__image-link'
					/>
					<NavLink className='navigation__link' to='/Setting'>
						Setting
					</NavLink>
				</li>
			</ul>
		</div>
	)
}
