import React, { useEffect, useState, useRef, useMemo } from 'react'
import Layout from '../components/layout';
import useIcons from '../hooks/useIcons';
import { gsap, Back } from 'gsap';
// MUI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useToggleRubberBand from '../hooks/useToggleRubberBand';
import Seo from '../components/seo';

const BrMobile = styled('br')(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		display: 'none'
	}
}));

const Section = styled('section')`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-top: 24px;
	min-height: calc(100vh - 90px);
`;

const AppbarSpacer = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		minHeight: theme.mixins.toolbar.minHeight + 36
	}
}));

const Stacks = styled(Box)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
	gap: theme.spacing(2),
	gridAutoRows: "100px",
	width: "100%",
	textAlign: 'center',
	"&>.stack": {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		"&>.stack-title": {
			...theme.typography.navLink,
			marginTop: theme.spacing(1),
			fontSize: 12
		}
	},
	[theme.breakpoints.down('md')]: {
		gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
		gap: theme.spacing(1),
		"& .stack>a>img": {
			width: 24,
			height: 24
		}
	}
}));

const slugs = [
	'html5',
	'css3',
	'react',
	'sass',
	'visualstudiocode',
	'javascript',
	'materialui',
	'wordpress',
	'github',
	'figma',
	'nodedotjs',
	'express',
	'google',
	'php',
	'mongodb',
	'jquery',
	'firebase',
	'filezilla',
]

const Skills = () => {
	const stackRef = useRef(null);
	const headerRef = useRef(null);
	const [loading, setLoading] = useState(true);
	const icons = useIcons(slugs, true);
	const toggleRubberBand = useToggleRubberBand();
	const q = useMemo(() => gsap.utils.selector(stackRef), [stackRef]);

	useEffect(() => {
		if (loading) return;
		gsap.timeline()
			.from(headerRef.current, {
				delay: .8,
				opacity: 0,
				y: 16,
				onStart: () => {
					headerRef.current?.classList.add('animate');
				},
				onComplete: () => {
					headerRef.current?.classList.remove('animate');
				}
			})
			.from(q('a'), {
				opacity: 0,
				x: (idx) => idx % 2 === 0 ? "+=240" : "-=240",
				ease: Back.easeInOut.config(4),
				duration: 1.2,
				stagger: {
					yoyo: true,
					amount: 0.2,
					from: "center",
					grid: "auto",
					axis: "x"
				}
			})
			.from(q('.stack-title'), { opacity: 0, y: 16 })
	}, [loading, q]);

	return (
		<Layout setLoading={setLoading}>
			<Seo title="Skills | Kenneth Ryan Dy" />
			<AppbarSpacer />
			<Section sx={{ overflow: 'hidden' }}>
				<Typography ref={headerRef} variant="h1" color="secondary" textAlign="center" sx={{ width: "100%", cursor: 'default', marginBottom: 5 }}>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">T</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">c</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">n</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">o</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">l</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">g</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">i</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">s</span>
					&nbsp;
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">I</span>
					&nbsp;
					<BrMobile />
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">m</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">a</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">i</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">n</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">l</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">y</span>
					&nbsp;
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">u</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">s</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
				</Typography>
				{icons && (
					<Stacks ref={stackRef}>
						{icons.map((icon, idx) => (
							<Box className="stack" key={idx}>
								{icon.render}
								<Typography variant="body1" className="stack-title">{icon.title}</Typography>
							</Box>
						))}
					</Stacks>
				)}
			</Section>
		</Layout>
	)
}

export default Skills