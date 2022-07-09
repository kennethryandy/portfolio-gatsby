import React, { useLayoutEffect } from 'react';
import useArrayRefs from '../../../hooks/useArrayRefs';
import Input from '../../input';
// MUI
import Box from '@mui/material/Box';
import { FormStyled, ContactButton } from './formStyled';

const inputStyled = {
	"& .MuiInputLabel-root:not(.Mui-focused)": { color: "text.primary" },
	"& .MuiInput-root::before": {
		borderColor: "text.primary"
	}
}

const Form = ({ tl, delay }) => {
	const [refs, setRefs] = useArrayRefs();

	useLayoutEffect(() => {
		if (tl) {
			tl.from(refs.current, { y: 16, opacity: 0, stagger: 0.1, delay: delay ? delay : 0 }, 'start-contact')
		}
	}, [tl, refs])

	return (
		<FormStyled>
			<Box sx={{ display: "flex", gap: 2 }}>
				<Input ref={setRefs} margin="dense" sx={inputStyled} label="Name" variant="standard" color="secondary" fullWidth />
				<Input ref={setRefs} margin="dense" sx={inputStyled} label="Email" variant="standard" color="secondary" fullWidth />
			</Box>
			<Box>
				<Input ref={setRefs} margin="dense" sx={inputStyled} label="Subject" variant="standard" color="secondary" fullWidth />
			</Box>
			<Box>
				<Input ref={setRefs} margin="dense" sx={inputStyled} label="Message" variant="standard" color="secondary" fullWidth multiline minRows={3} />
			</Box>
			<Box>
				<ContactButton ref={setRefs} variant="outlined" color="secondary">Hit me up!</ContactButton>
			</Box>
		</FormStyled>
	)
}

export default Form;