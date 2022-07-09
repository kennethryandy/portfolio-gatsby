import React, { useLayoutEffect, useRef, useMemo } from 'react';
import { gsap, Power2 } from 'gsap';
import useMedia from '../../../hooks/useMedia';
import { GatsbyImage } from 'gatsby-plugin-image';
// MUI
import { CardItem, CardItemImage, CardItemInfo, CardItemInfoContent, CardItemTech, CardLinks } from './cardStyled';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const Card = ({ project, pos }) => {
	const cardItemRef = useRef(null)
	const q = useMemo(() => gsap.utils.selector(cardItemRef), [cardItemRef])
	const mobile = useMedia();

	useLayoutEffect(() => {
		gsap.timeline({ defaults: { ease: Power2.easeInOut }, scrollTrigger: { trigger: cardItemRef.current, start: `${mobile ? "+=120" : "-=80"} 70%` } })
			.add('start')
			.from(q('.card-image'), { opacity: 0, y: 16, }, 'start')
			.from([q('.card-info>span'), q('.card-info>a'), q('.card-info-content')], { opacity: 0, y: 16, stagger: 0.1 }, 'start')
			.from(q('.card-info-tech>li'), { opacity: 0, y: 16, stagger: 0.1 }, 'start')
			.from(q('.card-info-links>a'), { opacity: 0, y: 16, stagger: 0.1 }, 'start')
	}, [mobile, q]);

	return (
		<CardItem ref={cardItemRef}>
			<CardItemImage className={pos ? 'card-image switch' : 'card-image'}>
				<a href={project.url} target="_blank" rel="noopener noreferrer">
					<GatsbyImage className='card-image-container' image={project.imgName.childImageSharp.gatsbyImageData} alt={project.title} />
				</a>
			</CardItemImage>
			<CardItemInfo sx={{ textAlign: pos ? 'right' : 'left' }} className={pos ? 'card-info switch' : 'card-info'}>
				<Typography variant="caption" color="secondary">Featured</Typography>
				<Typography gutterBottom component="a" href={project.url} target="_blank" rel="noopener noreferrer" variant="h4" sx={{ color: "neutral.main", fontWeight: 500, display: 'block', textDecoration: 'none', "&:hover": { color: "secondary.main" } }}>{project.title}</Typography>
				<CardItemInfoContent sx={{ zIndex: 2, position: 'relative' }} className="card-info-content">
					<Typography variant="body2" sx={{ fontSize: '1rem' }}>{project.desc}</Typography>
				</CardItemInfoContent>
				<CardItemTech className="card-info-tech" sx={{ justifyContent: pos ? 'flex-end' : 'flex-start' }}>
					{project.techs.map((tech, idx) => (
						<li key={idx}><Typography variant="caption" sx={{ fontSize: '0.825rem' }}>{tech}</Typography></li>
					))}
				</CardItemTech>
				<CardLinks className="card-info-links" sx={{ justifyContent: pos ? 'flex-end' : 'flex-start' }}>
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