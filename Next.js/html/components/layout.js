import Head from 'next/head';

import Header from './header'
import styles from '../styles/layout.module.scss'

export const siteTitle = 'Tag Heuer';

export default function Layout( { children } ) {
	return (
		<div className={ styles.container }>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="A Tag Heuer code test for 26 Agency built in Next.js" />
			</Head>
			<Header />
			<main>{children}</main>
		</div>
	);
}
