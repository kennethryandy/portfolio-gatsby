import React from "react"
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import "./layout.css";
// Components
import Header from "./Header/header"
import Footer from "./Footer/footer";
import FloatingNav from "./Footer/FloatingNav/floatingNav";

const StyledContainer = styled(Container)(({ theme }) => ({
	[theme.breakpoints.down('lg')]: {
		paddingLeft: "60px",
		paddingRight: "60px"
	},
	[theme.breakpoints.down('md')]: {
		paddingLeft: "80px",
		paddingRight: "80px",
	},
	[theme.breakpoints.down('sm')]: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2)
	},
}));

const Layout = ({ children }) => {

	return (
		<>
			<Header />
			<FloatingNav />
			<StyledContainer maxWidth="lg" component="main">
				{children}
			</StyledContainer>
			<Footer />
		</>
	)
}

export default Layout
