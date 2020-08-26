import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
	    <nav>
	    	List navigation on 2 pages:
	    		- <NavLink to="/" activeClassName="active" >Main page</NavLink>
	    		- <NavLink to="/contact" activeClassName="active">Contact</NavLink>
	    </nav>
	    Hello world from Header! 
	</header>
    );
}
