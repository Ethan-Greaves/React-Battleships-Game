import { Box, Button, Typography, Tooltip } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import CustomButtonStyles from './CustomButtonStyles';
import { motion } from 'framer-motion/dist/es/index';
import { settingsContext } from '../../context/settings.context';

const CustomButton = ({ text, onClick, size = 'large', tooltipText = '' }) => {
	const styles = CustomButtonStyles();
	const { disableAnimations, setDisableAnimations } = useContext(settingsContext);

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
			<motion.div whileHover={!disableAnimations && { scale: 1.05 }}>
				<Button
					className={`${styles.btn} ${matchButtonSize()}`}
					onClick={onClick}
					variant='contained'
				>
					<Typography variant={size !== 'large' ? 'h5' : 'h4'}>
						<Box>{text}</Box>
					</Typography>
				</Button>
			</motion.div>
		</Tooltip>
	);
};
export default CustomButton;
