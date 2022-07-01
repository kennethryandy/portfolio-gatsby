import React from 'react'
import { Link } from 'gatsby';
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// Styled components
import { Brand, StyledAppBar, NavLinks } from './headerStyled';


const Header = () => {
	return (
		<StyledAppBar position="fixed">
			<Container maxWidth="xl">
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Brand>
						<Typography component={Link} to="/">
							<svg width="36" height="36" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="37" y="1" width="36" height="36" rx="3" transform="rotate(90 37 1)" stroke="#64FFDA" strokeWidth="2" />
								<path d="M11.4914 24.6842C11.4445 24.6842 11.4211 24.657 11.4211 24.6027L11.4562 13.4142C11.4562 13.3599 11.4797 13.3327 11.5266 13.3327H13.4966C13.5435 13.3327 13.567 13.3599 13.567 13.4142V17.2796L16.3286 13.3979C16.3637 13.3544 16.4048 13.3327 16.4517 13.3327H18.4745C18.5214 13.3327 18.5331 13.3544 18.5097 13.3979L15.4667 17.8994L18.8791 24.619C18.9025 24.6625 18.8732 24.6842 18.7911 24.6842H16.6452C16.5865 24.6842 16.5514 24.6625 16.5396 24.619L14.165 19.8239L13.5494 20.721V24.6027C13.5494 24.657 13.5259 24.6842 13.479 24.6842H11.4914Z" fill="#64FFDA" />
								<path d="M19.7542 24.6842C19.6955 24.6842 19.6662 24.657 19.6662 24.6027L19.7014 13.3979C19.7014 13.3544 19.7248 13.3327 19.7717 13.3327L23.061 13.3164C23.706 13.3055 24.2923 13.4469 24.82 13.7404C25.3594 14.034 25.7874 14.4309 26.104 14.931C26.4206 15.4203 26.5789 15.964 26.5789 16.562V21.2429C26.5789 21.8735 26.4148 22.4498 26.0864 22.9717C25.7581 23.4827 25.3184 23.8905 24.7672 24.1949C24.2161 24.4994 23.5946 24.657 22.9027 24.6679L19.7542 24.6842ZM21.8121 22.6781H22.9027C23.3366 22.6781 23.7001 22.5368 23.9933 22.2541C24.2982 21.9714 24.4506 21.6343 24.4506 21.2429V16.5457C24.4506 16.1978 24.3099 15.8987 24.0284 15.6487C23.7587 15.3877 23.4363 15.2627 23.061 15.2735L21.8297 15.2898L21.8121 22.6781Z" fill="#64FFDA" />
							</svg>
						</Typography>
					</Brand>
					<Box sx={{ flexGrow: 1 }} />
					<NavLinks>
						<li className="nav-link">
							<Link to="/about">About</Link>
						</li>
						<li className="nav-link">
							<Link to="/skills">Skills</Link>
						</li>
						<li className="nav-link">
							<Link to="/work">Works</Link>
						</li>
						<li className="nav-link">
							<Link to="/contact">Contact</Link>
						</li>
						<li className="nav-link">
							<Button variant="outlined" color="secondary">Resume</Button>
						</li>
					</NavLinks>
				</Box>
			</Container>
		</StyledAppBar>
	)
}

export default Header