import Layout from '../components/layout';
import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
       <Layout>
      <Component {...pageProps} />
    </Layout>
    </ParallaxProvider>
   
  );
}

export default MyApp;