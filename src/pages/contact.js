import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const ContactPage = () => (
	<div>
		<Header />
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
		<Footer />
	</div>
);

export default ContactPage;
