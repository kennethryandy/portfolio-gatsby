import React, { useState, useLayoutEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
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
	const [loading, setLoading] = useState(true);
	const [tl, setTl] = useState(null);
	const containerRef = useRef(null);
	const contentRef = useRef(null);
	const toggleRubberBand = useToggleRubberBand();

	useLayoutEffect(() => {
		if (loading) return;
		if (contentRef.current) {
			const timeline = gsap.timeline({
				defaults: { ease: Power2.easeInOut }
			}).add('start-contact')
			setTl(timeline);
			timeline.from(contentRef.current.children,
				{
					y: 16,
					opacity: 0,
					stagger: 0.1,
					delay: .6,
					onStart: () => {
						contentRef.current?.children[0].classList.add('animate')
					},
					onComplete: () => {
						contentRef.current?.children[0].classList.remove('animate')
					}
				}, 'start-contact');
		}
	}, [loading]);

	return (
		<Layout loading={loading} setLoading={setLoading}>
			<Seo title="Home" />
			<AppbarSpacer />
			<Section>
				<Grid container spacing={4} ref={containerRef}>
					<Grid item md={6} ref={contentRef}>
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
						<Typography gutterBottom>Want to say "Hey!"? Got something you'd like to ask? New project or opportunity?</Typography>
						<Typography gutterBottom>Get your space suit ready and tell me your ideas to develop your dream application.</Typography>
						<Typography gutterBottom>Alternatively, shoot me an email at <MuiLink href="mailto:dykennethryan@gmail.com" target="_blank" rel="noopener noreferrer" color="secondary" underline="hover">dykennethryan@gmail.com</MuiLink></Typography>
					</Grid>
					<Grid item md={6}>
						<Form tl={tl} delay={.6} />
					</Grid>
				</Grid>
			</Section>
		</Layout>
	)
}

export default Contact