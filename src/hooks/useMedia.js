import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const useMedia = (breakpoint = "down", view = "md") => {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints[breakpoint](view));
}

export default useMedia