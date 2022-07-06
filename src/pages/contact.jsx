import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Form from '../components/Contact/Form/form';
import useToggleRubberBand from '../hooks/useToggleRubberBand';
import Layout from '../components/layout';
import Seo from '../components/seo';
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const Section = styled('section')(({ theme }) => ({
	minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight + (48 + 36)}px)`,
	display: "flex",
	flexDirection: "column",
	alignItems: "flexStart",
	justifyContent: "center",
	[theme.breakpoints.down('md')]: {
		marginBottom: theme.spacing(5)
	}
}));

const AppbarSpacer = styled('div')(({ theme }) => ({
	...theme.mixins.toolbar,
	[theme.breakpoints.down('md')]: {
		minHeight: theme.mixins.toolbar.minHeight + 36,
	}
}))


const Contact = () => {
	const toggleRubberBand = useToggleRubberBand();

	return (
		<Layout>
			<Seo title="Home" />
			<AppbarSpacer />
			<Section>
				<Grid container spacing={4}>
					<Grid item md={6}>
						<Typography variant="h1" gutterBottom color="secondary" sx={{ cursor: 'default' }}>
							<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">P</span>
							<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">i</span>
							<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">n</span>
							<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">g</span>
							&nbsp;
							<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">m</span>
							<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">e</span>
							<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">!</span>
						</Typography>
						<Typography gutterBottom>Want to say "Hey!"? Got something you'd like to ask? New project or opportunity? Want to hire me? Ping me!</Typography>
						<Typography gutterBottom>Alternatively, shoot me an email at <MuiLink href="mailto:dykennethryan@gmail.com" target="_blank" rel="noopener noreferrer" color="secondary" underline="hover">dykennethryan@gmail.com</MuiLink></Typography>
					</Grid>
					<Grid item md={6}>
						<Form />
					</Grid>
				</Grid>
			</Section>
		</Layout>
	)
}

export default Contact