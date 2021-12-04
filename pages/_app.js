import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Next Reaction</title>
				<meta name='description' content='Hackathon' />
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
