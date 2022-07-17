import Image from "next/image";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { Link as Link2 } from 'react-scroll'
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/themeSlice";

function Navbar() {
  const dispatch = useDispatch()
  const [mobileView, setmobileView] = useState(false);
  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    setChecked(!checked)
    dispatch(changeTheme(!checked))
  }
  const mode = useSelector(state=>state.theme?.theme)
  return (
    <>
      <main
        className={`h-[75px] sticky top-0 z-50  ${
          mobileView && "border-b"
        } select-none  transition-all duration-300 ${mode?"bg-black text-white":"bg-white text-gray-700"} shadow-md flex items-center justify-between px-4 md:px-6`}
      >
       <Link2 to='home' smooth={true} offset={-100}>
       <div onClick={()=>setmobileView(false)} className="flex items-center uppercase space-x-2 ">
          <Image
          alt=""
            priority
            className="rounded-full cursor-pointer"
            src={"/pp2.png"}
            height="45"
            width="45"
          />
          <p className="font-extrabold  tracking-widest cursor-pointer hover:text-yellow-400 transition-all duration-300  font-mono">
            Sankalpa Neupane
          </p>
        </div>
       </Link2>

        <div className="md:flex items-center hidden font-extrabold font-mono text-sm  tracking-widest space-x-8 uppercase">
          <Link2 to="home" smooth={true} offset={-150} className="cursor-pointer hover:text-yellow-400 transition-all duration-300">Home</Link2>
          <Link2 to="about" smooth={true} offset={-140} className="cursor-pointer hover:text-yellow-400 transition-all duration-300">About</Link2>
          <Link2 to="projects" smooth={true} offset={-120} className="cursor-pointer hover:text-yellow-400 transition-all duration-300">Projects</Link2>
          <Link2 to="contact" smooth={true} offset={-20} className="cursor-pointer hover:text-yellow-400 transition-all duration-300">Contact</Link2>
          
          <Switch className="mb-2" onColor='#facc15' checkedIcon={<MoonIcon className="h-5 w-6 text-center absolute top-0.5 left-[5px] text-gray-600"/>} uncheckedIcon={<SunIcon className="h-5 w-5 ml-1 mt-1 text-gray-100"/>} onChange={handleChange} checked={checked} />
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
        <section className= {`w-full absolute top-[75px] right-1 md:hidden text-right uppercase text-sm  font-bold tracking-widest  shadow-xl z-50 h-auto transition-all duration-500 flex flex-col  space-y-4 ${mode?"bg-black shadow-white/20 text-white ":"bg-white text-gray-700"}`} >
          <Link2 onClick={()=>setmobileView(false)} to="home" smooth={true} offset={-100} className="nav_links">Home</Link2>
          <Link2 onClick={()=>setmobileView(false)} to="about" smooth={true} offset={-110}  className="nav_links">About</Link2>
          <Link2 onClick={()=>setmobileView(false)} to="projects" smooth={true} offset={-110} className="nav_links">Projects</Link2>
          <Link2 onClick={()=>setmobileView(false)} to="contact" smooth={true} offset={0} className="nav_links">Contact</Link2>
          <Switch className="pb-4 ml-[335px]" onColor='#facc15' checkedIcon={<MoonIcon className="h-5 w-6 text-center absolute top-0.5 left-[5px] text-gray-600"/>} uncheckedIcon={<SunIcon className="h-5 w-5 ml-1 mt-1 text-gray-100 "/>} onChange={handleChange} checked={checked} />
        </section>
      )}
      </main>

      {/* //todo: Only visible in mobile devices */}
     
    </>
  );
}

export default Navbar;
