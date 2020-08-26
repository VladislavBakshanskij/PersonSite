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

export default function App() {
  return (
    <Router>
	  <Header />
	  <Switch>
	  	<Route path="/contact" component={() => <Contact />} />
	  	<Route expact path="/" component={() => <Content />} />
	  </Switch>
	  <Footer />
    </Router>
  );
}

