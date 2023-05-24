import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function NavLink({ to, children, dropdown }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    if (dropdown) {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (dropdown) {
      setShowDropdown(false);
    }
  };
  return (
    <div className="relative">
      <a
        href={to}
        className={`mx-4 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300`}
              onMouseEnter={handleMouseEnter}
              
      >
        {children}
      </a>
      {dropdown && showDropdown && (
        <div className="absolute top-full left-0 bg-white py-2 text-neutral-800 rounded shadow-lg"
        onMouseLeave={handleMouseLeave}
        >
          <Link href="/sahaiStories" className="block px-4 py-2 hover:bg-gray-100">
            #SahaiStories
          </Link>
          <Link href="/category2" className="block px-4 py-2 hover:bg-gray-100">
            Understanding Mental Health
          </Link>
          <Link href="/category3" className="block px-4 py-2 hover:bg-gray-100">
            Others
          </Link>
        </div>
      )}
    </div>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen  bg-orange-100 transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <Link href="/">
          <Image
            width={100}
            height={100}
            alt={"sahai logo"}
            src={`/images/sahailogo.png`}
          />
        </Link>
        {/* <Link className="text-xl font-semibold justify-center" href="/">Sahai</Link> */}
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-normal my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Resources
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/blog"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Blog
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Podcasts
        </Link>
        <Link
          className="text-xl font-normal my-4 "
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Events
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/ourStory"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Our Story
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Meet the team
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Get invlolved
        </Link>
      </div>
    </div>
  );
}
// bg-[#c29c81]
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-[#435559]   px-4 py-4 h-20 items-center z-10 ">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link href="/">
          <Image
            width={90}
            height={90}
            alt={"sahai logo"}
            src={`/images/sahailogo.png`}
          />
        </Link>
        {/* <Link className="text-2xl mx-auto font-semibold" href="/">Sahai</Link> */}
      </div>
      <div className="w-9/12 flex justify-end  items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden "
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/contact">Resources</NavLink>
          <NavLink to="#" dropdown>
            Blog
          </NavLink>
          <NavLink to="https://open.spotify.com/show/2Y17fgONRJ1jkhb7ZpAisD?si=32131090379f495b">
            Podcasts
          </NavLink>
          <NavLink to="/contact">Event</NavLink>
          <NavLink to="/ourStory">Our Story</NavLink>
          <NavLink to="/getInvolved">Get Involved</NavLink>
          <NavLink to="/meetTheTeam">Meet The Team</NavLink>
        </div>
      </div>
    </nav>
  );
}
