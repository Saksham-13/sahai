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
      imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113150661996073071/Rishika_Sen.jpg',
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
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122622729665904790/Ananya_Pudipeddi.png',
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
          name: 'Dhwani Kohli',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122627686368555130/Dhwani_Kohli.jpeg',
        },
        {
          name: 'Ishwarya B',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122627685491945512/Snapchat-501561995.jpg',
        },
        {
          name: 'Khushi Etagi',
          designation: 'Events and PR Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195833215462674482/IMG_20231020_133228.jpg?ex=65b56d78&is=65a2f878&hm=f95451a7be0f12758da80519fec352054804e583a693e232b2df800caedb0398&',
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
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195833214716100628/IMG_20230911_203606.jpg?ex=65b56d77&is=65a2f877&hm=17effa60455f0902f00a7d409ec16251b9df5bfa15c44f8208dc603b8128ce67&',
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
      ],
    },
    {
      name: 'Podcast Team',
      members: [
        {
          name: 'Ishita ',
          designation: 'Podcast Host',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195834100532117646/IMG202304251056582.jpg?ex=65b56e4b&is=65a2f94b&hm=291c9413c75f671f6051e320599ac968d5780042546ef7ee8460d8c5e5c1a374&',
        },
          {
          name: 'Kushi Naidu',
          designation: 'Podcast Host',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1122628650966192219/Kushi_Naidu.jpg',
        },
         {
          name: 'Sonali Sahoo',
          designation: 'Podcast Host',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195833213952737332/WhatsApp_Image_2024-01-10_at_9.30.14_AM.jpeg?ex=65b56d77&is=65a2f877&hm=beb597f11990529081abac0483f1fe3d9d04e9d0e9835d682006b853fe3d196b&',
        },
      ],
    },
    {
      name: 'Social Media Team',
      members: [
        {
          name: 'Nehal Guttur',
          designation: 'Social Media Head',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195833581906448556/WhatsApp_Image_2024-01-09_at_11.18.06_AM.jpeg?ex=65b56dcf&is=65a2f8cf&hm=674bb334806d887edc44a8a2f83fd543783bee8553e6129ada248a0ac7c5009e&',
        },
        {
          name: 'Arya Soni',
          designation: 'Social Media Team Member',
          imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1195833217274626048/IMG-20231028-WA0001.jpg?ex=65b56d78&is=65a2f878&hm=a3d53648edf730409d3c8d59243d46c4e1a817276c80c09408d0f1d82dfdadd6&',
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
