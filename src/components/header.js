import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
	<header>
		<h1>Jacob A. Carpenter</h1>
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<Link to='/blog'>Blog</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
