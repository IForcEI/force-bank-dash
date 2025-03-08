import { Link } from "react-router-dom"

export const Notfound = () => {
	return (
		<div className="Notfound">
			<h1>404 not Found</h1>
			<Link to="/" >Home</Link>
		</div>
	)
}