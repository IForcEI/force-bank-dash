import { NavLink } from "react-router-dom"
import "./navigation.css"

export const Navigation = () => {
	return (
		<div className="navigation">
			<div className="navigation__logo">
				<h1 className="navigation__logo-title">BankDash.</h1>
			</div>
			<ul className="navigation__item">
				<li className="navigation__list">
					<NavLink className="navigation__link" to="/Dashboard" >Dashboard</NavLink>
				</li>
				<li className="navigation__list">
					<NavLink className="navigation__link" to="/Transactions" >Transactions</NavLink>
				</li>
				<li className="navigation__list">
					<NavLink className="navigation__link" to="/Accounts" >Accounts</NavLink>
				</li>
				<li className="navigation__list">
					<NavLink className="navigation__link" to="/Investments" >Investments</NavLink>
				</li>
				<li className="navigation__list">
					<NavLink className="navigation__link" to="/Credit-Cards" >Credit Cards</NavLink>
				</li>
				<li className="navigation__list">
					<NavLink className="navigation__link" to="/Loans" >Loans</NavLink>
				</li>
				<li className="navigation__list">
					<NavLink className="navigation__link" to="/Services" >Services</NavLink>
				</li>
				<li className="navigation__list">
					<NavLink className="navigation__link" to="/My-Privileges" >My Privileges</NavLink>
				</li>
				<li className="navigation__list">
					<NavLink className="navigation__link" to="/Setting" >Setting</NavLink>
				</li>
			</ul>
		</div>
	)
}