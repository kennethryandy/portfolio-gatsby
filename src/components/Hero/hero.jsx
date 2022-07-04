import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IntroductionText, HeroButton, HeaderText } from './heroStyles';
import useToggleRubberBand from '../../hooks/useToggleRubberBand';

const Hero = () => {
	const toggleRubberBand = useToggleRubberBand();

	return (
		<>
			<IntroductionText component="h1" variant="caption">Hi, my name is</IntroductionText>
			<HeaderText variant="h1" component="h2">
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
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">t</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">h</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
				&nbsp;
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">w</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">e</span>
				<span onMouseEnter={toggleRubberBand} aria-hidden="true">b</span>
			</HeaderText>
			<Typography sx={{ maxWidth: 540 }}>
				{"I’m a software engineer specializing in building exceptional digital experiences."}
			</Typography>
			<Box>
				<HeroButton variant="outlined" color="secondary">View Resume</HeroButton>
				<HeroButton variant="outlined" color="secondary">Contact Me!</HeroButton>
			</Box>
		</>
	)
}

export default Hero