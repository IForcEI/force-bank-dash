import { Link } from 'react-router-dom'
import './header.css'

export const Header = () => {
	return (
		<div className='header'>
			<h2 className='header__page-name'>Header</h2>
			<div className='header__data'>
				<div className='header__item'>
					<img
						className='header__serch-icon'
						src='/src/shared/assets/img/header-ico/magnifying-glass 1.png'
						alt=''
					/>
					<input
						className='header__serch'
						type='text'
						placeholder='Search for something'
					/>
				</div>
				<Link className='header__btn-settings' to='/Seting'>
					<img
						src='/src/shared/assets/img/header-ico/settings 1.png'
						alt='Settings'
					/>
				</Link>
				<Link className='header__btn-notifications' to='/notifications'>
					<img
						src='/src/shared/assets/img/header-ico/002-notification-1.png'
						alt='Notification'
					/>
				</Link>
				<img
					className='header__user-image'
					src='src/shared/assets/img/user-image/MaskGroup.png'
					alt='User Img'
					width='60'
					height='60'
				/>
			</div>
		</div>
	)
}
