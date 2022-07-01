import { createTheme } from "@mui/material/styles";
import darkScrollbar from '@mui/material/darkScrollbar';
// Calibre font
import calibreThinWoff2 from "../assets/fonts/calibre/Calibre-Thin.woff2";
import calibreLightWoff2 from "../assets/fonts/calibre/Calibre-Light.woff2";
import calibreRegularWoff2 from "../assets/fonts/calibre/Calibre-Regular.woff2";
import calibreSemiboldWoff2 from "../assets/fonts/calibre/Calibre-Semibold.woff2";
import calibreBoldWoff2 from "../assets/fonts/calibre/Calibre-Bold.woff2";

const theme = createTheme({
	palette: {
		background: { default: "#0A1929" },
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
			fontWeight: 500
		},
		body1: {
			fontSize: "1.25rem"
		},
		navLink: {
			fontFamily: ['Fira Code', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',].join(','),
			fontSize: 14,
			fontWeight: 400
		}
	},
	zIndex: {
		mainLoading: 1600
	},
	components: {
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
		MuiCssBaseline: {
			styleOverrides: {
				root: `
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Thin'), url(${calibreThinWoff2}) format('woff2');
						font-style: normal;
						font-weight: 100;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
					
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Light'), url(${calibreLightWoff2}) format('woff2');
						font-style: normal;
						font-weight: 300;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
					
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Regular'), url(${calibreRegularWoff2}) format('woff2');
						font-style: normal;
						font-weight: 400;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
					
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Semibold'), url(${calibreSemiboldWoff2}) format('woff2');
						font-style: normal;
						font-weight: 500;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
					
					@font-face {
						font-family: 'Calibre';
						src: local('Calibre'), local('Calibre-Bold'), url(${calibreBoldWoff2}) format('woff2');
						font-style: normal;
						font-weight: 600;
						unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
					}
				`,
				body: {
					...darkScrollbar({
						track: '#0A1929',
						thumb: '#3b4753',
						active: '#626b75'
					}),
					posistion: 'relative',
					"&::-webkit-scrollbar": {
						width: "12px"
					}
				}
			}
		}
	}
});

export default theme;