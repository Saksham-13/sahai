import TeamMemberCard from '../components/TeamMemberCard';
import roboto from '../components/fonts/robotoFont';
import tiltPrism from '../components/fonts/tiltPrism';
import fredricka from '../components/fonts/fredricka';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
const founders = [
    {
      name: 'Shruti Dewan',
      designation: 'Co-Founder',
      description: 'Shruti is the co-founder of Sahai, who is currently pursuing her bachelors degree in Computer Science Engineering. She is passionate about mental health advocacy and is a versatile member, with a huge heart for making change. Her personal experience has moulded her strong passion for her work and she firmly believes that everyone struggling deserves support. A person of many talents, Shruti is also a certified yoga instructor, skilled writer, guitarist, and thespian. In her free time, Shruti enjoys a good Netflix binge or can be found practising splits and headstands.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113150319937990757/MG_4283-01_1.jpeg',
    },
    {
      name: 'Rishika Sen',
      designation: 'Co-Founder',
      description: 'Rishika is a writer and a passionate mental health advocate. She believes that mental health awareness should be much more prevalent than it currently is and that mental health resources should be more accessible. Fueled by her personal experience, and will to make the world a better place, Rishika is determined to help Sahai conquer its vision. When she is not burning her retinas studying, she can be found writing or watching yet another Netflix show. Currently, Rishika is studying Psychology,  Neuroscience, and Behaviour at McMaster University.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1196265000692629625/IMG_5340_1.jpg?ex=65b6ff99&is=65a48a99&hm=8d7cefcb2aa7457203dc87c08c40fee9e86761b296357ca6852ac3e09f705c93&',
    },
    {
      name: 'Jainy Zavier',
      designation: 'Co-Founder',
      description: 'Jainy is a business development professional, who is also a musician, songwriter and doodle artist. She is passionate about promoting mental health awareness in India, and much of her work has been centred around this. Having struggled with her own mental health, Jainy aims to build an inclusive platform for those struggling. An addict to chai, road trips and movies, when not busy working with tech start-ups or performing gigs, you will probably find her curled up in bed watching Netflix or playing with animal friends.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113150661643731045/Jainy_Zavier.png',
    },
  ];
  
const teams = [
    {
      name: 'Content Team',
      members: [
        {
          name: 'Manasavi Kesarwani',
          designation: 'Content Head',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195833214204379227/Screenshot_2024_0101_131839.jpg?ex=65b56d77&is=65a2f877&hm=d9d1bba283fcddc2b3cb6dc0715437dbc98d7aa865f1cc9e670ffae3560c493b&',
        },
        {
          name: 'Ananya Pudipeddi',
          designation: 'Content Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1196265001174978680/Screenshot_2024-01-14-19-19-55-23_6012fa4d4ddec268fc5c7112cbb265e7.jpg?ex=65b6ff99&is=65a48a99&hm=3c2b7d080dc68fa2f0206a09c573317b26420fd45e1a1012b9d1ec2692ee0f01&',
        },
        {
          name: 'Harshika Chowdary',
          designation: 'Content Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122624322381553714/Harshika_Chowdary.png',
        },
        {
          name: 'Mihira Padma',
          designation: 'Content Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122624320808701963/mihira.jpeg',
        },
        {
          name: 'Oishi Gattani',
          designation: 'Content Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122624322062798848/Oishi_Gattani.jpeg',
        },
        {
          name: 'Priya Srinand',
          designation: 'Content Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122624321077125230/Priya_Srinand.jpg',
        },
      ],
    },
    {
      name: 'Events and PR Team',
      members: [
         {
          name: 'Rakshitha Ravishankar',
          designation: 'Events and PR Lead',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122627686607638589/Rakshitha_Ravishankar.jpg',
        },
        {
          name: 'Anagha Nambiar',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1196265001699258478/1705179277239-ed3465be-8900-490b-ba8c-453de30461e5_1.jpg?ex=65b6ff99&is=65a48a99&hm=a694429b5060aa2209bc8f3fdab445668be31ecec022dc5c5dd6c626cc027692&',
        },
        {
          name: 'Dhwani Kohli',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122627686368555130/Dhwani_Kohli.jpeg',
        },
        {
          name: 'Harsh M',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195838759493713960/IMG_20230518_1033142.jpg?ex=65b572a1&is=65a2fda1&hm=ef529bb89b644d13ade76248b628d86c5e338c35b017fff62f921c8a7a0bb36f&',
        },
        {
          name: 'Ishwarya B',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122627685491945512/Snapchat-501561995.jpg',
        },
        {
          name: 'Khushi Etagi',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195838758919090296/IMG_20231020_133228.jpg?ex=65b572a1&is=65a2fda1&hm=19ddd4fb116435fffd288cf5c626960776d7b534642e0dcf1493d3b0f60eca2e&',
        },
        {
          name: 'Meghana K',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122627685747806349/20230613_160604-01.jpeg',
        },
        {
          name: 'Kaushik Reddy',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122627685206728845/IMG_04702.jpg',
        },
        {
          name: 'Punya Venkatesh',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195838758222827681/IMG_20230911_203606.jpg?ex=65b572a1&is=65a2fda1&hm=fc7d80cdd1b0f084f9159063081d80d5f7dee4836c86064da651642df1202e83&',
        },
        {
          name: 'Rashi Prasad',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122627686062366730/Rashi_Prasad_3.jpeg',
        },
        {
          name: 'Shivang Chajjer',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152017976787035/Shivang_Chajjer.jpg',
        },
        {
          name: 'Shreya Mandi',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1123378929940570163/IMG_0436.jpg',
        },
        {
          name: 'Vivek Kashyap',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195838760227713034/DB666F16-00E8-4DD0-B4A0-9C686F73D664.jpeg?ex=65b572a2&is=65a2fda2&hm=9dfe8019b18531910bfdfa9cf1c9ef5db63317c0322678a4d065f06802782bda&',
        },
      ],
    },
    {
      name: 'Podcast Team',
      members: [
        {
          name: 'Ishita ',
          designation: 'Podcast Host',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195838760852668517/IMG202304251056582.jpg?ex=65b572a2&is=65a2fda2&hm=792742264ac4d417ac226eb842194e508528037784af97c9d8d64d1388b51a20&',
        },
          {
          name: 'Kushi Naidu',
          designation: 'Podcast Host',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122628650966192219/Kushi_Naidu.jpg',
        },
         {
          name: 'Sonali Sahoo',
          designation: 'Podcast Host',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195838757912457247/WhatsApp_Image_2024-01-10_at_9.30.14_AM.jpeg?ex=65b572a1&is=65a2fda1&hm=e4a1c7cc17e94d2dcbb44cbaaca9c5007ed13109095ac51af848449f6ce6712f&',
        },
      ],
    },
    {
      name: 'Social Media Team',
      members: [
        {
          name: 'Nehal Gutur',
          designation: 'Social Media Head',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195838757664985119/WhatsApp_Image_2024-01-09_at_11.18.06_AM.jpeg?ex=65b572a1&is=65a2fda1&hm=b4bf84faa09ee3667e68b53b734bf2230c80080cd164dedf583acf189e9e15fb&',
        },
        {
          name: 'Arya Soni',
          designation: 'Social Media Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195838759866994799/IMG-20231028-WA0001.jpg?ex=65b572a1&is=65a2fda1&hm=fce697ecf69baef9da03c1c7617a4e65e2d20644f7c4c4a310a68e33dff413b7&',
        },
        {
          name: 'Elisha James',
          designation: 'Social Media Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122629937938038854/WhatsApp_Image_2023-06-23_at_12.12.51_PM.jpeg',
        },
        {
          name: 'Sruthi Ajit',
          designation: 'Social Media Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122629938974032053/Sruthi_Ajit.jpg',
        },
        {
          name: 'Roshini',
          designation: 'Social Media Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122629938286178314/Roshini_.jpeg',
        },
      ],
    },
  ];
