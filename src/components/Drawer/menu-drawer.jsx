import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import MuiLink from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const SwipeableDrawerStyled = styled(SwipeableDrawer)(({ theme }) => ({
	zIndex: theme.zIndex.appBar - 1,
	"& .MuiPaper-root": {
		backgroundColor: theme.palette.background.default,
		minWidth: 'min(75vw, 400px)'
	},
	"& .MuiBackdrop-root": {
		backDropFilter: 'blur(2px)'
	}
}));

const MenuAside = styled('aside')(({ theme }) => ({
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: `${theme.spacing(5)} ${theme.spacing(10)}`
}));

export const StyledNav = styled('nav')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
}));

export const NavLinks = styled('ul')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
	listStyleType: 'none',
	padding: 0,
	width: '100%',
	"& .nav-link": {
		marginBottom: theme.spacing(2),
		overflowY: 'hidden',
		"& a": {
			...theme.typography.navLink,
			color: theme.palette.text.primary,
			textDecoration: 'none',
			transition: `color 250ms ${theme.transitions.easing.easeInOut}`,
			display: 'inline-block',
			"&:hover": {
				color: theme.palette.secondary.main
			},
			"&.active": {
				color: theme.palette.secondary.main,
				"&::after": {
					width: '100%'
				}
			}
		},
		"& .MuiButton-root": {
			...theme.typography.navLink,
		}
	},
	[theme.breakpoints.down('md')]: {
		columnGap: theme.spacing(2)
	}
}));


const MenuDrawer = ({ setRef, ...props }) => {

	return (
		<>
			<SwipeableDrawerStyled {...props} disableBackdropTransition keepMounted>
				<MenuAside>
					<StyledNav>
						<NavLinks>
							<li ref={setRef} className="nav-link">
								<MuiLink underline="hover" component={Link} activeClassName="active" to="/about">About</MuiLink>
							</li>
							<li ref={setRef} className="nav-link">
								<MuiLink underline="hover" component={Link} activeClassName="active" to="/skills">Skills</MuiLink>
							</li>
							<li ref={setRef} className="nav-link">
								<MuiLink underline="hover" component={Link} activeClassName="active" to="/work">Work</MuiLink>
							</li>
							<li ref={setRef} className="nav-link">
								<MuiLink underline="hover" component={Link} activeClassName="active" to="/contact">Contact</MuiLink>
							</li>
						</NavLinks>
						<Box sx={{ overflowY: 'hidden' }}>
							<Button ref={setRef} variant="outlined" color="secondary">Resume</Button>
						</Box>
					</StyledNav>
				</MenuAside>
			</SwipeableDrawerStyled>
		</>
	)
};

MenuDrawer.defaultProps = {
	open: false,
	anchor: 'right'
}

MenuDrawer.propTypes = {
	open: PropTypes.bool,
	anchor: PropTypes.string,
	onOpen: PropTypes.func,
	onClose: PropTypes.func
}


export default MenuDrawer;