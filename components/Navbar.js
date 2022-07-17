import Image from "next/image";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Link as Link2 } from 'react-scroll'

function Navbar() {
  const [mobileView, setmobileView] = useState(false);
  console.log(mobileView);
  return (
    <>
      <main
        className={`h-[75px] sticky top-0 z-50  ${
          mobileView && "border-b"
        } select-none  transition-all duration-500 bg-white shadow-md flex items-center justify-between px-4 md:px-6`}
      >
       <Link href={'/'}>
       <div className="flex items-center uppercase space-x-2 ">
          <Image
          alt=""
            priority
            className="rounded-full cursor-pointer"
            src={"/pp.jpg"}
            height="45"
            width="45"
          />
          <p className="font-extrabold text-gray-700 tracking-widest cursor-pointer hover:text-yellow-400 transition-all duration-300  font-mono">
            Sankalpa Neupane
          </p>
        </div>
       </Link>

        <div className="md:flex hidden font-extrabold font-mono text-sm text-gray-700 tracking-widest space-x-8 uppercase">
          <Link2 to="home" smooth={true} offset={-150} className="cursor-pointer hover:text-yellow-400 transition-all duration-300">Home</Link2>
          <Link2 to="about" smooth={true} offset={-140} className="cursor-pointer hover:text-yellow-400 transition-all duration-300">About</Link2>
          <Link2 to="projects" smooth={true} offset={-120} className="cursor-pointer hover:text-yellow-400 transition-all duration-300">Projects</Link2>
          <Link2 to="contact" smooth={true} offset={-20} className="cursor-pointer hover:text-yellow-400 transition-all duration-300">Contact</Link2>
        </div>
        {!mobileView ? (
          <MenuIcon
            onClick={() => setmobileView(true)}
            className="h-7 w-7 md:hidden text-gray-600 cursor-pointer"
          />
        ) : (
          <XIcon
            onClick={() => setmobileView(false)}
            className="h-7 w-7 md:hidden text-gray-600 cursor-pointer"
          />
        )}

{mobileView && (
        <section className="bg-white w-full absolute top-[75px] right-1 md:hidden text-right uppercase text-sm  font-bold tracking-widest text-gray-800 shadow-xl z-50 h-auto transition-all duration-500 flex flex-col  space-y-4 ">
          <Link2 onClick={()=>setmobileView(false)} to="home" smooth={true} offset={-100} className="nav_links">Home</Link2>
          <Link2 onClick={()=>setmobileView(false)} to="about" smooth={true} offset={-110}  className="nav_links">About</Link2>
          <Link2 onClick={()=>setmobileView(false)} to="projects" smooth={true} offset={-110} className="nav_links">Projects</Link2>
          <Link2 onClick={()=>setmobileView(false)} to="contact" smooth={true} offset={0} className="nav_links">Contact</Link2>
        </section>
      )}
      </main>

      {/* //todo: Only visible in mobile devices */}
     
    </>
  );
}

export default Navbar;
