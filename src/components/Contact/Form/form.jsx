import React from 'react';
import Input from '../../input';
// MUI
import Box from '@mui/material/Box';
import { FormStyled } from './formStyled';

const inputStyled = {
	"& .MuiInputLabel-root:not(.Mui-focused)": { color: "text.primary" },
	"& .MuiInput-root::before": {
		borderColor: "text.primary"
	}
}

const Form = () => {


	return (
		<FormStyled>
			<Box sx={{ display: "flex", gap: 2 }}>
				<Input margin="dense" sx={inputStyled} label="Name" variant="standard" color="secondary" fullWidth />
				<Input margin="dense" sx={inputStyled} label="Email" variant="standard" color="secondary" fullWidth />
			</Box>
			<Box>
				<Input margin="dense" sx={inputStyled} label="Subject" variant="standard" color="secondary" fullWidth />
			</Box>
			<Box>
				<Input margin="dense" sx={inputStyled} label="Message" variant="standard" color="secondary" fullWidth multiline minRows={3} />
			</Box>
		</FormStyled>
	)
}

export default Form;