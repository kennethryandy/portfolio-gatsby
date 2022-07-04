import React from 'react'
import { FooterCopyright, FooterIcons } from './footerStyle';

const Footer = () => {
	return (
		<footer style={{ marginTop: 24, marginBottom: 24 }}>
			<FooterIcons sx={{ display: { sm: 'block', md: 'none' } }}>
				<ul>
					<li><a href="https://www.instagram.com/kendyment21/" target="_blank" rel="noopener noreferrer"><span className="icon-instagram" aria-label="icon instagram"></span></a></li>
					<li><a href="https://www.facebook.com/Slickwit21/" target="_blank" rel="noopener noreferrer"><span className="icon-facebook" aria-label="icon facebook"></span></a></li>
					<li><a href="https://www.linkedin.com/in/kenneth-ryan-dy-593709147/" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin" aria-label="icon linkedin"></span></a></li>
					<li><a href="https://github.com/kennethryandy" target="_blank" rel="noopener noreferrer"><span className="icon-github" aria-label="icon github"></span></a></li>
				</ul>
			</FooterIcons>
			<FooterCopyright>
				<a href="https://github.com/kennethryandy" target="_blank" rel="noopener noreferrer">
					Handcrafted by me <br /> Kenneth Ryan Dy &copy; {new Date().getFullYear()}
				</a>
			</FooterCopyright>
		</footer>
	)
}

export default Footer