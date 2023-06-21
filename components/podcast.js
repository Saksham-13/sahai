import Link from 'next/link';
import Image from 'next/image';
import fredricka from '../components/fonts/fredricka';
export default function Pdocast() {
    return(
        <>
        <div className='lg:px-6'>
        <div className="flex flex-col lg:flex-row items-center ">
            <Image
                width={400}
                height={400}
                alt={"sahai logo"}
                src={`https://media.discordapp.net/attachments/972456002844766228/1094301134958637137/image-removebg.png?width=1060&height=1036`}
                />
            <div 
            className=' lg:flex-col  lg:w-1/2 px-4 lg:px-10'
            >
                <h1 className={`text-4xl  text-[#926D65] my-2 ${fredricka.className}`}>CHAI WITH SAHAI </h1>
                <h1 className={`text-3xl  text-[#926D65]   ${fredricka.className}`}>OUR PODCAST</h1>
                <p className='text-2xl mt-8'>Chai with Sahai, aims to start intriguing and eye-opening conversations around mental health and disorders. Join our hosts with a cup of tea to be a part of the conversation!</p>
                 {/* a button */}
                    <div className='flex  gap-4 mt-8'>
                        <Link href='https://open.spotify.com/show/2Y17fgONRJ1jkhb7ZpAisD?si=5ac56571463d47a0' className=' lg:mx-0 mx-auto'>
                            <button className='bg-[#1DB954] mx-auto text-white px-4 py-2 rounded-lg'>Listen Now</button>
                        </Link>
                        </div>
                

            </div>
        </div>
        <div className='grid grid-cols-1   lg:grid-cols-4  gap-8 justify-center'>
            <div className='lg:p-1 p-6'>
            <iframe className="rounded" src="https://open.spotify.com/embed/episode/6IVfVzHfxE6OhwmPqWa8bC?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className='lg:p-1 p-6'>
            <iframe className="rounded" src="https://open.spotify.com/embed/episode/6t8YudT2otKmVLi4HMNrAV?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className='lg:p-1 p-6'>
            <iframe className="rounded" src="https://open.spotify.com/embed/episode/71jpzzlUZJURqI8n4okiCg?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className='lg:p-1 p-6'>
            <iframe className="rounded" src="https://open.spotify.com/embed/episode/6t8YudT2otKmVLi4HMNrAV?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>

        </div>
       
        
        
        </>
    );
} 