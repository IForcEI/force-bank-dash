import { Header, Navigation } from "../../../widgets"
import { Outlet } from "react-router-dom"

export const Home = () => {
	return (
		<div className="Home">
			<Header />
			<Navigation />
			<Outlet />
		</div>
	)
}