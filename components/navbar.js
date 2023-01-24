import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen  bg-orange-100 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
            <Link href='/'>
          <Image
                width={50}
                height={50}
                alt={"sahai logo"}
                src={`/images/sahailogo.png`}
              />
          </Link>
                {/* <Link className="text-xl font-semibold justify-center" href="/">Sahai</Link> */}
            </div>
            <div className="flex flex-col ml-4">
            <a className="text-xl font-normal my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Resources
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Blog
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Podcasts
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Events
                </a>
                <a className="text-xl font-normal my-4" href="/ourStory" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Our Story
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Meet the team
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                   Get invlolved
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-orange-100  px-4 py-4 h-20 items-center ">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
            <Link href='/'>
          <Image
                width={50}
                height={50}
                alt={"sahai logo"}
                src={`/images/sahailogo.png`}
              />
          </Link>
                {/* <Link className="text-2xl mx-auto font-semibold" href="/">Sahai</Link> */}
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/contact">
                        Resources
                    </NavLink>
                    <NavLink to="/contact">
                        Blog
                    </NavLink>
                    <NavLink to="/contact">
                        Podcasts
                    </NavLink>
                    <NavLink to="/contact">
                        Event
                    </NavLink>
                    <NavLink to="/about">
                        About Us
                    </NavLink>
                    <NavLink to="/contact">
                        Get Involved
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}