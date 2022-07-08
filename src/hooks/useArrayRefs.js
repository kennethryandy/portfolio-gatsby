import { useRef } from 'react'

const useArrayRefs = () => {
	const refs = useRef([]);
	refs.current = [];
	return [refs, (ref) => ref && refs.current.push(ref)];
}

export default useArrayRefs