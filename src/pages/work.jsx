import React, { useEffect, useState, useRef } from 'react';
import useToggleRubberBand from '../hooks/useToggleRubberBand';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../components/layout';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useStaticQuery, graphql } from 'gatsby';
import Project from '../components/Work/Project/projects';
import useArrayRefs from '../hooks/useArrayRefs';
import Plugins from '../components/Work/Plugins/plugins';
import useMedia from '../hooks/useMedia';
import Seo from '../components/seo';

const Section = styled('section')`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-top: 24px;
	margin-bottom: 80px;
`;

const query = graphql`
	query allProject {
		allProjectsJson {
			nodes {
				id
				title
				desc
				url
				techs
				srcCodeUrl
				type
				imgName {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED, height: 200)
					}
				}
			}
		}
	}
`;


const AppbarSpacer = styled('div')(({ theme }) => ({
	minHeight: theme.mixins.toolbar.minHeight + 36
}));

const WorkPage = () => {
	const toggleRubberBand = useToggleRubberBand();
	const [loading, setLoading] = useState(true);
	const { allProjectsJson: { nodes: projects } } = useStaticQuery(query);
	const [refs, setRefs] = useArrayRefs();
	const [pluginRefs, setPluginRefs] = useArrayRefs();
	const pluginHeaderRef = useRef(null);
	const headerRef = useRef(null);
	const mobile = useMedia();

	useEffect(() => {
		if (projects.length > 0 && !loading) {
			gsap.timeline({ defaults: { ease: Power2.easeInOut, delay: .8 } })
				.add('start')
				.from(refs.current, { y: 16, opacity: 0, stagger: .1 }, 'start')
				.from(headerRef.current, {
					y: 16,
					opacity: 0,
					onStart: () => {
						headerRef.current?.classList.add('animate');
					},
					onComplete: () => {
						headerRef.current?.classList.remove('animate');
					}
				}, 'start');

			gsap.from(pluginHeaderRef.current, {
				scrollTrigger: {
					trigger: pluginHeaderRef.current
				},
				y: 16,
				opacity: 0,
				onStart: () => {
					pluginHeaderRef.current?.classList.add('animate');
				},
				onComplete: () => {
					pluginHeaderRef.current?.classList.remove('animate');
				}
			});

			ScrollTrigger.batch(pluginRefs.current, {
				interval: .2,
				start: "top 80%",
				batchMax: mobile ? 2 : 3,
				onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, stagger: .2 })
			})
		}
	}, [projects, refs, pluginRefs, loading, mobile]);

	return (
		<Layout setLoading={setLoading}>
			<Seo title="Works | Kenneth Ryan Dy" />
			<AppbarSpacer />
			<Section>
				<Typography ref={headerRef} variant="h1" color="secondary" sx={{ cursor: 'default', marginBottom: 1 }}>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">P</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">r</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">o</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">j</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">c</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">t</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">s</span>
				</Typography>
				<Grid container spacing={3}>
					{projects.length > 0 && projects.filter(p => p.type === 'project' || p.type === 'featured').map(project => (
						<Grid key={project.id} item xs={12} sm={6} md={3} sx={{ marginY: { md: 2, sm: 0 } }}>
							<Project project={project} setRefs={setRefs} />
						</Grid>
					))}
				</Grid>
				<Box width="100%" mt={12} mb={3}>
					<Typography ref={pluginHeaderRef} variant="h3" textAlign="center" fontWeight="bold" sx={{ fontSize: "1.8rem", cursor: 'default', "&>span": { display: "inline-block", "&:hover": { color: "secondary.main" } } }}>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">O</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">t</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">h</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">r</span>
						&nbsp;
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">N</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">o</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">t</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">w</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">o</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">r</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">t</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">h</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">y</span>
						&nbsp;
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">P</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">r</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">o</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">j</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">c</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">t</span>
						<span onMouseEnter={toggleRubberBand} aria-hidden="true">s</span>
					</Typography>
				</Box>
				<Grid container spacing={3}>
					{projects.length > 0 && projects.filter(p => p.type === 'plugin').map((project) => (
						<Grid key={project.id} item xs={12} sm={6} md={4} sx={{ marginY: { md: 2, sm: 0 } }}>
							<Plugins project={project} setRef={setPluginRefs} />
						</Grid>
					))}
				</Grid>
			</Section>
		</Layout>
	)
}

export default WorkPage