// const teamByDesignation = team.reduce((acc, curr) => {
//     const firstWord = curr.designation.split(' ')[0];
//     const fullDesignation = curr.designation; 
//     if (!acc[firstWord]) {
//       acc[firstWord] = [];
//     }
//     acc[firstWord].push({ ...curr, designation: fullDesignation });
//     acc[fullDesignation] = acc[firstWord];

//     console.log(acc);
//     return acc;
//   }, {});
const Founder = ({ name, designation, description, imageUrl, reverse }) => {
    const flexDirection = reverse ? 'md:flex-row-reverse' : 'md:flex-row';
    console.log(flexDirection);
  
    return (
      <div className={`flex  flex-col  ${flexDirection} items-center justify-center gap-4 my-16`}>
        <img src={imageUrl} alt={name} className="rounded w-82 h-82 md:w-80 md:h-80 object-cover" />
        <div className="flex text-[#724E3B] md:w-1/2 p-6 flex-col gap-2">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-xl font-medium">{designation}</p>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    );
  };
const MeetTheTeamPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    return (
        <>
            <h1 className={`text-7xl font-bold my-8 text-[#724E3B] text-center ${fredricka.className}`}
            >Meet the Team</h1>
            <h2 className={`text-5xl font-bold mt-20 text-[#926D65] text-center ${fredricka.className}`}>Founders</h2>
            <div className="container mx-auto">
      {founders.map((member, index) => (
        <Founder key={member.name} {...member} reverse={index % 2 !== 0} />
      ))}
    </div>
    <h2 className="text-3xl font-bold mt-16 mb-8 text-[#724E3B] text-center">The Team</h2>
    <div className="flex flex-col justify-center items-center">
    {teams.map((team) => (
  <div key={team.name} className="w-full">
    <h2 className={`text-3xl font-bold mt-16 mb-8 text-[#724E3B] text-center ${fredricka.className}`}>{team.name}</h2>
    <div className="grid p-4 grid-col-1 md:grid-cols-3 gap-4">
      {team.members.map((member) => (
        <div className="m-4 transition duration-500 w-2/3 ease-in-out transform hover:-translate-y-2" key={member.name}>
          <TeamMemberCard data-aos="flip-left" {...member} />
        </div>
      ))}
    </div>
  </div>
))}
</div>
        </>
    );
};

export default MeetTheTeamPage;
