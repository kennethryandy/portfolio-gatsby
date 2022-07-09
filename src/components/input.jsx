import React, { memo, forwardRef } from 'react';
import TextField from '@mui/material/TextField';

const Input = (props, ref) => {

	return (
		<TextField {...props} ref={ref} />
	)
}

export default memo(forwardRef(Input));