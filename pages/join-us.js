import Link from 'next/link'
import fredricka from '../components/fonts/fredricka';
const jobs = [
    {
        id: 1,
        title: "Social Media Team",
        description: "The social media team will be chiefly responsible for designing Instagram posts for the Instagram page. We are looking for proficiency in graphic design! This would mean setting deadlines, managing the content and posting posts on our page.",
    },
    {
        id: 2,
        title: "Events and PR Team",
        description: "The Events and PR team member will be responsible for conducting outreach, planning and coordinating events. This may include building relationships with other organizations, schools, or professionals; promoting our activities. We are looking for experience in working with events, as well as the vision and patience necessary to execute them.",
    },
    {
        id: 3,
        title: "Content Team",
        description: "The content team will be responsible for creating content for Sahai, as well as planning the direction of Sahai's content. This content could include written blogs, artwork, ideas, or text for Instagram posts, and so on. We are looking for strong writers and visionaries!",
    },
    {
        id: 4,
        title: "Podcast Team",
        description: "The podcast team will be responsible for helping the execution of our podcast, Chai with Sahai. This could include brainstorming new ideas, reaching out to potential and suitable guests, and hosting podcasts!",
    },
]


export default function JoinUs() {
    return (
        <div className="  justify-center items-center h-screen bg-cover bg-center bg-gray-100" style={{ backgroundImage: "url('/background-image.jpg')" }}>
            <div className="container mx-auto px-4 py-8">
               <h1 className={`text-7xl font-bold my-8 text-[#926D65] text-center ${fredricka.className}`}
            >Open Roles</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map(job => (
                        <div key={job.id} className="border p-8 rounded-lg flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
                                <p className="mb-4">{job.description}</p>
                            </div>
                            <div>
                                <a href={"https://forms.gle/uueV7sPdFQtbDx339"} target="_blank" rel="noopener noreferrer" className="text-white bg-[#956E66] border-0 py-2 px-8 focus:outline-none hover:bg-[#E2BA9B] rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105rounded">Apply Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}