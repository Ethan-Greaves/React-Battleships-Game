import { Button } from '@material-ui/core';
import React from 'react';
import CustomButtonStyles from './CustomButtonStyles';
import clickSFX from '.././../assets/sfx/click.wav';
import retroChimeSfx from '../../assets/sfx/RetroChime.wav';
import useAudio from '../../hooks/useAudio';
import { motion } from 'framer-motion/dist/es/index';

const CustomButton = ({ text }) => {
	const styles = CustomButtonStyles();
	const [playingClick, toggleClick] = useAudio(clickSFX, false);
	const [playingRetroChime, toggleRetroChime] = useAudio(retroChimeSfx, false);

	return (
		<motion.div whileHover={{ scale: 1.05 }}>
			<Button
				className={styles.btn}
				onMouseEnter={toggleClick}
				onClick={toggleRetroChime}>
				{text}
			</Button>
		</motion.div>
	);
};
export default CustomButton;
