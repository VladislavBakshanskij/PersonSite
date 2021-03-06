import React from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import Config from '../Config/Config';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routes from '../Routes/Routes';

/**
 * Main component
 * Render all component for Site
 */
export default class App extends React.Component {
	constructor(props) {
		super(props);
		const isPhone = window.innerWidth <= 600;
		this.state = {
			isPhone: isPhone,
			isLoad: false
		};
	}

	onCheckPhone() {
		const isPhone = window.innerWidth <= 600;

		if (isPhone !== this.state.isPhone) {
			this.setState({ isPhone: isPhone });
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => this.onCheckPhone(), 500);
		this.setState({ isLoad: true });
	}

	componentWillMount() {
		this.onCheckPhone();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<>
			{this.state.isLoad ? 
				<Router>
					<Header />
					<Routes isPhone={this.state.isPhone} />
					<Footer socialsLinks={Config.SOCIALLINKS} email={Config.EMAIL} />
				</Router>
				:
				<div>Loading...</div>
			}
			</>
		);
	}
}

