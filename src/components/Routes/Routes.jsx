import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Config from '../Config/Config';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Project from '../Project/Project';
import ProjectList from '../ProjectList/ProjectList';

/**
 * Routing for all site
 * @param {isPhone} props
 */
export default ({isPhone}) => {
	return (
		<Switch>
			<Route path="/contact" component={() => <Contact contactLinks={Config.SOCIALLINKS} />} />
			<Route path="/project/:projectName/" component={Project} />
			<Route path="/projects/" component={() => <ProjectList />} />
			<Route exact path="/" component={() => <Main isPhone={isPhone} />} />
			<Route component={() => <NotFound />} />
		</Switch>
	);
}