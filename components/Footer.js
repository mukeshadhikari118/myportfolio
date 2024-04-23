import React from "react";
import { FaLinkedin,FaFacebook,FaYoutube,FaInstagram,FaGithub   } from "react-icons/fa";
import { useSelector } from "react-redux";

function Footer() {
  const mode = useSelector((state) => state.theme?.theme);
  return (
    <footer
      className={` ${
        mode ? "bg-black text-gray-100" : "bg-white text-gray-700"
      } px-4 py-10 space-y-8`}
    >
      <div className="space-y-10 md:flex flex-row-reverse  items-center justify-between md:px-16 ">
        <div className="space-y-4">
          <p className="uppercase font-extrabold tracking-[1px] text-lg selection:bg-yellow-400">
            social
          </p>
          <div className="flex items-center space-x-3 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sankalpa-neupane-215639208/"
            >
              <FaLinkedin className="h-5 w-5 cursor-pointer hover:text-[#0e76a8]" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Sankhalifa.33/"
            >
              <FaFacebook className="h-5 w-5 cursor-pointer hover:text-[#4267B2]" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCaFCokjzNa0QLTQ8ZAOyU_g"
            >
              <FaYoutube className="h-5 w-5 cursor-pointer hover:text-[#c4302b]" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sankalpa-sys"
            >
              <FaGithub className="h-5 w-5 cursor-pointer" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/_sankalpa_neupane/?hl=en"
            >
              {" "}
              <FaInstagram className="h-5 w-5 cursor-pointer hover:text-[#C13584]" />
            </a>
          </div>
        </div>

        <div className="md:space-y-4 space-y-2">
          <p className="uppercase font-extrabold tracking-[1px] text-lg selection:bg-yellow-400">
            Sankalpa neupane
          </p>
          <p className="text-[13px]  md:w-[65%] selection:bg-yellow-400">
          A software engineer with experience in MERN stack, React, Next JS, Ruby, Python and many more
          </p>
          <a href='/sankalpa-neupane-resume.pdf' download><button className="bg-yellow-400  select-none text-[10px] hover:-translate-y-1 shadow-xl tracking-wider uppercase font-extrabold text-gray-800 py-3 mt-5 px-10 transition-all duration-500 rounded-lg">
         Download cv
        </button></a>
        </div>
      </div>
      <hr />
      <div>
        <p className="text-[10px]  selection:bg-yellow-400 text-center">
          &copy; Copyright {new Date().getFullYear()}. Made by Sankalpa Neupane
        </p>
      </div>
    </footer>
  );
}

export default Footer;
