import { useRef, useMemo } from 'react';
import { gsap } from 'gsap';

const useGsapSelector = (refArg) => {
	const ref = useRef();
	const q = useMemo(() => gsap.utils.selector(refArg.current ? refArg : ref), [ref]);
	return [q, refArg.current ? refArg : ref];
}

export default useGsapSelector