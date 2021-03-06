import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => (
	<Layout>
		<Head title={'Contact'} />
		<h1>Contact Me</h1>
		<p>jacquedalus@gmail.com</p>
		<p>jacob-carpenter.com</p>
		<a
			href='https://www.twitter.com/jakedalus'
			target='_blank'
			rel='noreferrer noopener'
		>
			@jakedalus
		</a>
	</Layout>
);

export default ContactPage;
