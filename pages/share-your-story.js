import Image from 'next/image';
import Link from 'next/link';
const ImageText = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center  lg:my-24 lg:items-start justify-center max-w-6xl mx-auto py-8 px-4 lg:px-0">
            <div className="lg:mr-8 w-full my-4 lg:w-1/2">
                <Image
                    src="https://media.discordapp.net/attachments/972456002844766228/1097039989092646933/photo-1564121211835-e88c852648ab.png?width=1554&height=1036"
                    alt="Image"
                    width={500}
                    height={500}
                    className="rounded-md"
                />
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-4xl text-center font-bold mb-16">Share Your Story</h1>
                <div
      className='flex flex-col  items-center justify-center'
      >
        <Link href='forms.gle/ucs23STuPJDUBsnw7'>
        <button
        className=' border-[#9A7B6C] border text-[#9A7B6C] font-bold rounded-md p-5 my-4 hover:bg-[#9A7B6C] hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
        >
          Write to us
        </button>
        </Link>
        </div>
                
            </div>
        </div>
    );
};

export default ImageText;
