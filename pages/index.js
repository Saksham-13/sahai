import Head from 'next/head'
import Image from 'next/image'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Hero from '../components/hero';
import Pdocast from '../components/podcast';
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
    </div>
  );
}