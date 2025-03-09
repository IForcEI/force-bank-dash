import { NavLink } from 'react-router-dom'
import './NavigationLink.css'

export const NavigationLink = ({ icon, iconAlt, to, title }) => {
	return (
		<li className='navigation__list'>
			<img
				src={'/img/navigation-icon/' + icon}
				alt={iconAlt}
				className='navigation__image-link'
			/>
			<NavLink className='navigation__link' to={to}>
				{title}
			</NavLink>
		</li>
	)
}
