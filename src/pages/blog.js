import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery, Link } from 'gatsby';

import blogStyles from './blog.module.scss';

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						html
						excerpt
						timeToRead
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	console.log(data);

	return (
		<Layout>
			<h1>Blog</h1>
			<p>Posts will show up here later on</p>
			<ol className={blogStyles.posts}>
				{data.allMarkdownRemark.edges.map(edge => (
					<li className={blogStyles.post}>
						<Link to={`/blog/${edge.node.fields.slug}`}>
							<h2>{edge.node.frontmatter.title}</h2>
							<p>{edge.node.frontmatter.date}</p>
						</Link>
					</li>
				))}
			</ol>
		</Layout>
	);
};

export default BlogPage;
