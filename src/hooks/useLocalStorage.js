import React from 'react';

export const UseLocalStorage = (key, initialValue) => {
	const [value, setValue] = React.useState(() => {
		try {
			const savedItem = localStorage.getItem(key);
			if (savedItem === null) {
				localStorage.setItem(key, JSON.parse(initialValue));
			}
			return savedItem;
		} catch (error) {}
	});

	React.useEffect(() => {
		localStorage.setItem(key, value);
	}, [key, value]);

	return [value, setValue];
};
