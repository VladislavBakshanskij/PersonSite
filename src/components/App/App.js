import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Config from '../Config/Config';
import Project from '../Project/Project';
import ProjectList from '../ProjectList/ProjectList';

/**
 * Main component
 * Render all component for Site
 */
export default function App() {
	const myPhoto = `${process.env.PUBLIC_URL}/static/1.jpeg`;
	var isPhone = window.innerWidth <= 600;

	return (
		<Router>
			<Header />
				<Switch>
					<Route path="/contact" component={() => <Contact />} />
					<Route path="/project/:projectName/" component={Project}/>
					<Route path="/projects/" component={() => <ProjectList />}/>
					<Route exact path="/" component={() => <Main imgSrc={myPhoto} isPhone={isPhone} />} />
					<Route component={() => <NotFound />} />
				</Switch>
			<Footer socialsLinks={Config.SOCIALLINKS} email={Config.EMAIL}/>
		</Router>
	);
}

