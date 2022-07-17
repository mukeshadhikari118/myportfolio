import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white px-4 py-10 space-y-8">
      <main className="space-y-10 md:flex flex-row-reverse  items-center justify-between md:px-16 ">
        <div className="space-y-4">
          <h1 className="uppercase font-extrabold tracking-[1px] text-lg">social</h1>
          <div className="flex items-center space-x-3 text-gray-700">
          <a target='_blank' rel="noopener noreferrer"  href='https://www.linkedin.com/in/sankalpa-neupane-215639208/'><FaLinkedin className='h-5 w-5 cursor-pointer hover:text-[#0e76a8]'/></a>
        <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/Sankhalifa.33/'><FaFacebook className='h-5 w-5 cursor-pointer hover:text-[#4267B2]'/></a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.youtube.com/channel/UCaFCokjzNa0QLTQ8ZAOyU_g"><FaYoutube className='h-5 w-5 cursor-pointer hover:text-[#c4302b]'/></a>
        <a target='_blank' rel="noopener noreferrer" href="https://github.com/sankalpa-sys"><FaGithub className='h-5 w-5 cursor-pointer hover:text-black'/></a>
       <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/_sankalpa_neupane/?hl=en"> <FaInstagram className='h-5 w-5 cursor-pointer hover:text-[#C13584]'/></a>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="uppercase font-extrabold tracking-[1px] text-lg">Sankalpa neupane</h1>
          <p className="text-[13px] text-gray-700 md:w-[65%]">A MERN Developer focused on building beautiful web applications using various modern tools and libraries</p>
        </div>
      </main>
      <hr />
     <div>
     <p className="text-[10px] text-gray-700 text-center pt-3">&copy; Copyright 2022. Made by Sankalpa Neupane</p>
     </div>
    </footer>
  );
}

export default Footer;
