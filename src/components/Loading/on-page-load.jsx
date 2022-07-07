import React, { useRef, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { gsap, Back } from 'gsap';
import Box from '@mui/material/Box';
import { styled, darken } from '@mui/material/styles';
import Logo from '../Icons/logo';

const PageLoadContainer = styled(Box)(({ theme }) => ({
	minHeight: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: darken(theme.palette.background.default, .2)
}));

const OnPageLoad = ({ setPageLoad }) => {
	const logoRef = useRef(null);

	useLayoutEffect(() => {
		if (!logoRef.current) return;
		const logoRefChild = logoRef.current.children;
		gsap.timeline({ defaults: { ease: Back.easeIn.config(1) } })
			.fromTo(logoRefChild[0], { strokeDasharray: 40, strokeDashoffset: 120 }, { strokeDashoffset: 0, strokeDasharray: 140, duration: 2.8 })
			.from([logoRefChild[1], logoRefChild[2]], { fill: "transparent", stagger: .2 })
			.to(logoRef.current, { scale: 0, opacity: 0 })
			.eventCallback("onComplete", function () {
				setPageLoad(false);
			});
	});

	return (
		<>
			<Helmet bodyAttributes={{ class: `page-preload` }} />
			<PageLoadContainer>
				<Logo
					ref={logoRef}
					parentProps={{
						width: "60",
						height: "60"
					}}
				/>
			</PageLoadContainer>
		</>
	)
}

export default OnPageLoad