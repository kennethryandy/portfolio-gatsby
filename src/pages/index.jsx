import React from "react"
import Seo from "../components/seo"
import { styled } from '@mui/material/styles';
// Components
import Layout from '../components/layout';
import Hero from "../components/Hero/hero";
import About from "../components/About/about";
import Work from "../components/Work/work";

const Section = styled('section')`
	min-height: 100vh;
`;

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<Section sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'center'
		}}>
			<Hero />
		</Section>
		<Section sx={{ marginBottom: 10 }}>
			<About />
		</Section>
		<Section>
			<Work />
		</Section>
	</Layout>
)

export default IndexPage