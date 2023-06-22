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
        <meta name='description' content='We support those who are struggling with their mental health, we help push the conversation about mental health forward by normalizing it.' />
        <meta name='keywords' content='mental health, mental health india, mental health india, mental health awareness, mental health awarenes' />
        <meta name='author' content='Sahai' />
        <meta property="og:image" content="https://media.discordapp.net/attachments/929024517190320228/1121447828322005092/image.png?width=938&height=938"/>  
        <meta property="og:title" content="Sahai India"/>  
        <meta property="og:description" content="We support those who are struggling with their mental health, we help push the conversation about mental health forward by normalizing it."/>  
        </Head>
       <Layout>
      <Component {...pageProps} />
    </Layout>
    </ParallaxProvider>
   
  );
}

export default MyApp;