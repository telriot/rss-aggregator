import React, { FC } from 'react';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import ThemeContext, { theme } from 'contexts/themeContext';
import { FilterProvider } from 'contexts/filterContext';
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeContext.Provider value={theme}>
			<FilterProvider>
				<Component {...pageProps} />
			</FilterProvider>
		</ThemeContext.Provider>
	);
};

export default MyApp;
