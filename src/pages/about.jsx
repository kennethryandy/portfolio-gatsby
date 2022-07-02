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
`;

const AboutPage = () => {
	return (
		<Layout>
			<Seo title="Home" />
			<Section>
				<About />
			</Section>
		</Layout>
	)
}

export default AboutPage