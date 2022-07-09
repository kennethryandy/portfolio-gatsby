import React, { useState, useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useToggleRubberBand from '../../hooks/useToggleRubberBand';
import Form from './Form/form';

const HomeContact = () => {
	const toggleRubberBand = useToggleRubberBand();
	const [tl, setTl] = useState(null);
	const containerRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		const timeline = gsap.timeline({
			defaults: { ease: Power2.easeInOut },
			scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
		}).add('start-contact');
		setTl(timeline);
		timeline.from(contentRef.current.children,
			{
				y: 16,
				opacity: 0,
				stagger: 0.1,
				onStart: () => {
					contentRef.current.children[0].classList.add('animate')
				},
				onComplete: () => {
					contentRef.current.children[0].classList.remove('animate')
				}
			}, 'start-contact');
	}, []);

	return (
		<Grid container ref={containerRef}>
			<Grid item md={6} ref={contentRef}>
				<Typography variant="h1" gutterBottom component="h2" color="secondary" sx={{ cursor: 'default' }}>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">G</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">e</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">t</span>
					&nbsp;
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">i</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">n</span>
					&nbsp;
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">t</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">o</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">u</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">c</span>
					<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">h</span>
				</Typography>
				<Typography>Want to work together or have any questions?</Typography>
				<Typography>Have a question or want to work together?</Typography>
			</Grid>
			<Grid item md={6}>
				<Form tl={tl} />
			</Grid>
		</Grid>
	)
}

export default HomeContact