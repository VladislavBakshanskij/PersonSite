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
export default class App extends React.Component {
	constructor(props) {
		super(props);
		const isPhone = window.innerWidth <= 600;
		this.state = {
			isPhone: isPhone
		};
	}

	onCheckPhone() {
		const isPhone = window.innerWidth <= 600;

		if (isPhone !== this.state.isPhone) {
			this.setState({ isPhone: isPhone });
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => this.onCheckPhone(), 1500);
	}

	componentWillMount() {
		this.onCheckPhone();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route path="/contact" component={() => <Contact contactLinks={Config.SOCIALLINKS} />} />
					<Route path="/project/:projectName/" component={Project} />
					<Route path="/projects/" component={() => <ProjectList />} />
					<Route exact path="/" component={() => <Main isPhone={this.state.isPhone} />} />
					<Route component={() => <NotFound />} />
				</Switch>
				<Footer socialsLinks={Config.SOCIALLINKS} email={Config.EMAIL} />
			</Router>
		);
	}
}

