import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Who's at the Hachathon?</title>
				<meta name='description' content='Conferences' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
