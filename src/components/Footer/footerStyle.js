import { styled } from "@mui/material/styles";

export const FooterIcons = styled('div')`
	max-width: 270px;
	width: 100%;
	margin: 0 auto;
	color: inherit;
	& ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
		list-style-type: none;
		padding: 0;
		& li>a {
			color: inherit;
			text-decoration: none;
			font-size: 24px;
		}
	}
`;
export const FooterCopyright = styled('div')(({ theme }) => ({
	...theme.typography.navLink,
	width: '100%',
	textAlign: 'center',
	"& a": {
		textDecoration: 'none',
		color: 'inherit',
		textAlign: 'center'
	}
}));