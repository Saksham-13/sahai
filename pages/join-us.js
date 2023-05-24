import Link from 'next/link'

const jobs = [
    {
        id: 1,
        title: "Software Engineer",
        description: "We are looking for a software engineer with experience in React and Node.js to join our team. You will work on developing and maintaining our web applications, and collaborate with our designers and product managers to deliver high-quality software. If you're passionate about creating great user experiences and solving complex problems, we'd love to hear from you.",
    },
    {
        id: 2,
        title: "UX Designer",
        description: "We are seeking a UX Designer to join our design team. You will work on creating and improving user experiences for our web and mobile applications, and collaborate with our developers and product managers to deliver intuitive and delightful user interfaces. If you have a passion for design and a portfolio of outstanding work, we'd love to hear from you.",
    },
    {
        id: 3,
        title: "Product Manager",
        description: "We are looking for a Product Manager to join our product team. You will be responsible for defining and driving the roadmap for our web and mobile applications, working closely with our designers, developers, and other stakeholders to deliver high-quality software. If you have a passion for product strategy and a track record of delivering successful products, we'd love to hear from you.",
    },
]

export default function JoinUs() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center bg-gray-100" style={{ backgroundImage: "url('/background-image.jpg')" }}>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Open Roles</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map(job => (
                        <div key={job.id} className="border p-8 rounded-lg flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
                                <p className="mb-4">{job.description}</p>
                            </div>
                            <div>
                                <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Apply Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}