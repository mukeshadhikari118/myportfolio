import Image from "next/image";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/themeSlice";

function Navbar() {
  const dispatch = useDispatch();
  const [mobileView, setmobileView] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    dispatch(changeTheme(!checked));
  };
  const mode = useSelector((state) => state.theme?.theme);
  return (
    <>
      <main
        className={`h-[75px] sticky top-0 z-50  ${
          mobileView && "border-b"
        } select-none  transition-all duration-300 ${
          mode ? "bg-black text-white" : "bg-white text-gray-700"
        } shadow-md flex items-center justify-between px-4 md:px-6`}
      >
        <a href='#home'>
          <div
            onClick={() => setmobileView(false)}
            className="flex items-center uppercase space-x-2 "
          >
            <Image
              alt=""
              priority
              className="rounded-full cursor-pointer"
              src={"/pp2.webp"}
              height="45"
              width="45"
            />
            <h1 className="font-extrabold  tracking-widest cursor-pointer hover:text-yellow-400 transition-all duration-300  font-mono">
              Sankalpa Neupane
            </h1>
          </div>
        </a>

        <div className="md:flex items-center hidden font-extrabold font-mono text-sm  tracking-widest space-x-8 uppercase">
          <a
            href='#home'
            className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
          >
            <span>Home</span>
          </a>
          <a
              href='#about'
            className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
          >
           <span>Home</span>
          </a>
          <a
              href='#projects'
            className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
          >
           <span> Projects</span>
          </a>
            <a
                href='#experience'
                className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
            >
                <span>Experience</span>
            </a>
          <a
              href='#contact'
            className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
          >
            <span>Contact</span>
          </a>

          <Switch
            className="mb-2"
            onColor="#facc15"
            checkedIcon={
              <MoonIcon className="h-5 w-6 text-center absolute top-0.5 left-[5px] text-gray-600" />
            }
            uncheckedIcon={
              <SunIcon className="h-5 w-5 ml-1 mt-1 text-gray-100" />
            }
            onChange={handleChange}
            checked={checked}
          />
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
          <section
            className={`w-full absolute top-[75px] right-1 md:hidden text-right uppercase text-sm p-2  font-bold tracking-widest  shadow-xl z-50 h-auto flex flex-col  space-y-4 ${
              mode
                ? "bg-black shadow-white/20 text-white "
                : "bg-white text-gray-700"
            }`}
          >
            <a
                href='#home'
                className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
            >
             <span> Home</span>
            </a>
            <a
                href='#about'
                className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
            >
             <span> About</span>
            </a>
            <a
                href='#projects'
                className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
            >
            <span>  Projects</span>
            </a>
            <a
                href='#experience'
                className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
            >
             <span> Experience</span>
            </a>
            <a
                href='#contact'
                className="cursor-pointer hover:text-yellow-400 transition-all duration-300"
            >
              <span>Contact</span>
            </a>
           <div className='flex items-center justify-end pr-2'>
             <Switch
                 className="pb-4"
                 onColor="#facc15"
                 checkedIcon={
                   <MoonIcon className="h-5 w-6 text-center absolute top-0.5 left-[5px] text-gray-600" />
                 }
                 uncheckedIcon={
                   <SunIcon className="h-5 w-5 ml-1 mt-1 text-gray-100 " />
                 }
                 onChange={handleChange}
                 checked={checked}
             />
           </div>
          </section>
        )}
      </main>

      {/* //todo: Only visible in mobile devices */}
    </>
  );
}

export default Navbar;
