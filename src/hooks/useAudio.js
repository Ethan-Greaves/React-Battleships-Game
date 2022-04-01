import React, { useState, useEffect } from 'react';

const useAudio = (url, isMusic) => {
	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);

	const toggle = () => setPlaying(!playing);

	useEffect(() => {
		// if (isMusic)
		playing ? audio.play() : audio.pause();
	}, [audio, isMusic, playing]);

	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		// return () => {
		// 	audio.removeEventListener('ended', () => setPlaying(false));
		// };
	}, [audio]);

	return [playing, toggle];
};

export default useAudio;
