import TeamMemberCard from '../components/TeamMemberCard';
import roboto from '../components/fonts/robotoFont';
import tiltPrism from '../components/fonts/tiltPrism';
import fredricka from '../components/fonts/fredricka';
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

const MeetTheTeamPage = () => {
    return (
        <>
            <h1 className={`text-7xl font-bold my-8 text-[#926D65] text-center ${fredricka.className}`}
            >Meet the Team</h1>
            <div className="grid mx-4 place-items-center lg:grid-cols-3  grid-col-1 ">
                {teamMembers.map((teamMember) => (
                    <div className=" m-4 transition duration-500 w-2/3 ease-in-out transform hover:-translate-y-2  " key={teamMember.name}>
                        <TeamMemberCard {...teamMember} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default MeetTheTeamPage;
