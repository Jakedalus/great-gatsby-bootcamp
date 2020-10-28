import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const IndexPage = () => (
	<div>
		<Header />
		<h1>Hello</h1>
		<h2>
			I'm Jake, a full stack developer, living in outer
			space
		</h2>
		<p>
			Need a developer?{' '}
			<Link to='/contact'>Contact me</Link>
		</p>
		<p>
			Learn more about me! <Link to='/about'>About me</Link>
		</p>
		<Footer />
	</div>
);

export default IndexPage;
