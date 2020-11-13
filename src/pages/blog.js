import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
			<ol>
				{data.allMarkdownRemark.edges.map(edge => (
					<li>
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
