import TeamMemberCard from '../components/TeamMemberCard';

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
];

const MeetTheTeamPage = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-4 grid-col-1 justify-center items-center">
            {teamMembers.map((teamMember) => (
                <div className="m-4 " key={teamMember.name}>
                    <TeamMemberCard {...teamMember} />
                </div>
            ))}
        </div>
    );
};

export default MeetTheTeamPage;
