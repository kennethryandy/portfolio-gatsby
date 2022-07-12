import { useEffect, useState } from 'react';
import { capitalize } from '@mui/material';
import { renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

const useIcons = (slugs, arrayFormat = false) => {
	const [icons, setIcons] = useState(null);
	useEffect(() => {
		fetchSimpleIcons({ slugs }).then(({ simpleIcons }) => setIcons(Object.values(simpleIcons)));
	}, [slugs]);

	if (arrayFormat && icons) {
		return icons.map((icon) => ({
			render: renderSimpleIcon({
				icon,
				minContrastRatio: 2,
				bgHex: "#000",
				fallbackHex: "#fff",
				size: 42,
				aProps: {
					href: undefined,
					target: undefined,
					rel: undefined,
					onClick: (e) => {
						e.preventDefault();
					}
				}
			}),
			title: icon.title !== "icon" ? icon.title : capitalize(icon.slug)
		}));
	}

	if (icons) {
		return icons.map((icon) => renderSimpleIcon({
			icon,
			minContrastRatio: 2,
			bgHex: "#000",
			fallbackHex: "#fff",
			size: 42,
			aProps: {
				href: undefined,
				target: undefined,
				rel: undefined,
				onClick: (e) => {
					e.preventDefault();
				}
			},
			imgProps: {
				loading: 'lazy'
			}
		}));
	}

	return icons;
}

export default useIcons;