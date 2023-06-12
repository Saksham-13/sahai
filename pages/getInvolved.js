import Link from 'next/link'
import Image from 'next/image'

export default function GetInvolved() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-gray-100" style={{ backgroundImage: "url('https://media.discordapp.net/attachments/972456002844766228/1097041013832433774/photo-1544027993-37dbfe43562a.png?width=1554&height=1036')" }}>
            <div className="text-center">
                <h1 className="text-7xl text-white font-bold mb-4">Get Involved</h1>
                <p className="mb-8 text-xl text-white font-bold">We're always welcoming new members and voices to Sahai and we'd love to have you join us!</p>
                <div className="flex justify-center my-8 mt-16 pt-24 space-x-8">
                    <Link href="/share-your-story">
                        <button className="px-6 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1 w-90 border-4 border-black text-black font-bold rounded hover:bg-black hover:text-white ">Share Your Story</button>
                    </Link>
                    <Link href="/join-us">
                        <button className="px-12 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1 w-90 border-4 border-black text-black font-bold rounded hover:bg-black hover:text-white ">Join Sahai</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
