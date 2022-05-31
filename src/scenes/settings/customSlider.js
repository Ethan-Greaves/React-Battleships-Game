import { withStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';

const sliderTrackHeight = 16;
const ThumbSize = sliderTrackHeight * 2;

const CustomSlider = withStyles((theme) => ({
	root: {
		color: theme.palette.primary.main,
		height: 8,
	},
	thumb: {
		height: ThumbSize,
		width: ThumbSize,
		backgroundColor: theme.palette.primary.main,
		border: `4px solid ${theme.palette.secondary.main}`,
		marginTop: -8,
		marginLeft: -12,
		'&:focus,&:hover,&$active': {
			boxShadow: 'inherit',
		},
	},

	active: {},
	track: {
		height: sliderTrackHeight,
		borderRadius: theme.shape.borderRadius,
	},
	rail: {
		height: sliderTrackHeight,
		borderRadius: theme.shape.borderRadius,
		opacity: 1,
	},
}))(Slider);

export default CustomSlider;
