import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.background.dark,
	color: theme.palette.secondary.main,
	display: "block",
	textDecoration: "none",
	transition: theme.transitions.create(),
	"&:hover": {
		transform: "scale(1.06)",
		boxShadow: theme.shadows[10]
	},
	"& .card-image-container": {
		minHeight: "200px",
		minWidth: "100%",
	}
}));
const Project = ({ project, setRefs }) => {

	return (
		<Box ref={setRefs}>
			<StyledCard component="a" href={project.url || project.srcCodeUrl} target="_blank" rel="noopener noreferrer" elevation={3}>
				<GatsbyImage className='card-image-container' image={project.imgName?.childImageSharp.gatsbyImageData} alt={project.title} />
				<CardContent>
					<Typography variant="h6" textAlign="center" sx={{ fontWeight: "500" }}>
						{project.title}
					</Typography>
				</CardContent>
			</StyledCard>
		</Box>
	)
}

export default Project