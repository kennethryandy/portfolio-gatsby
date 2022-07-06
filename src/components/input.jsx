import React, { memo } from 'react';
import TextField from '@mui/material/TextField';

const Input = (props) => {

	return (
		<TextField {...props} />
	)
}

export default memo(Input);