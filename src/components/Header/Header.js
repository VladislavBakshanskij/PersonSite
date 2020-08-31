import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import List from '../List/List';

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
					{<List
						classNameList="navbar-nav"
						classNameItem="nav-item"

						data={[{
								id: 0,
								to: "/",
								exact: true,
								text: "Главная страница"
							}, {
								id: 1,
								to: "/contact",
								exact: false,
								text: "Контакты"
							}, {
								id: 2,
								to: "/projects",
								exact: false,
								text: "Проекты"
							}
						].map((item) => {
							return (
								<NavLink key={item.id.toString()} exact={item.exact} to={item.to} activeClassName="active"
										 className="nav-link">
									{item.text}
								</NavLink>
							);
						})}
					/>}
				</div>
			</nav>
		</header>
	);
}
