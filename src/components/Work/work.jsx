import React, { useLayoutEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import useToggleRubberBand from '../../hooks/useToggleRubberBand';
import useMedia from '../../hooks/useMedia';
import { useStaticQuery, graphql } from 'gatsby';
// MUI
import Typography from '@mui/material/Typography';
import { WorkContainer } from './workStyled';
import Card from './Card/card';

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
				imgName {
					childImageSharp {
						gatsbyImageData(
							layout: FULL_WIDTH
							placeholder: BLURRED
						)
					}
				}
			}
		}
	}
`;

const Work = () => {
	const toggleRubberBand = useToggleRubberBand();
	const headerRef = useRef(null)
	const mobile = useMedia();
	const { allProjectsJson: { nodes: projects } } = useStaticQuery(query);

	useLayoutEffect(() => {
		if (headerRef.current) {
			gsap.timeline({ ease: Power2.easeInOut, scrollTrigger: { trigger: headerRef.current, start: `${mobile ? "top" : "-=80"} 80%` } }).from(headerRef.current, {
				y: 16,
				opacity: 0,
				onStart: () => {
					headerRef.current?.classList.add('animate');
				},
				onComplete: () => {
					headerRef.current?.classList.remove('animate');
				}
			})
		}
	}, [mobile]);

	return (
		<>
			<Typography ref={headerRef} variant="h1" component="h2" color="secondary" sx={{ cursor: 'default', marginBottom: 5 }}>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">S</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">o</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">m</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">T</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">h</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">i</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">n</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">g</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">s</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">I</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">’</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">v</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">B</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">u</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">i</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">l</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">t</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">.</span>
			</Typography>
			<WorkContainer>
				{projects.map((project, idx) => (<Card key={project.id} project={project} pos={idx % 2 === 0} />))}
			</WorkContainer>
		</>
	)
}

export default Work;