import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext):Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render():JSX.Element {
		return (
			<Html lang='en'>
				<Head>
					<meta
						name='description'
						content='A cooking and lifestyle feed aggregator for lovers of international cuisine'
					/>
				</Head>{' '}
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
