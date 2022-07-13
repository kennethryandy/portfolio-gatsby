import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const WorkContainer = styled(Box)(({ theme }) => ({
	paddingLeft: theme.spacing(4),
	paddingRight: theme.spacing(4),
	"& .card-item:not(:last-child)": {
		marginBottom: theme.spacing(20),
		[theme.breakpoints.down('md')]: {
			marginBottom: theme.spacing(10),
		}
	}
}));

export const BrMobile = styled('br')(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		display: 'none'
	}
}));