import React from 'react';
// MUI
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Box)(({ theme }) => ({
	opacity: 0,
	transform: "translate(0px, 16px)",
	position: "relative",
	backgroundColor: theme.palette.background.dark,
	color: "inherit",
	textDecoration: "none",
	padding: `${theme.spacing(4)} ${theme.spacing(3)}`,
	display: 'flex',
	flexDirection: 'column',
	height: "100%",
	cursor: "pointer",
	borderRaduis: "4px",
	boxShadow: theme.shadows[3],
	transition: theme.transitions.create(['color', 'transform'], { duration: 250 }),

	"& .plugin-icon": {
		position: "relative",
		zIndex: 2,
		"&>.links>a": {
			textDecoration: 'none',
			transition: theme.transitions.create(['color'], { duration: 250 }),
			color: "inherit",
			"&:hover": {
				color: theme.palette.secondary.main
			}
		}
	},

	"& .plugin-header>.plugin-title": {
		transition: theme.transitions.create(['color'], { duration: 250 }),
		textDecoration: "none",
		color: "inherit",
		"&::before": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			zIndex: 1
		}
	},

	"&:hover": {
		transform: `translateY(-${theme.spacing(1)}) !important`,
		"& .plugin-header>.plugin-title": {
			color: theme.palette.secondary.main
		}
	}
}));

const TechList = styled('ul')(({ theme }) => ({
	margin: 0,
	padding: 0,
	listStyleType: 'none',
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(2),
	"&>li": {
		...theme.typography.navLink,
		fontSize: '12px',
		color: '#7c8287'
	}
}));

const Plugins = ({ project, setRef }) => {

	return (
		<StyledContainer ref={setRef}>
			<Box className="plugin-header">
				<Box display="flex" justifyContent="space-between" alignItems="center" mb={4} className="plugin-icon">
					<FolderOutlinedIcon sx={{ fontSize: "3rem" }} color="secondary" />
					<Box display="flex" gap={1} className="links">
						{!!project.srcCodeUrl && (
							<Tooltip title="Github" arrow>
								<a href={project.srcCodeUrl} rel="noopener noreferrer" target="_blank">
									<span className="icon-github" aria-label="icon github"></span>
								</a>
							</Tooltip>
						)}
						{!!project.url && (
							<Tooltip title="Demo" arrow>
								<a href={project.url} rel="noopener noreferrer" target="_blank">
									<span className="icon-external-link" aria-label="icon external link"></span>
								</a>
							</Tooltip>
						)}
					</Box>
				</Box>
				<Typography className="plugin-title" variant="h5" component="a" target="_blank" href={project.url || project.srcCodeUrl} rel="noopener noreferrer" display="inline-block" fontWeight={500} gutterBottom>{project.title}</Typography>
			</Box>
			<Box className="plugin-body">
				<Typography sx={{ fontSize: "1rem !important" }}>{project.desc}</Typography>
			</Box>
			<Box flexGrow={1} />
			<Box className="plugin-techs" mt={3}>
				<TechList>
					{project.techs.map((tech, idx) => <li key={idx}>{tech}</li>)}
				</TechList>
			</Box>
		</StyledContainer>
	)
}

export default Plugins