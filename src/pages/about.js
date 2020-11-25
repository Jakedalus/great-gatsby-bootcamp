import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/head';

const AboutPage = () => (
	<Layout>
		<Head title={'About'} />
		<h1>About</h1>
		<p>I was born and now I do things</p>
		<Link to='/contact'>Contact me!</Link>
	</Layout>
);

export default AboutPage;
