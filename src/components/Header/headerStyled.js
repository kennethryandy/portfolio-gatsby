import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export const Brand = styled(Box)(({ theme }) => ({
	display: 'flex',
	"& a": {
		height: 40,
		width: 40,
		display: 'inline-block'
	}
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	minHeight: 100,
	justifyContent: 'center'
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
