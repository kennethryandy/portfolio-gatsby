import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
// MUI
import { CardItem, CardItemImage, CardItemInfo, CardItemInfoContent, CardItemTech, CardLinks } from './cardStyled';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const Card = ({ project, pos }) => {

	return (
		<CardItem>
			<CardItemImage className={pos ? 'switch' : ''}>
				<a href={project.url} target="_blank" rel="noopener noreferrer">
					<GatsbyImage className='card-image-container' image={project.imgName.childImageSharp.gatsbyImageData} alt={project.title} />
				</a>
			</CardItemImage>
			<CardItemInfo sx={{ textAlign: pos ? 'right' : 'left' }} className={pos ? 'switch' : ''}>
				<Typography variant="caption" color="secondary">Featured</Typography>
				<Typography gutterBottom component="a" href={project.url} target="_blank" rel="noopener noreferrer" variant="h4" sx={{ color: "neutral.main", fontWeight: 500, display: 'block', textDecoration: 'none', "&:hover": { color: "secondary.main" } }}>{project.title}</Typography>
				<CardItemInfoContent sx={{ zIndex: 2, position: 'relative' }}>
					<Typography variant="body2" sx={{ fontSize: '1rem' }}>{project.desc}</Typography>
				</CardItemInfoContent>
				<CardItemTech sx={{ justifyContent: pos ? 'flex-end' : 'flex-start' }}>
					{project.techs.map((tech, idx) => (
						<li key={idx}><Typography variant="caption" sx={{ fontSize: '0.825rem' }}>{tech}</Typography></li>
					))}
				</CardItemTech>
				<CardLinks sx={{ justifyContent: pos ? 'flex-end' : 'flex-start' }}>
					<Tooltip title="Source Code" arrow>
						<a href={project.srcCodeUrl} target="_blank" rel="noopener noreferrer">
							<span className="icon-github" aria-label="github" />
						</a>
					</Tooltip>
					<Tooltip title="External Link" arrow>
						<a href={project.url} target="_blank" rel="noopener noreferrer">
							<span className="icon-external-link" aria-label="external link" />
						</a>
					</Tooltip>
				</CardLinks>
			</CardItemInfo>
		</CardItem>
	)
}

export default Card