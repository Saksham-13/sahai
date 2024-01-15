import React, { useState } from 'react';

const CityData = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 ${
        expanded ? 'h-auto' : 'h-64 overflow-hidden'
      }`}
      onClick={handleClick}
    >
      {data.map((item) => (
        <div key={item.id} className="mb-6 w-1/2 border border-blue-100">
          <h2 className="text-2xl font-bold mb-2">{item.location}</h2>
         
          {expanded && (
            <>
             <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Helplines:</h3>
            <ul className="list-disc list-inside">
              {item.helplines.map((helpline) => (
                <li key={helpline.name}>
                  {helpline.name}: {helpline.number || helpline.email}
                </li>
              ))}
            </ul>
          </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">Support Groups:</h3>
                <ul className="list-disc list-inside">
                  {item.supportGroups.map((group) => (
                    <li key={group.name}>
                      {group.name}: {group.link || 'N/A'}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Therapists:</h3>
                <ul className="">
                  {item.therapists.map((therapist) => (
                    <li key={therapist.name}>
                      <h4 className="text-md font-bold mb-2">
                        {therapist.name}
                      </h4>
                      <ul className="list-disc list-inside">
                        {therapist.bio.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CityData;