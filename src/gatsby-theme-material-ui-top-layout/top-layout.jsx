import React from "react";
import { responsiveFontSizes } from '@mui/material/styles';

export default function TopLayout ({ children, theme }) {
	console.log(theme);
	return (
		<ThemeTopLayout theme={responsiveFontSizes(theme)}>{children}</ThemeTopLayout>
	);
}