export const UseQuitGame = () => {
	const quit = () => {
		if (window.confirm('Are you sure you want to quit?')) {
			window.opener = null;
			window.open('about:blank', '_self');
			window.close();
		}
	};

	return { quit };
};
