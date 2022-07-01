import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const IntroductionText = styled(Typography)(({ theme }) => ({
	...theme.typography.navLink,
	fontSize: 16,
	color: theme.palette.secondary.main,
	marginBottom: "1rem"
}));

export const HeroButton = styled(Button)(({ theme }) => ({
	fontSize: "1rem",
	marginRight: theme.spacing(4),
	marginTop: theme.spacing(3),
	padding: `12px ${theme.spacing(4)}`,
	[theme.breakpoints.down("sm")]: {
		fontSize: 14,
		marginTop: theme.spacing(2),
		marginRight: theme.spacing(2),
		padding: `12px ${theme.spacing(2)}`
	}
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
	lineHeight: 1,
	color: theme.palette.neutral.dark,
	fontSize: "2.6rem",
	cursor: 'default',
	"& span": {
		display: 'inline-block',
		transition: `color 250ms ${theme.transitions.easing.easeInOut}`,
		"&.white-text": {
			color: "#ffffff"
		},
		"&:hover": {
			color: theme.palette.secondary.main
		}
	}
}));