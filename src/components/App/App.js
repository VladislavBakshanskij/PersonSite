import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

/**
 * Main component
 * Render all component for Site
 */
export default function App() {
	const socialsLinks = [
		{
			id: 1,
			link: "https://www.linkedin.com/in/vladislav-bakshanskij-02aa161b3",
			name: "LinkedIn"
		}, {
			id: 3,
			link: "https://twitter.com/vladbakshanskij",
			name: "Twitter"
		}, {
			id: 4,
			link: "https://www.instagram.com/__vlad_bk__/",
			name: "Instagram"
		}, {
			id: 5,
			link: "https://vk.com/swap101",
			name: "Vk"
		}, {
			id: 6,
			link: "https://t.me/vladBakshanskij",
			name: "Telegram"
		}, {
			id: 7,
			link: "https://github.com/vladislavBakshanskij",
			name: "GitHub"
		}
	];

	const myPhoto = `${process.env.PUBLIC_URL}/static/1.jpeg`;

	if (window.innerWidth <= 600) {
		var isPhone = true;
	}

	return (
		<Router>
			<Header />
				<Switch>
					<Route path="/contact" component={() => <Contact />} />
					<Route exact path="/" component={() => <Content imgSrc={myPhoto} isPhone={isPhone} />} />
					<Route component={() => <NotFound />} />
				</Switch>
			<Footer socialsLinks={socialsLinks} email="vbakshanskij2000@gmail.com" />
		</Router>
	);
}

