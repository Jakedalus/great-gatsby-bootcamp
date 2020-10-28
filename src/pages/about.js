import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

const AboutPage = () => (
	<div>
		<Header />
		<h1>About</h1>
		<p>I was born and now I do things</p>
		<Link to='/contact'>Contact me!</Link>
		<Footer />
	</div>
);

export default AboutPage;
