import React from 'react';
import About from '../components/About/about';
import Layout from '../components/layout';
import Seo from "../components/seo"
import { styled } from '@mui/material/styles';

const Section = styled('section')`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-bottom: 80px;
`;

const AppbarSpacer = styled('div')(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.down('md')]: {
		display: 'block',
		marginTop: 36,
		minHeight: theme.mixins.toolbar.minHeight + 36,
	}
}))


const AboutPage = () => {
	return (
		<Layout>
			<Seo title="Home" />
			<AppbarSpacer />
			<Section>
				<About />
			</Section>
		</Layout>
	)
}

export default AboutPage