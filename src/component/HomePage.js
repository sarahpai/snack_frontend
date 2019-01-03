import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../src/assets/css/homepage.css'

const HomePage = () => { 
	return (
		<>
			<div className="background text-center" >
				<div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
				<header className="masthead mb-auto">
				</header>

				<main role="main" className="inner cover">
					<h1 className="cover-heading d-flex h-100 p-3 mx-auto flex-column">Fulfill your snack cravings!</h1>
						<NavLink to="/snacks" className="btn btn-lg btn-danger">Snack Time!</NavLink>
				</main>
				<footer className="mastfoot mt-auto">
					<div className="inner">
					</div>
				</footer>
				</div>
			</div>
	</>
	)
}
export default HomePage