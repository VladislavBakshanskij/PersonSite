import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

/**
 * Component for header on my site 
 * Navigation by pages on my site
 */
export default function Header() {
	return (
		<header className="shadow border-radius-down">
			<nav className="navbar navbar-expand-lg navbar-light">
				<NavLink className="navbar-brand" to="/">Vladislav <em>Bakshanskij</em></NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink exact to="/" activeClassName="active" className="nav-link">Главная страница</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/contact" activeClassName="active" className="nav-link">Контакты</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
