import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/index.css';

const Layout = ({ children }) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);

export default Layout;
