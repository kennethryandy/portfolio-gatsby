import React from "react"
import Container from '@mui/material/Container';
import "./layout.css";
// Components
import Header from "./Header/header"
import Footer from "./Footer/footer";
import FloatingNav from "./Footer/FloatingNav/floatingNav";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<FloatingNav />
			<Container maxWidth="lg" component="main" sx={{
				paddingX: {
					xl: "150px",
					md: "100px",
					sm: "50px"
				}
			}}>
				{children}
			</Container>
			<Footer />
		</>
	)
}

export default Layout
