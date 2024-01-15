
import Link from "next/link";
const CityData = ({ data }) => {
  
  const item = data[0];
  return (
    <Link href={`/city/${item.id}`}>
    <div
    className="outline flex text-center justify-center items-center gap-2 outline-slate-200 outline-2 rounded-lg p-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:outline-black hover:outline-2"
    >
      <img width="50" height="50" src="https://img.icons8.com/bubbles/100/new-delhi.png" alt="new-delhi"/>
      <h1>{item.location}</h1>
    </div>
    </Link>
  );
};

export default CityData;