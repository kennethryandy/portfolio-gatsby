import React from "react"
import Seo from "../components/seo"
import { styled } from '@mui/material/styles';
// Components
import Layout from '../components/layout';
// import Hero from "../components/Hero/Hero";

const Section = styled('section')`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<Section>
			{/* <Hero /> */}
		</Section>
		<Section />
	</Layout>
)

export default IndexPage
