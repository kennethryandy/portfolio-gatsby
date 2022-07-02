import { styled } from '@mui/material/styles';

export const StyledFloatingNav = styled('div')(({ theme }) => ({
	position: 'fixed',
	bottom: 0,
	"&.left": {
		left: theme.spacing(5),
	},
	"&.right": {
		right: theme.spacing(5),
	},
	"& ul": {
		padding: 0,
		margin: 0,
		listStyleType: 'none',
		"& li": {
			marginBottom: theme.spacing(2),
			"&>a": {
				...theme.typography.navLink,
				textDecoration: 'none',
				color: 'inherit',
				height: '20px',
				display: 'inline-block',
				transition: `all 250ms ${theme.transitions.easing.easeInOut}`,
				"&>span": {
					fontSize: "20px"
				},
				"&.floating-nav__email": {
					writingMode: 'vertical-lr',
					height: 'auto'
				},
				"&:hover": {
					color: theme.palette.secondary.main,
					transform: 'translateY(-4px)'
				}
			}
		},
		"&::after": {
			content: '""',
			height: "90px",
			width: "1px",
			backgroundColor: theme.palette.text.primary,
			display: 'block',
			margin: '0 auto'
		}
	},
	[theme.breakpoints.down('lg')]: {
		"&.left": {
			left: theme.spacing(3),
		},
		"&.right": {
			right: theme.spacing(3),
		},
	},
	[theme.breakpoints.down('md')]: {
		display: 'none'
	}
}));