import { useEffect, useState } from 'react';
import { renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

const useIcons = (slugs) => {
	const [icons, setIcons] = useState(null);
	useEffect(() => {
		fetchSimpleIcons({ slugs }).then(({ simpleIcons }) => setIcons(Object.values(simpleIcons)));
	}, [slugs]);

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
			}
		}))
	}

	return icons;
}

export default useIcons;