import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MuiDialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition (props, ref) {
	return <SlideStyled direction="down" ref={ref} {...props} />;
});


const SlideStyled = styled(Slide)`
	animation: fade 225ms cubic-bezier(0, 0, 0.2, 1);
`;


const DialogHeader = styled('div')`
	width: 100%;
	text-align: center;
`;

const DialogIcon = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.secondary.dark,
	borderRadius: '50%',
	position: 'absolute',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '6em',
	height: '6em',
	left: '50%',
	top: '-60px',
	boxShadow: theme.shadows[2],
	transform: 'translateX(-50%)',
	"&>.MuiSvgIcon-root": {
		color: "#fff",
		width: '3em',
		height: '3em',
	}
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
	textAlign: 'center',
	[theme.breakpoints.down('md')]: {
		padding: `20px ${theme.spacing(2)}`
	}
}));


const Dialog = ({ open, handleClose }) => {
	return (
		<>
			<MuiDialog
				maxWidth="sm"
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
				keepMounted
				aria-labelledby="alert-dialogcontacttitle"
				aria-describedby="alert-dialog-description"
				sx={{
					"& .MuiPaper-root": {
						overflow: 'visible',
						position: 'relative',
						paddingX: 3
					}
				}}
			>
				<DialogHeader>
					<DialogIcon>
						<CheckIcon />
					</DialogIcon>
					<DialogTitle id="alert-contact-title" sx={{ paddingTop: "3.6em" }}>
						Awesome!
					</DialogTitle>
				</DialogHeader>
				<StyledDialogContent>
					<DialogContentText id="alert-contact-description">
						Your message has been successfully sent.
					</DialogContentText>
				</StyledDialogContent>
				<DialogActions sx={{ paddingX: 3, paddingBottom: 3 }}>
					<Button sx={{
						fontSize: '1rem',
						color: '#fff',
						backgroundColor: 'secondary.dark',
						fontFamily: 'Fira Code',
						'&:hover': {
							color: 'secondary.dark',
							backgroundColor: 'secondary.light',
						}
					}} fullWidth variant="contained" onClick={handleClose}>Ok</Button>
				</DialogActions>
			</MuiDialog>
		</>
	)
}

export default Dialog;