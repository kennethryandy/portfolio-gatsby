import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useToggleRubberBand from '../../hooks/useToggleRubberBand';
import Form from './Form/form';

const HomeContact = () => {
	const toggleRubberBand = useToggleRubberBand();
	return (
		<Grid container>
			<Grid item md={6}>
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
				<Form />
			</Grid>
		</Grid>
	)
}

export default HomeContact