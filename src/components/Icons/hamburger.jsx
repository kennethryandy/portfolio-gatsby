import React, { forwardRef } from 'react';
import PropTypes from "prop-types";

const Hamburger = forwardRef((props, ref) => {

	return (
		<svg {...props} viewBox="0 0 100 80" ref={ref}>
			<rect fill="#64FFDA" width="100" height="8" rx="3"></rect>
			<rect fill="#64FFDA" y="30" width="100" height="8" rx="3"></rect>
			<rect fill="#64FFDA" y="60" width="100" height="8" rx="3"></rect>
		</svg>
	)
});

Hamburger.defaultProps = {
	className: "hamburger",
	height: "34",
	width: "34"
}

Hamburger.propTypes = {
	className: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string,
	onClick: PropTypes.func
}


export default Hamburger;