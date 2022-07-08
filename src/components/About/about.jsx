import React, { useLayoutEffect, useRef, useMemo } from 'react'
import { Link } from 'gatsby';
import { Cloud } from 'react-icon-cloud';
import { gsap } from 'gsap';
import useToggleRubberBand from '../../hooks/useToggleRubberBand';
// MUI
import { styled } from '@mui/material/styles';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useIcons from '../../hooks/useIcons';
import useMedia from '../../hooks/useMedia';


const InfoWrapper = styled('div')`
	& p {
		text-align: justify;
	}
`;

const InfoTech = styled('ul')(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
	columnGap: theme.spacing(2),
	padding: `0px 0px 0px ${theme.spacing(2)}`,
	margin: 0,
	overflow: 'hidden',
	"& li": {
		...theme.typography.navLink,
		position: 'relative',
		marginBottom: theme.spacing(1),
		paddingLeft: theme.spacing(1),
		"&>span": {
			overflowY: 'hidden',
			display: 'inline-block'
		},
		"&::marker": {
			content: '"▹"',
			color: theme.palette.secondary.main
		}
	}
}));

const CloudWrapper = styled('div')(({ theme }) => ({
	position: 'absolute',
	left: '120px',
	top: '-80px',
	height: '100%',
	width: '100%',
	"& canvas": {
		minWidth: '70vh',
	},
	[theme.breakpoints.down('md')]: {
		paddingTop: theme.spacing(5),
		position: 'initial',
		"& canvas": {
			minWidth: '100%',
		}
	}
}));

const slugs = [
	'amazonaws',
	'angular',
	'androidstudio',
	'typescript',
	'vercel',
	'visualstudiocode',
	'javascript',
	'react',
	'materialui',
	'gatsby',
	'vue',
	'laravel',
	'wordpress',
	'docker',
	'git',
	'github',
	'figma',
	'nextdotjs',
	'nodedotjs',
	'chartdotjs',
	'electron',
	'express',
	'google',
	'heroku',
	'php',
	'woocommerce',
	'postgresql',
	'sass',
	'mongodb',
	'jquery',
	'firebase',
	'filezilla',
	'django'
]

const About = () => {
	const icons = useIcons(slugs);
	const toggleRubberBand = useToggleRubberBand();
	const mobile = useMedia();
	const cloudRef = useRef(null);
	const headerRef = useRef(null);
	const infoTextRef = useRef(null);
	const q = useMemo(() => gsap.utils.selector(infoTextRef), [infoTextRef]);


	useLayoutEffect(() => {
		gsap.timeline({ scrollTrigger: { trigger: headerRef.current, start: `-=${mobile ? 50 : 100} 80%` } })
			.from([headerRef.current, cloudRef.current, q('.info-wrapper>p'), q('.info-tech>li')],
				{
					y: 14,
					opacity: 0,
					stagger: 0.2,
					onStart: () => {
						headerRef.current.classList.add('animate');
					},
					onComplete: () => {
						headerRef.current.classList.remove('animate');
					}
				});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mobile]);

	return (
		<>
			<Typography ref={headerRef} variant="h1" component="h2" color="secondary" gutterBottom sx={{ cursor: 'default' }}>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">M</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">e</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">,</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">M</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">y</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">s</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">e</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">l</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">f</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">a</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">n</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">d</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">I</span>
			</Typography>
			<Grid container spacing={2}>
				<Grid item md={6}>
					<div ref={infoTextRef}>
						<InfoWrapper className="info-wrapper">
							<Typography variant="body1" gutterBottom>Hi, I'm Kenneth a web developer from the Philippines with more than 1 year experience in the field. My interest in web development started way back 2015 when I decided to make a blog about a game using HTML and CSS — turns out making website is my passion.</Typography>
							<Typography variant="body1" gutterBottom>For over a decade I've been harnessing my skills in a vast spectrum of <MuiLink color="secondary" underline="hover" component={Link} to="/skills">web technologies</MuiLink> that let me gather a significant amount of various experience. Working for companies and individuals around the globe I met and learnt from amazing and ambitious people.</Typography>
							<Typography variant="body1" gutterBottom>Here are a few technologies I've been working with recently:</Typography>
						</InfoWrapper>
						<InfoTech className="info-tech">
							<li><span>React<span style={{ margin: "0px 3px" }}>/</span>Gatsby</span></li>
							<li><span>WordPress</span></li>
							<li><span>Javascript (ES6+)</span></li>
							<li><span>MongoDB</span></li>
							<li><span>NodeJS</span></li>
							<li><span>TypeScript</span></li>
						</InfoTech>
					</div>
				</Grid>
				<Grid item md={6} position="relative" ref={cloudRef}>
					{icons &&
						<CloudWrapper>
							<Cloud
								containerProps={{
									style: {
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%"
									}
								}}
								options={{
									clickToFront: 500,
									depth: 1,
									imageScale: 2,
									initial: [0.1, -0.1],
									outlineColour: "#0000",
									reverse: true,
									tooltip: "native",
									tooltipDelay: 0,
									wheelZoom: false
								}}
							>
								{icons}
							</Cloud>
						</CloudWrapper>
					}
				</Grid>
			</Grid>
		</>
	)
}

export default About