import TeamMemberCard from '../components/TeamMemberCard';
import roboto from '../components/fonts/robotoFont';
import tiltPrism from '../components/fonts/tiltPrism';
import fredricka from '../components/fonts/fredricka';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
const teamMembers = [
    {
        name: 'John Doe',
        designation: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://media.discordapp.net/attachments/972456002844766228/1097002370661093506/image.png?width=1554&height=1036',
    },
    {
        name: 'Jane Smith',
        designation: 'CTO',
        description: 'Praesent vel ligula scelerisque, viverra eros ac, venenatis purus.',
        imageUrl: 'https://media.discordapp.net/attachments/972456002844766228/1097002370661093506/image.png?width=1554&height=1036',
    },
    {
        name: 'Bob Johnson',
        designation: 'COO',
        description: 'Nullam auctor mi ut magna vestibulum pulvinar.',
        imageUrl: 'https://media.discordapp.net/attachments/972456002844766228/1097002370661093506/image.png?width=1554&height=1036',
    },
    {
        name: 'John Doe',
        designation: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://media.discordapp.net/attachments/972456002844766228/1097002370661093506/image.png?width=1554&height=1036',
    },
    {
        name: 'Jane Smith',
        designation: 'CTO',
        description: 'Praesent vel ligula scelerisque, viverra eros ac, venenatis purus.',
        imageUrl: 'https://media.discordapp.net/attachments/972456002844766228/1097002370661093506/image.png?width=1554&height=1036',
    },
    {
        name: 'Bob Johnson',
        designation: 'COO',
        description: 'Nullam auctor mi ut magna vestibulum pulvinar.',
        imageUrl: 'https://media.discordapp.net/attachments/972456002844766228/1097002370661093506/image.png?width=1554&height=1036',
    },
];
const team  = [
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
    {
        name: 'Manasavi Kesarwani',
        designation: 'Content Head',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113151197231185940/Manassvi_Kesarwani.png',
    },
    {
        name: 'Ananya Pudipeddi',
        designation: 'Content Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113151198044889159/Ananya_Pudipeddi.png',
    },
    {
        name: 'Harshika Chowdary',
        designation: 'Content Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113151197629648916/Harshika_Chowdary.png',
    },
  {
        name: 'Oishi Gattani',
        designation: 'Content Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113151196887261294/Oishi_Gattani.jpeg',
    },
    {
        name: 'Preethi Hiremath',
        designation: 'Content Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113151196581072916/Preethi_Hiremath.jpeg',
    },
    {
        name: 'Priya Srinand',
        designation: 'Content Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113151196195192907/Priya_Srinand.jpg',
    },
  {
        name: 'Sonali Sahoo',
        designation: 'Content Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113151195859652718/Sonali.jpeg',
    },
    {
        name: 'Ashka James',
        designation: 'Events and PR Co-Lead',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152020447240232/Ashka_James.jpg',
    },
    {
        name: 'Rakshitha Ravishankar',
        designation: 'Events and PR Co-Lead',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152018765316277/Rakshitha_Ravishankar.jpg',
    },
  {
        name: 'Dhwani Kohli',
        designation: 'Events and PR Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152020757630976/Dhwani_Kohli.jpeg',
    },
    {
        name: 'Ishwarya B',
        designation: 'Events and PR Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152020120076372/Ishwarya_.jpg',
    },
    {
        name: 'Meghana K',
        designation: 'Events and PR Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152019222503514/Meghana_K.jpg',
    },
 {
        name: 'Kaushik Reddy',
        designation: 'Events and PR Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152019792941076/Kaushik_Reddy.jpg',
    },
    {
        name: 'Rashi Prasad',
        designation: 'Events and PR Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152018475929710/Rashi_Prasad_3.jpeg',
    },
    {
        name: 'Shivang Chajjer',
        designation: 'Events and PR Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152017976787035/Shivang_Chajjer.jpg',
    },
    {
        name: 'Kushi Naidu',
        designation: 'Podcast Host',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152740865097798/Kushi_Naidu.jpg',
    },
    {
        name: 'Palak Jain',
        designation: 'Podcast Host',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113152740437266492/Palak_Jain.jpeg',
    },
 {
        name: 'Lipika Gupta',
        designation: 'Social Media Head',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113153035665948722/Lipika_Gupta.jpg',
    },
    {
        name: 'Alena Vinod',
        designation: 'Social Media Design Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113153036026654782/Alena_P_Vinod.jpg',
    },
    {
        name: 'Manasi Shimpi',
        designation: 'Social Media Design Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113153035321999400/Manasi_Shimpi.jpg',
    },
 {
        name: 'Sruthi Ajit',
        designation: 'Social Media Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113153034185342976/Sruthi_Ajit.jpg',
    },
    {
        name: 'Roshini',
        designation: 'Social Media Team Member',
        imageUrl: 'https://cdn.discordapp.com/attachments/1113150113037156515/1113153034785140866/Roshini_.jpeg',
    },
];

const MeetTheTeamPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);
    return (
        <>
            <h1 className={`text-7xl font-bold my-8 text-[#926D65] text-center ${fredricka.className}`}
            >Meet the Team</h1>
            <div className="grid mx-4 place-items-center lg:grid-cols-3  grid-col-1 ">
                {team.map((teamMember) => (
                    <div className=" m-4 transition duration-500 w-2/3 ease-in-out transform hover:-translate-y-2  " key={teamMember.name}>
                        <TeamMemberCard data-aos="flip-left"{...teamMember} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default MeetTheTeamPage;