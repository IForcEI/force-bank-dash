import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header, Navigation } from '../../../widgets'
import './Home.css'

export const Home = () => {
	const router = useNavigate()

	// Xуки работают с компанентами
	// Разобрать! все что ниже

	useEffect(() => {
		router('/Accounts', { replace: true })

		return () => {}
	}, [router])

	return (
		<div className='home'>
			<Navigation />
			<div className='home__inner'>
				<div className='home__header'>
					<Header />
				</div>
				<div className='home__pages'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
