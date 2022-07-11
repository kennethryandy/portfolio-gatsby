import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const CardItem = styled(Box)(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: 'repeat(12, 1fr)',
	gap: theme.spacing(2),
}));

export const CardItemImage = styled(Box)(({ theme }) => ({
	gridArea: '1 / 6 / -1 / -1',
	"& .card-image-container": {
		position: 'relative',
		"&>img, &>picture>img": {
			boxShadow: theme.shadows[1],
			transition: theme.transitions.create()
		},
		"&::after": {
			content: '""',
			transition: theme.transitions.create(),
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			backgroundColor: alpha(theme.palette.background.default, 0.4),
			mixBlendMode: 'hard-light'
		},
		"&:hover": {
			"&>img, &>picture>img": {
				transform: 'scale(1.02)'
			},
			"&::after": {
				backgroundColor: 'transparent',
				mixBlendMode: 'normal'
			}
		}
	},
	"&.switch": {
		gridColumn: '1 / 8'
	},
	[theme.breakpoints.down('md')]: {
		gridColumn: '1 / -1',
		"&.switch": {
			gridColumn: '1 / -1'
		}
	}
}));

export const CardItemInfo = styled(Box)(({ theme }) => ({
	zIndex: 2,
	gridArea: '1 / 1 / -1 / 7',
	"&.switch": {
		gridColumn: '7 / -1'
	},
	[theme.breakpoints.down('md')]: {
		gridColumn: '1 / -1',
		"&.switch": {
			gridColumn: '1 / -1',

		},
		backgroundColor: theme.palette.background.dark,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing(2),
		textAlign: 'center'
	}
}));

export const CardItemInfoContent = styled(Box)(({ theme }) => ({
	padding: theme.spacing(3),
	backgroundColor: theme.palette.background.default,
	boxShadow: theme.shadows[4],
	[theme.breakpoints.down('md')]: {
		backgroundColor: 'transparent',
		boxShadow: 'none',
		padding: theme.spacing(1)
	}
}));

export const CardItemTech = styled('ul')(({ theme }) => ({
	listStyleType: 'none',
	display: 'flex',
	alignItems: 'center',
	columnGap: theme.spacing(2),
	margin: `${theme.spacing(2)} 0`,
	padding: 0,
	position: 'relative',
	zIndex: 2,
	flexWrap: 'wrap',
	[theme.breakpoints.down('md')]: {
		justifyContent: 'center !important',
		"&>li>span": {
			fontSize: '12px',
		}
	}
}));

export const CardLinks = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(2),

	"& a": {
		textDecoration: 'none',
		color: theme.palette.text.primary,
		transition: theme.transitions.create(['color'], { duration: '250ms' }),
		"&:hover": {
			color: theme.palette.secondary.main
		}
	}
}));