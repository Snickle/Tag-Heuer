import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

import HomepageAmbassadors from '../components/homepage/ambassadors.js';

import styles from '../styles/layout.module.scss';

function Home( { data } ) {
  return (
    <Layout home>
		<Head>
			<title>{ siteTitle } - Homepage</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		{ data.ambassadors && (
			<HomepageAmbassadors ambassadors={data.ambassadors} />
		)}
    </Layout>
  )
}

import homepageData from '../assets/data/homepage.json';

export async function getStaticProps() {
	return {
		props: {
			data: homepageData
		}
	}
}

export default Home