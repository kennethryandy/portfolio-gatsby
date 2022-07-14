import React, { useLayoutEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import useArrayRefs from '../../../hooks/useArrayRefs';
import Input from '../../input';
// MUI
import Box from '@mui/material/Box';
import { FormStyled, ContactButton } from './formStyled';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '../../dialog';

const inputStyled = {
	"& .MuiInputLabel-root:not(.Mui-focused)": { color: "text.primary" },
	"& .MuiInput-root::before": {
		borderColor: "text.primary"
	}
}

const Form = ({ tl, delay }) => {
	const [refs, setRefs] = useArrayRefs();
	const [openDia, setOpenDia] = useState(false);
	const [openBD, setOpenBD] = useState(false);

	useLayoutEffect(() => {
		if (tl) {
			tl.from(refs.current, { y: 16, opacity: 0, stagger: 0.1, delay: delay ? delay : 0 }, 'start-contact')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tl, refs]);

	function handleSubmit (e) {
		e.preventDefault();
		setOpenBD(true);
		emailjs.sendForm('service_wfa0yft', 'template_cew8hbg', e.currentTarget, 'user_lwR1O0HcFGB2BCnsNBfVw')
			.then((result) => {
				handleCloseBD();
				console.log(result.text);
				setOpenDia(true);
				e.target.reset();
			}, (error) => {
				handleCloseBD();
				e.target.reset();
				console.log(error.text);
			});
	}

	function handleCloseDialog () {
		setOpenDia(false)
	}

	function handleCloseBD () {
		setOpenBD(false);
	}

	return (
		<>
			<FormStyled onSubmit={handleSubmit} autoComplete="off">
				<Box sx={{ display: "flex", gap: 2 }}>
					<Input ref={setRefs} margin="dense" sx={inputStyled} label="Name" name="name" required variant="standard" color="secondary" fullWidth />
					<Input ref={setRefs} margin="dense" sx={inputStyled} label="Email" name="email" required type="email" variant="standard" color="secondary" fullWidth />
				</Box>
				<Box>
					<Input ref={setRefs} margin="dense" sx={inputStyled} label="Subject" name="subject" required variant="standard" color="secondary" fullWidth />
				</Box>
				<Box>
					<Input ref={setRefs} margin="dense" sx={inputStyled} label="Message" name="message" required variant="standard" color="secondary" fullWidth multiline minRows={3} />
				</Box>
				<Box>
					<ContactButton ref={setRefs} variant="outlined" type="submit" color="secondary">Hit me up!</ContactButton>
				</Box>
			</FormStyled>
			<Dialog open={openDia} handleClose={handleCloseDialog} />
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={openBD}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</>
	)
}

export default Form;