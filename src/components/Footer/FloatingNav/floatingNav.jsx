import React, { useRef, useLayoutEffect } from 'react';
import { gsap, Back } from 'gsap';
import useMedia from '../../../hooks/useMedia';
import { StyledFloatingNav } from './floatingNavStyle';

const FloatingNav = () => {
	const mobile = useMedia();
	const leftNavRef = useRef(null);
	const rightNavRef = useRef(null);

	useLayoutEffect(() => {
		gsap.timeline({ defaults: { ease: Back.easeInOut } })
			.from([leftNavRef.current, rightNavRef.current], { y: 16, opacity: 0, delay: 1.6 });
	}, [mobile]);

	return (
		<>
			<StyledFloatingNav ref={leftNavRef} className="left">
				<ul>
					<li><a href="https://www.instagram.com/kendyment21/" target="_blank" rel="noopener noreferrer"><span className="icon-instagram" aria-label="icon instagram"></span></a></li>
					<li><a href="https://www.facebook.com/Slickwit21/" target="_blank" rel="noopener noreferrer"><span className="icon-facebook" aria-label="icon facebook"></span></a></li>
					<li><a href="https://www.linkedin.com/in/kenneth-ryan-dy-593709147/" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin" aria-label="icon linkedin"></span></a></li>
					<li><a href="https://github.com/kennethryandy" target="_blank" rel="noopener noreferrer"><span className="icon-github" aria-label="icon github"></span></a></li>
				</ul>
			</StyledFloatingNav>
			<StyledFloatingNav ref={rightNavRef} className="right">
				<ul>
					<li><a href="mailto:dykennethryan@gmail.com" className="floating-nav__email">dykennethryan@gmail.com</a></li>
				</ul>
			</StyledFloatingNav>
		</>
	)
}

export default FloatingNav