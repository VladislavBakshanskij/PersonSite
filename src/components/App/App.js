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
import Config from '../Config/Config';

/**
 * Main component
 * Render all component for Site
 */
export default function App() {
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
			<Footer socialsLinks={Config.SOCIALLINKS} email={Config.EMAIL}/>
		</Router>
	);
}

