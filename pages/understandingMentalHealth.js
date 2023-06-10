// component to render blogs from the markdown stores in posts/SahaiStories
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };

  }).filter((post) => { return (post.frontmatter.category === 'UnderstandingMentalHealth')});

  return {
    props: {
      posts,
    },
  };
}
export default function Stories({ posts }) {
    return (
        <div className='grid grid-cols-1 mx-5 mt-8 md:grid-cols-3 lg:grid-cols-3 gap-5 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200  bg-[#E3BA9B] rounded-xl p-4 shadow-md overflow-hidden lg:m-8 flex flex-col hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        >
          <Link href={`/post/${slug}`}>

            <Image
              width={100}
              height={100}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
              className=' object-cover rounded-md  w-96 h-48 ' />
            <h1 className=' text-white text-lg font-mono font-bold text-center p-4 '>{frontmatter.title}</h1>
            <p className='text-gray-100 font-mono text-center p-4'>{frontmatter.description}</p>
          </Link>
        </div>
      ))}
    </div>
    )
}