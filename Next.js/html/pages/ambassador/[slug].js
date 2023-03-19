import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';

import AmbassadorSlides from '../../components/ambassador/slides.js';

function Ambassador( data ) {
  return (
    <Layout ambassador>
		<Head>
			<title>{ siteTitle } - { data.title.replace( /(<([^>]+)>)/ig, ' ') }</title>
            <meta id="meta-description" name="description" content={ data.description } />
			<link rel="icon" href="/favicon.ico" />
		</Head>
        <AmbassadorSlides ambassador={ data } />
    </Layout>
  )
}

import content from '../../assets/data/ambassadors.json';

export async function getStaticPaths() {
    const paths = content.ambassadors.map( ambassador => {
        return { 
            params: {
                slug: ambassador.slug
            } 
        };
    });
    return {paths, fallback: true};
}

export async function getStaticProps( { params } ) {
    const currentPath = params.slug;
    const data = content.ambassadors.find( ambassador => ambassador.slug === currentPath );
    if( !data ) {
        return {
            notfound: true
        };
    }
    return {
        props: data
    };
}

export default Ambassador