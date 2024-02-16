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
const teamMembers = [
  {
      name: 'BMSCE x Sahai',
      description: 'We had our first in-person event on 30th April 2022 with the Rotaract Club in BMSCE. We conducted a workshop with the students of AMrutha Shishu Nivasa on exam stress and we provided them with de-stressor activities like painting and stress-management workshops. It was so heartwarming and an amazing experience for all of us! We can’t wait to host more workshops.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1117840251264700508/DSC_0107.JPG',
  },
  {
    name : 'Sahai x WEAL',
    description: 'On 10th October, 2023 we had an in-person workshop in collaboration with WEAL. In our interactive workshop, we discussed the ways to conquer and deal with exam stress. We gave the kids workshops and fun activities, and everyone involved had an amazing time!',
    imageUrl: 'https://media.discordapp.net/attachments/1117788727020892190/1207714893126434938/a7e9102f-f4aa-439b-8eca-496152b87110.png?ex=65e0a724&is=65ce3224&hm=55c0af9efe55d2f1e3bce12753e498b542a6cb68c7a1b7cb98fd825faac660d4&=&format=webp&quality=lossless&width=1548&height=1032',
  },
  {
    name: 'Sahai x Project Surya',
    description: 'On 28th October, 2023 we had an in-person workshop in collaboration with Surya and Samatvan. In our workshop, we discussed the well-being of kids with type-one diabetes. We gave the kids workshops and fun activities, and everyone involved had an amazing time!',
    imageUrl: 'https://media.discordapp.net/attachments/1117788727020892190/1207714440137408564/4370ca07-659a-4b9c-899d-5ee2381d0aaa-1_1.jpg?ex=65e0a6b8&is=65ce31b8&hm=3fa5c18e5f7c4d7d4c8c8089991a870ba7da2c27215898d628595e77f828f992&=&format=webp&width=1372&height=1032',
  }
  
];
const InstagramImages = () => {
  return (
    <div className="flex flex-col px-2 items-center justify-center">
    <h1 className={`text-7xl font-bold my-8 text-[#926D65] text-center ${fredricka.className}`}
            >Our Events</h1>
    <h1 className="md:text-2x text-lg md:w-2/3 font-bold my-8 text-[#926D65] text-center">Sahai frequently hosts both in-person and virtual events to facilitate discussions about mental health. Here are some of our recent events!
</h1>

<h2 className={`text-5xl font-bold mt-20 text-[#926D65] text-center $`}>Online</h2>

    <div className="grid p-8 grid-col-1 md:grid-cols-3 gap-8">
      {images.map((image) => (
        <a key={image.instagramUrl} href={image.instagramUrl} target="_blank" rel="noopener noreferrer" className=" p-8 rounded  relative">
          <img src={image.url} alt="Instagram post" className=" rounded w-full h-full object-cover" />
          <div className="absolute bottom-10 right-10 m-2">
            <img src="/instagram.svg" alt="Instagram icon" className="h-6 w-6 text-white" />
          </div>
        </a>
      ))}
      {/* map over the teamMembers object which have imageUrl, image name and description, render the image as a card with name and description overlayed */}
      

    </div>
    <h2 className={`text-5xl font-bold mt-20 mb-16 text-[#926D65] text-center $`}>Offline</h2>
      <div className="">
      {teamMembers.map((member,index) => (

        <div key={member.name} className={`p-8 flex gap-4 flex-col ${ index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} relative`}>
          <img src={member.imageUrl} alt="Team member" className="rounded md:w-1/2 h-full object-cover" />
          <div className="  md:p-4 my-auto">
            <h2 className="text-xl  font-bold mb-4 text-[#724E3B]">{member.name}</h2>
            <p className="text-lg  text-[#724E3B]">{member.description}</p>
            </div>
            </div>
      ))}
    </div>
    </div>
  );
};

export default InstagramImages;