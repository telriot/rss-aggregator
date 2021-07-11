import React, { FC } from 'react';
import 'tailwindcss/tailwind.css';
import '../public/styles/index.css';
import { AppProps } from 'next/app';
import ThemeContext, { theme } from 'contexts/themeContext';
import { FilterProvider } from 'contexts/filterContext';
import Head from 'next/head';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='description'
					content='A cooking and lifestyle feed aggregator for lovers of international cuisine'
				/>
			</Head>
			<ThemeContext.Provider value={theme}>
				<FilterProvider>
					<Component {...pageProps} />
				</FilterProvider>
			</ThemeContext.Provider>
		</>
	);
};

export default MyApp;
