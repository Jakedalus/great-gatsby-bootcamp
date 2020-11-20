import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery, Link } from 'gatsby';

import blogStyles from './blog.module.scss';

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		{
			allContentfulBlogPost(
				sort: { fields: publishedDate, order: DESC }
			) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

	// const data = useStaticQuery(graphql`
	// 	{
	// 		allMarkdownRemark {
	// 			edges {
	// 				node {
	// 					frontmatter {
	// 						title
	// 						date
	// 					}
	// 					html
	// 					excerpt
	// 					timeToRead
	// 					fields {
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `);

	console.log(data);

	return (
		<Layout>
			<h1>Blog</h1>
			<p>Posts will show up here later on</p>
			<ol className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map(edge => (
					<li className={blogStyles.post}>
						<Link to={`/blog/${edge.node.slug}`}>
							<h2>{edge.node.title}</h2>
							<p>{edge.node.publishedDate}</p>
						</Link>
					</li>
				))}
			</ol>
		</Layout>
	);
};

export default BlogPage;
