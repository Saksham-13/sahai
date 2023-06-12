import React from 'react';
import fredricka from '../components/fonts/fredricka';
const images = [
  {
    url: 'https://media.discordapp.net/attachments/1117788727020892190/1117788768724856852/image.png?width=604&height=936',
    instagramUrl: 'https://www.instagram.com/reel/CQBamcElaim/',
  },
  {
    url: 'https://media.discordapp.net/attachments/1117788727020892190/1117788890682642482/image.png?width=604&height=938',
    instagramUrl: 'https://www.instagram.com/reel/CQoKPI4F80J/',
  },
  {
    url: 'https://media.discordapp.net/attachments/1117788727020892190/1117788976233844787/image.png?width=522&height=938',
    instagramUrl: 'https://www.instagram.com/reel/CRMd16klgWo/',
  },
  {
    url: 'https://media.discordapp.net/attachments/1117788727020892190/1117789137483878410/image.png?width=526&height=936',
    instagramUrl: 'https://www.instagram.com/reel/CS1lE_AF9Y2/',
  },
  {
    url: 'https://media.discordapp.net/attachments/1117788727020892190/1117789227585908796/image.png?width=602&height=936',
    instagramUrl: 'https://www.instagram.com/reel/CT7bZ5iB9b-/',
  },
  {
    url: 'https://media.discordapp.net/attachments/1117788727020892190/1117789317406928967/image.png?width=600&height=938',
    instagramUrl: 'https://www.instagram.com/reel/CUkVKX6FVG8/',
  },
];

const InstagramImages = () => {
  return (
    <div className="flex flex-col px-2 items-center justify-center">
    <h1 className={`text-7xl font-bold my-8 text-[#926D65] text-center ${fredricka.className}`}
            >Our Events</h1>
    <h1 className="md:text-2x text-lg md:w-2/3 font-bold my-8 text-[#926D65] text-center">Sahai frequently hosts both in-person and virtual events to facilitate discussions about mental health. Here are some of our recent events!
</h1>

    <div className="grid p-8 grid-col-1 md:grid-cols-3 gap-8">
      {images.map((image) => (
        <a key={image.instagramUrl} href={image.instagramUrl} target="_blank" rel="noopener noreferrer" className=" rounded  relative">
          <img src={image.url} alt="Instagram post" className=" rounded w-full h-full object-cover" />
          <div className="absolute bottom-0 right-0 m-2">
            <img src="/instagram.svg" alt="Instagram icon" className="h-6 w-6 text-white" />
          </div>
        </a>
      ))}
    </div>
    </div>
  );
};

export default InstagramImages;