import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Head from '../components/head';

// export const query = graphql`
// 	query($slug: String) {
// 		markdownRemark(fields: { slug: { eq: $slug } }) {
// 			frontmatter {
// 				title
// 				date
// 			}
// 			html
// 		}
// 	}
// `;

export const query = graphql`
	query($slug: String) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			slug
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				raw
			}
		}
	}
`;

// console.log(query);

const Blog = props => {
	const doc = JSON.parse(
		props.data.contentfulBlogPost.body.raw
	);

	console.log('doc', doc);
	console.log(
		'documentToReactComponents',
		documentToReactComponents
	);

	const options = {
		// renderNode : {
		// 	['embedded-asset-block'] : node => {
		// 		console.log(node);
		// 		return (
		// 			<img
		// 				src={node.data.target.fields.file.url}
		// 				alt={node.data.target.fields.title}
		// 			/>
		// 		);
		// 	}
		// }
	};

	return (
		<Layout>
			<Head title={props.data.contentfulBlogPost.title} />
			<h1>{props.data.contentfulBlogPost.title}</h1>
			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			{documentToReactComponents(doc, options)}
		</Layout>
	);
};

export default Blog;
