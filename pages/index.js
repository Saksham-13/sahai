import Head from 'next/head'
import Image from 'next/image'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Hero from '../components/hero';
import Pdocast from '../components/podcast';
import { Parallax } from 'react-scroll-parallax';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
// import styles from '../styles/Home.module.css'
// <Hero/>
export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    
    return {
      slug,
      frontmatter,
    };
});
return {
  props: {
    posts,
  },
};
}
export default function Home({ posts }) {
  return (
    <div>
      <Hero/>
      <Pdocast/> 

      <div
      className='parallax   relative my-8'
      >
        <div
        className='glass'
        >
        <Parallax
        speed={2}
        className="z-10 pt-16 "
        >
        <div
        className='grayscale-0  text-center  flex flex-col  px-2   lg:w-1/2 mx-auto items-center justify-center '
        >
          <h1 className="text-4xl font-bold text-white font-mono">Recent <RoughNotation type="highlight" color="#9A7B6C" show={true}>Events</RoughNotation></h1>
          <h1 className=" my-4 text-xl  text-gray-400  font-bold font-mono">Sahai frequently hosts both in-person and virtual events to facilitate discussions about mental health.</h1>
        </div>
        </Parallax>

        </div>
        
      </div>
      <div
      className='blog-container'
      >
        <div
        className='flex items-center justify-center'
        >
          <h1 
          className='text-6xl font-bold text-black font-mono'
          >Our Blogs</h1>
        </div>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col hover:bg-white/20'
        >
          <Link href={`/post/${slug}`}>

            <Image
              width={500}
              height={500}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
              className='blogpic' />
            <h1 className='p-4'>{frontmatter.title}</h1>

          </Link>
        </div>
      ))}
    </div>

      </div>
     


    </div>
  );
}