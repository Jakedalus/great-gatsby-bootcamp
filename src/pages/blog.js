import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

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
			<ol>
				{data.allMarkdownRemark.edges.map(post => (
					<li>
						<h2>{post.node.frontmatter.title}</h2>
						<p>{post.node.frontmatter.date}</p>
					</li>
				))}
			</ol>
		</Layout>
	);
};

export default BlogPage;
