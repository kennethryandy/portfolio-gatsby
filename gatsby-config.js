module.exports = {
	siteMetadata: {
		title: `Web Developer`,
		description: `Kenneth Ryan Dy is a web developer specializing in building exceptional digital experiences.`,
		author: `@kennethryandy`,
		siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-theme-material-ui`,
			options: {
				webFontsConfig: {
					fonts: {
						google: [
							{
								family: 'Fira Code',
								variants: ["200", "300", "400", "500", "600", "700"]
							}
						]
					}
				}
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/assets/data`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-transformer-json`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `KennethRyanDy`,
				short_name: `KennethRyanDy`,
				start_url: `/`,
				background_color: `#0A1929`,
				theme_color: "#64FFDA",
				display: `minimal-ui`,
				icon: `src/assets/images/KD-icon.png`
			},
		}
	],
}
