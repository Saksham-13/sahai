import { useState } from 'react';

const TeamMemberCard = ({ name, designation, description, imageUrl }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className="relative rounded-lg  overflow-hidden group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imageUrl} alt={name} className="w-full h-auto" />
            <div
                className={`${hovered ? 'opacity-100' : 'opacity-0'
                    } absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out`}
            >
                <h2 className="text-lg font-medium">{name}</h2>
                <p className="text-sm">{designation}</p>
                <p className="text-sm px-2 text-center">{description}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;
