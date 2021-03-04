import { useState } from 'react';

const UseToggle = (initialValue = false) => {
	const [value, setValue] = useState(initialValue);

	const toggle = () => {
		setValue(!value);
	};

	return [value, toggle];
};

export default UseToggle;