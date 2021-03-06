import Head from 'next/head';

const Layout = ({ children, title = 'Crypto Price Tracer' }) => {
	return (
		<div className='layout'>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header className='header'></header>
			<main>{children}</main>
		</div>
	);
};
export default Layout;
