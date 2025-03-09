import { Header, Navigation } from "../../../widgets"
import { Outlet } from "react-router-dom"
import "./home.css"

export const Home = () => {
	return (
		<div className="home">
			<Navigation />
			<div className="home__inner">
				<div className="home__header">
					<Header />
				</div>
				<div className="home__pages">
					<Outlet />
				</div>
			</div>
		</div>
	)
}