

const useToggleRubberBand = () => {
	const toggleRubberBand = (event) => {
		event.currentTarget.classList.add('rubberBand');
		event.currentTarget.addEventListener('animationend', (el) => {
			el.target.classList.remove('rubberBand');
		});
	}
	return toggleRubberBand;
}

export default useToggleRubberBand;