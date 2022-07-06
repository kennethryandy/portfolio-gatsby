import { alpha, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export const Brand = styled(Box)(({ theme }) => ({
	display: 'flex',
	"& a": {
		height: 36,
		width: 36,
		display: 'inline-block'
	}
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	justifyContent: 'center',
	height: 100,
	transition: theme.transitions.create(['height', 'box-shadow'], { duration: "250ms" }),
	"&.scrolled": {
		backgroundColor: alpha(theme.palette.background.default, 0.6),
		height: 64,
		backdropFilter: "blur(10px)"
	},
	"&.menu-open": {
		backgroundColor: 'transparent',
		boxShadow: 'none',
		backdropFilter: "blur(4px)"
	}
}));


export const NavLinks = styled('ul')(({ theme }) => ({
	display: 'inline-flex',
	alignItems: 'center',
	columnGap: theme.spacing(4),
	listStyleType: 'none',
	padding: 0,
	"& .nav-link": {
		"& a": {
			...theme.typography.navLink,
			color: theme.palette.text.primary,
			textDecoration: 'none',
			transition: `color 250ms ${theme.transitions.easing.easeInOut}`,
			"&:hover": {
				color: theme.palette.secondary.main
			},
			"&.active": {
				color: theme.palette.secondary.main,
				"&::after": {
					width: '100%'
				}
			}
		},
		"& .MuiButton-root": {
			...theme.typography.navLink,
		}
	},
	[theme.breakpoints.down('md')]: {
		columnGap: theme.spacing(2)
	}
}));
