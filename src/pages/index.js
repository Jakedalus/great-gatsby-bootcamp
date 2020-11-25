import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/head';

const IndexPage = () => (
	<Layout>
		<Head title={'Home'} />
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
	</Layout>
);

export default IndexPage;
