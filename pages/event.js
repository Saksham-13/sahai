import React from 'react';
import fredricka from '../components/fonts/fredricka';
const images = [
  {
    url: 'https://cdn.discordapp.com/attachments/1113150113037156515/1117857947662430360/254567597_308209807533253_5089678356390873516_n.jpg',
    instagramUrl: 'https://www.instagram.com/reel/CV8MWyWI9Nv/',
  },
  {
    url: 'https://cdn.discordapp.com/attachments/1113150113037156515/1117858606847631390/245845246_929016427997198_9208190800803144050_n.jpg',
    instagramUrl: 'https://www.instagram.com/reel/CVDI9MkIU5R/',
  },
  {
    url: 'https://cdn.discordapp.com/attachments/1113150113037156515/1117858917435854958/244029552_4584296558257949_1086559226263016795_n.jpg',
    instagramUrl: 'https://www.instagram.com/reel/CUkVKX6FVG8/',
  },
  {
    url: 'https://cdn.discordapp.com/attachments/1113150113037156515/1117859117051154482/242148613_136455552032201_4710222632495287400_n.jpg',
    instagramUrl: 'https://www.instagram.com/reel/CT7bZ5iB9b-/',
  },
  {
    url: 'https://cdn.discordapp.com/attachments/1113150113037156515/1117859317278834828/239972556_411359693746294_928683078936127646_n.jpg',
    instagramUrl: 'https://www.instagram.com/reel/CS1lE_AF9Y2/',
  },
  {
    url: 'https://cdn.discordapp.com/attachments/1113150113037156515/1117859646493954080/213218022_331242645327376_2160161266318360797_n.jpg',
    instagramUrl: 'https://www.instagram.com/reel/CRMd16klgWo/',
  },
 {
    url: 'https://cdn.discordapp.com/attachments/1113150113037156515/1117860060153008178/209048185_327781065574210_8035021716539661305_n.jpg',
    instagramUrl: 'https://www.instagram.com/reel/CQoKPI4F80J/',
  },
 {
    url: 'https://cdn.discordapp.com/attachments/1113150113037156515/1117859892582166538/200207871_530008938360188_7678036842228650018_n.jpg',
    instagramUrl: 'https://www.instagram.com/reel/CQBamcElaim/',
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
        <a key={image.instagramUrl} href={image.instagramUrl} target="_blank" rel="noopener noreferrer" className=" p-8 rounded  relative">
          <img src={image.url} alt="Instagram post" className=" rounded w-full h-full object-cover" />
          <div className="absolute bottom-10 right-10 m-2">
            <img src="/instagram.svg" alt="Instagram icon" className="h-6 w-6 text-white" />
          </div>
        </a>
      ))}
    </div>
    </div>
  );
};

export default InstagramImages;