import { Box, Button, Typography, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import CustomButtonStyles from './CustomButtonStyles';
import clickSFX from '.././../assets/sfx/click.wav';
import useAudio from '../../hooks/useAudio';
import { motion } from 'framer-motion/dist/es/index';

const CustomButton = ({ text, onClick, size = 'large', tooltipText = '' }) => {
	const styles = CustomButtonStyles();
	const [playingClick, toggleClick] = useAudio(clickSFX, false);

	const matchButtonSize = () => {
		let buttonSize;
		switch (size) {
			case 'large':
				buttonSize = styles.btnLarge;
				break;
			case 'medium':
				buttonSize = styles.btnMedium;
				break;
			case 'small':
				buttonSize = styles.btnSmall;
				break;
			default:
				break;
		}
		return buttonSize;
	};

	return (
		<Tooltip title={tooltipText} className={styles.tooltip} arrow>
			<motion.div whileHover={{ scale: 1.05 }}>
				<Button
					className={`${styles.btn} ${matchButtonSize()}`}
					onMouseEnter={toggleClick}
					onClick={onClick}
					variant="contained">
					<Typography variant={size !== 'large' ? 'h5' : 'h4'}>
						<Box>{text}</Box>
					</Typography>
				</Button>
			</motion.div>
		</Tooltip>
	);
};
export default CustomButton;
