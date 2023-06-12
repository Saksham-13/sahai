import Link from 'next/link';
import Image from 'next/image';
import { ParallaxBanner } from 'react-scroll-parallax';
import fredricka from '../components/fonts/fredricka';
export default function Hero() {
    return(
        <>
        <ParallaxBanner
      layers={[
        { image: 'https://images.unsplash.com/photo-1620841713108-18ad2b52d15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', speed: -15 }
      ]}
      className="aspect-[2/1] h-screen"
    >
      <div className="absolute inset-0 flex  text-center  flex-col   items-center justify-center">
        <h1 className={`text-8xl text-white ${fredricka.className} `}>Sahai</h1>
        <h1 className="lg:text-4xl text-xl text-white  ">Educate. Provide. Connect.</h1>
      </div>
    </ParallaxBanner>
        </>
    );
}