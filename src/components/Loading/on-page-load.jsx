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
	backgroundColor: darken(theme.palette.background.default, .2),
	"& .logo-icon": {
		opacity: 0,
		"&__line": {
			strokeDasharray: 35,
			strokeDashoffset: 125
		},
		"&__letter": {
			opacity: 0
		}
	}
}));

const OnPageLoad = ({ setPageLoad, setLoading }) => {
	const logoRef = useRef(null);

	useLayoutEffect(() => {
		if (!logoRef.current) return;
		const logoRefChild = logoRef.current.children;
		gsap.timeline({ defaults: { ease: Back.easeIn.config(1) } })
			.to(logoRef.current, { opacity: 1 })
			.to(logoRefChild[0], { strokeDashoffset: 0, strokeDasharray: 140, duration: 1.2 })
			.to([logoRefChild[1], logoRefChild[2]], { opacity: 1, stagger: .02 })
			.to(logoRef.current, { scale: 0, opacity: 0 })
			.eventCallback("onComplete", function () {
				setPageLoad(false);
				if (setLoading) {
					setLoading(false);
				}
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setPageLoad]);

	return (
		<>
			<Helmet bodyAttributes={{ class: `page-preload` }} />
			<PageLoadContainer>
				<Logo
					ref={logoRef}
					parentProps={{
						className: "logo-icon",
						width: "80",
						height: "80"
					}}
				/>
			</PageLoadContainer>
		</>
	)
}

export default OnPageLoad