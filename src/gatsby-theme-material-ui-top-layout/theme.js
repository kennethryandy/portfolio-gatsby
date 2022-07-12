import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import darkScrollbar from '@mui/material/darkScrollbar';
// Calibre font
import calibreThinWoff2 from "../assets/fonts/calibre/Calibre-Thin.woff2";
import calibreLightWoff2 from "../assets/fonts/calibre/Calibre-Light.woff2";
import calibreRegularWoff2 from "../assets/fonts/calibre/Calibre-Regular.woff2";
import calibreSemiboldWoff2 from "../assets/fonts/calibre/Calibre-Semibold.woff2";
import calibreBoldWoff2 from "../assets/fonts/calibre/Calibre-Bold.woff2";

const theme = createTheme({
	palette: {
		background: { default: "#0A1929", dark: "#07111c" },
		mode: "light",
		secondary: {
			main: '#64FFDA'
		},
		text: {
			primary: "#B2BAC2"
		},
		neutral: {
			dark: "#8F929F",
			main: "#EAEDF0"
		}
	},
	typography: {
		fontFamily: [
			'Calibre',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),
		h1: {
			fontSize: "5rem",
			fontWeight: 500,
			"& span": {
				display: 'inline-block'
			}
		},
		body1: {
			fontSize: "1.25rem",
			lineHeight: 1.3
		},
		navLink: {
			fontFamily: ['Fira Code', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',].join(','),
			fontSize: 14,
			fontWeight: 400
		},
		caption: {
			fontFamily: ['Fira Code', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',].join(','),
			fontSize: 14,
			fontWeight: 400
		}
	},
	zIndex: {
		mainLoading: 1600
	},
	components: {
		MuiTooltip: {
			fontFamily: ['Fira Code', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',].join(','),
			fontSize: "0.5825rem"
		},
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.variant === "outlined" && {
						fontFamily: ['Fira Code', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',].join(','),
						textTransform: 'capitalize',
						fontWeight: 400
					})
				})
			}
		},
		MuiLink: {
			styleOverrides: {
				underlineHover: {
					position: 'relative',
					"&::after": {
						content: '""',
						position: 'absolute',
						left: 0,
						bottom: 0,
						width: 0,
						height: '1px',
						display: 'inline-block',
						background: '#64FFDA',
						transition: 'width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
					},
					"&:hover": {
						textDecoration: "none",
						"&::after": {
							width: '100%'
						}
					}
				}
			}
		},
		MuiTypography: {
			styleOverrides: {
				gutterBottom: {
					marginBottom: '1rem'
				}
			}
		},
		MuiCssBaseline: {
			styleOverrides: {
				root: `
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Thin'), url(${calibreThinWoff2}) format('woff2');
						font-style: normal;
						font-weight: 100;
						font-display: block;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
					
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Light'), url(${calibreLightWoff2}) format('woff2');
						font-style: normal;
						font-weight: 300;
						font-display: block;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
					
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Regular'), url(${calibreRegularWoff2}) format('woff2');
						font-style: normal;
						font-weight: 400;
						font-display: block;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
					
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Semibold'), url(${calibreSemiboldWoff2}) format('woff2');
						font-style: normal;
						font-weight: 500;
						font-display: block;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
					
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Bold'), url(${calibreBoldWoff2}) format('woff2');
						font-style: normal;
						font-weight: 600;
						font-display: block;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
				`,
				html: {
					scrollBehavior: 'smooth'
				},
				body: {
					posistion: 'relative',
					overflowX: 'hidden',
					...darkScrollbar({
						track: '#0A1929',
						thumb: '#3b4753',
						active: '#626b75'
					}),
					"&::-webkit-scrollbar": {
						width: "12px"
					}
				}
			}
		}
	}
});

export default responsiveFontSizes(theme);