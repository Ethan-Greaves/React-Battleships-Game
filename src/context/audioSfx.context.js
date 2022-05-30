import React, { createContext, useState } from 'react';
const audioSfxContext = createContext();

const AudioSfxContext = ({ children }) => {
	const [audio] = useState(new Audio());
    const [playing, setPlaying] = useState(false);
    
    const playSfx = (url) => {
        audio.src()
    }

	return (
		<audioSfxContext.Provider value={{  }}>
            {children}
           
		</audioSfxContext.Provider>
	);
};
export default AudioSfxContext;
