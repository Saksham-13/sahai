import Head from 'next/head'
import Image from 'next/image'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Hero from '../components/hero';
import Pdocast from '../components/podcast';
import { Parallax } from 'react-scroll-parallax';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import fredricka from '../components/fonts/fredricka';
import Contact from '../components/contact';
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
          <h1 className="text-4xl font-bold text-white font-mono"> <RoughNotation type="highlight" color="#9A7B6C" show={true}> Recent Events</RoughNotation></h1>
          <h1 className=" my-4 text-xl  text-white  font-bold "><RoughNotation  type="highlight" color="#926D65" show={true} > Sahai frequently hosts both in-person and virtual events to facilitate discussions about mental health.</RoughNotation></h1>
          <Link href='/event'>
        <button
        className=' border-[#9A7B6C] border font-bold rounded-md py-4 px-2 my-4 bg-[#9A7B6C] text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        >
          Know More
        </button>
        </Link>
        </div>
        </Parallax>

        </div>
        
      </div>
      <div
      className='blog-container'
      >
        <div
        className='flex flex-col items-center justify-center'
        >
          <h1 
          className={`text-6xl my-4 font-bold  ${fredricka.className} text-[#926D65]` }
          >

            <RoughNotation
            type="" color="#9A7B6C" show={true}
            >
            Our Blogs
            </RoughNotation>
          </h1>
          <p
          className='text-lg text-gray-500 mb-4  lg:w-1/2 w-4/5 text-center'
          >
          Read our latest blogs by our content team that talk about mental health, share their own stories and everything in between!
          </p>
        </div>
         <div className='grid grid-cols-1  mx-5 mt-8 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4 md:p-0'>
      {posts.slice(0, 3).map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200  bg-[#9A7B6C] rounded-xl p-4 shadow-md overflow-hidden lg:m-8 flex flex-col hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        >
          <Link href={`/post/${slug}`}>

            <Image
              width={100}
              height={100}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
              className=' object-cover rounded-md  w-96 h-48 ' />
            <h1 className=' text-white text-lg  font-bold text-center p-4 '>{frontmatter.title}</h1>
            <p className='text-gray-100  text-center p-4'>{frontmatter.description}</p>
            <p className='text-gray-100 text-center p-4'>Written by - {frontmatter.author_name}</p>
          </Link>
        </div>
      ))}
      {/* a outline button to take to the rest of blogs */}
      <div
      className='flex flex-col lg:w-screen items-center justify-center'
      >
        <Link href='/blog'>
        <button
        className=' border-[#9A7B6C] border text-[#9A7B6C] font-bold rounded-md p-5 my-4 hover:bg-[#9A7B6C] hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        >
          Read More
        </button>
        </Link>
        </div>
    </div>

      </div>
      <Contact/>
     


    </div>
  );
}