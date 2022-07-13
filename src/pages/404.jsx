import { Typography } from "@mui/material"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Box from "@mui/material/Box"
import { styled } from '@mui/material/styles';

const AppbarSpacer = styled('div')(({ theme }) => ({
	minHeight: theme.mixins.toolbar.minHeight + 36
}));

const NotFoundPage = () => (
	<Layout>
		<AppbarSpacer />
		<Seo title="404 | Kenneth Ryan Dy" />
		<Box sx={{
			minHeight: "80vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
		}}>
			<Typography variant="h1" color="secondary">404 NOT FOUND!</Typography>
			<Typography>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
		</Box>
	</Layout>
)

export default NotFoundPage
