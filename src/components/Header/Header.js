import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
	    <nav>
	    	List navigation on 2 pages:
	    		- <Link to="/">Main page</Link>
	    		- <Link to="/contact">Contact</Link>
	    </nav>
	    Hello world from Header! 
	</header>
    );
}
