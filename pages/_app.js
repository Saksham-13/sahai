import Layout from '../components/layout';
import Head from 'next/head';
import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Head>
        <title>Sahai India</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='' />
        </Head>
       <Layout>
      <Component {...pageProps} />
    </Layout>
    </ParallaxProvider>
   
  );
}

export default MyApp;