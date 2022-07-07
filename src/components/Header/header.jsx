import React, { useRef, useState, useLayoutEffect } from 'react'
import { Link } from 'gatsby';
import { gsap, Power3 } from 'gsap';
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useScrollTrigger, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
// Styled components
import { Brand, StyledAppBar, NavLinks } from './headerStyled';
import Logo from '../Icons/logo';
import Hamburger from '../Icons/hamburger';
import MenuDrawer from '../Drawer/menu-drawer';


const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const hamburgerRef = useRef(null);
	const menuTl = useRef();

	useLayoutEffect(() => {
		menuTl.current = gsap.timeline({ paused: true });
		if (isMobile && hamburgerRef.current) {
			const hamburgerChildren = hamburgerRef.current?.children;
			menuTl.current
				.add('start')
				.to(hamburgerChildren[0], 0.200, { y: 30, transformOrigin: '50%, 50%' }, 'start')
				.to(hamburgerChildren[2], 0.200, { y: -30, transformOrigin: '50%, 50%' }, 'start')
				.to(hamburgerChildren[1], 0.200, { display: 'none' })
				.add('rotateLine')
				.to(hamburgerChildren[0], 0.350, { rotate: -225, ease: Power3.easeInOut }, 'rotateLine')
				.to(hamburgerChildren[2], 0.350, { rotate: 225, ease: Power3.easeInOut }, 'rotateLine')
		}
	}, [isMobile]);

	function handleOpenMenu () {
		menuTl.current.play();
		setOpenMenu(true)
	}

	function handleCloseMenu () {
		menuTl.current.reverse();
		setOpenMenu(false);
	}

	return (
		<>
			<StyledAppBar position="fixed" className={trigger ? openMenu ? "menu-open" : "scrolled" : openMenu ? "menu-open" : ""} elevation={trigger ? 3 : 0} >
				<Container maxWidth="xl">
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Brand>
							<Typography component={Link} to="/">
								<Logo />
							</Typography>
						</Brand>
						<Box sx={{ flexGrow: 1 }} />
						{isMobile ? (
							<IconButton onClick={openMenu ? handleCloseMenu : handleOpenMenu} disableRipple>
								<Hamburger ref={hamburgerRef} />
							</IconButton>
						) : (
							<NavLinks>
								<li className="nav-link">
									<MuiLink underline="hover" component={Link} activeClassName="active" to="/about">About</MuiLink>
								</li>
								<li className="nav-link">
									<MuiLink underline="hover" component={Link} activeClassName="active" to="/skills">Skills</MuiLink>
								</li>
								<li className="nav-link">
									<MuiLink underline="hover" component={Link} activeClassName="active" to="/work">Work</MuiLink>
								</li>
								<li className="nav-link">
									<MuiLink underline="hover" component={Link} activeClassName="active" to="/contact">Contact</MuiLink>
								</li>
								<li className="nav-link">
									<Button variant="outlined" color="secondary">Resume</Button>
								</li>
							</NavLinks>
						)}
					</Box>
				</Container>
			</StyledAppBar>
			<MenuDrawer open={openMenu} onClose={handleCloseMenu} onOpen={handleOpenMenu} />
		</>
	)
}

export default Header