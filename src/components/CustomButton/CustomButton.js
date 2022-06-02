import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import CustomButtonStyles from './CustomButtonStyles';
import clickSFX from '.././../assets/sfx/click.wav';
import useAudio from '../../hooks/useAudio';
import { motion } from 'framer-motion/dist/es/index';

const CustomButton = ({ text, onClick }) => {
	const styles = CustomButtonStyles();
	const [playingClick, toggleClick] = useAudio(clickSFX, false);

	return (
		<motion.div whileHover={{ scale: 1.05 }}>
			<Button className={styles.btn} onMouseEnter={toggleClick} onClick={onClick} variant="contained">
				<Typography variant="h4">
					<Box>{text}</Box>
				</Typography>
			</Button>
		</motion.div>
	);
};
export default CustomButton;
