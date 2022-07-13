import React, { useLayoutEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IntroductionText, HeroButton, HeaderText, BrMobile } from './heroStyles';
import useToggleRubberBand from '../../hooks/useToggleRubberBand';
import useArrayRefs from '../../hooks/useArrayRefs';

const Hero = () => {
	const toggleRubberBand = useToggleRubberBand();
	const [refs, setRefs] = useArrayRefs()

	useLayoutEffect(() => {
		if (refs.current.length > 0) {
			gsap.timeline({ ease: Power2.easeInOut, }).from(
				refs.current,
				{
					y: 16,
					opacity: 0,
					stagger: 0.1,
					delay: .8,
					onStart: () => {
						refs.current[1]?.classList.add('animate');
					},
					onComplete: () => {
						refs.current[1]?.classList.remove('animate');
					}
				}
			)
		}
	}, [refs])

	return (
		<>
			<IntroductionText component="h1" variant="caption" ref={setRefs}>Hi, my name is</IntroductionText>
			<HeaderText variant="h1" component="h2" ref={setRefs}>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">K</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">e</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">n</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">n</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">e</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">t</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">h</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">R</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">y</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">a</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">n</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">D</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">y</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true" className="white-text">.</span>
				<br />
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">I</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">b</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">u</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">i</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">l</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">d</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">t</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">h</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">i</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">n</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">g</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">s</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">f</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">o</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">r</span>
				&nbsp;
				<BrMobile />
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">t</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">h</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">w</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">b</span>
			</HeaderText>
			<Typography sx={{ maxWidth: 540 }} ref={setRefs}>
				{"I’m a web developer specializing in building exceptional digital experiences."}
			</Typography>
			<Box ref={setRefs}>
				<HeroButton variant="outlined" color="secondary">View Resume</HeroButton>
				<HeroButton variant="outlined" color="secondary">Contact Me!</HeroButton>
			</Box>
		</>
	)
}

export default Hero