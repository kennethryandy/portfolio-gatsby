import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const FormStyled = styled('form')(({ theme }) => ({}));


export const ContactButton = styled(Button)(({ theme }) => ({
	fontSize: "1rem",
	marginRight: theme.spacing(4),
	marginTop: theme.spacing(3),
	padding: `8px ${theme.spacing(3)}`,
	[theme.breakpoints.down("sm")]: {
		fontSize: 14,
		marginTop: theme.spacing(2),
		marginRight: theme.spacing(2),
		padding: `8px ${theme.spacing(2)}`
	}
}));