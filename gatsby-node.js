const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;
	// Transform the new node here and create a new node or
	// create a new node field.

	// console.log('%%%%%%%%%%');

	if (node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(
			node.fileAbsolutePath,
			'.md'
		);
		// console.log('slug:', slug);

		createNodeField({
			node,
			name  : 'slug',
			value : slug
		});
	}
};
