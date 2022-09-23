import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link as Link2 } from "react-scroll";
import { useTypewriter, Cursor} from 'react-simple-typewriter'

function Introduction() {
  const mode = useSelector((state) => state.theme?.theme);
  const [text] = useTypewriter({
    words: [" hey! I'm Sankalpa ", 'a web developer', 'a react developer'],
    loop: false,
    delaySpeed: 2000,
    typeSpeed: 100
    
  })
  return (
    <main
      id="home"
      className={`bg-gradient-to-b ${
        mode
          ? "from-gray-900 text-white to-black"
          : "from-gray-100 text-gray-800 to-gray-200"
      }  h-[550px] md:h-[802px]  flex flex-col text-center justify-center items-center space-y-10 relative transition-all duration-300`}
    >
      <h1 className="font-extrabold selection:bg-yellow-400 text-3xl md:text-6xl  uppercase tracking-widest">
       {text} <Cursor />
      </h1>
      <p className="font-light text-sm selection:bg-yellow-400 tracking-wider md:font-normal md:text-lg  px-4 md:w-1/2">
        {" "}
        I just love to make beautiful web applications using modern tools and technologies
      </p>
      <Link2 to="projects" smooth={true} offset={-120}>
        <button className="bg-yellow-400 select-none hover:-translate-y-1 shadow-xl tracking-wider uppercase font-bold text-gray-800 py-3 px-16 transition-all duration-500 rounded-lg">
          projects
        </button>
      </Link2>
      <section
        className={`absolute left-0 ${
          mode ? "bg-black" : "bg-white "
        }  rounded-full shadow-xl px-3 py-4 hidden lg:flex flex-col space-y-6`}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sankalpa-neupane-215639208/"
        >
          <FaLinkedin className="h-8 w-8 cursor-pointer hover:text-[#0e76a8]" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/Sankhalifa.33/"
        >
          <FaFacebook className="h-8 w-8 cursor-pointer hover:text-[#4267B2]" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCaFCokjzNa0QLTQ8ZAOyU_g"
        >
          <FaYoutube className="h-8 w-8 cursor-pointer hover:text-[#c4302b]" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sankalpa-sys"
        >
          <FaGithub className="h-8 w-8 cursor-pointer " />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/_sankalpa_neupane/?hl=en"
        >
          {" "}
          <FaInstagram className="h-8 w-8 cursor-pointer hover:text-[#C13584]" />
        </a>
      </section>
    </main>
  );
}

export default Introduction;
