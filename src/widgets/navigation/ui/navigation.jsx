import { NavLink } from "react-router-dom"

export const Navigation = () => {
	return (
		<div className="Navigations">
			<ul>
				<li><NavLink to="/Dashboard" >Dashboard</NavLink></li>
				<li><NavLink to="/Transactions" >Transactions</NavLink></li>
			</ul>
		</div>
	)
}