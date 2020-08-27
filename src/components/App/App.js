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

/**
 * Main component
 * Render all Site
 */
export default function App() {
	const socialsLinks = [
		{
			id: 1,
			link: "",
			name: "LinkedIn"
		}, {
			id: 3,
			link: "",
			name: "Twitter"
		}, {
			id: 4,
			link: "",
			name: "Instagram"
		}, {
			id: 5,
			link: "",
			name: "Vk"
		}, {
			id: 6,
			link: "",
			name: "Telegram"
		}, {
			id: 7,
			link: "",
			name: "GitHub"
		}
	];

	return (
		<Router>
			<Header />
				<Switch>
					<Route path="/contact" component={() => <Contact />} />
					<Route expact path="/" component={() => <Content />} />
				</Switch>
			<Footer socialsLinks={socialsLinks} email="vbakshanskij2000@gmail.com" />
		</Router>
	);
}

