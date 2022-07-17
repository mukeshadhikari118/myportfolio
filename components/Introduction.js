import Link from 'next/link';
import React from 'react'
import {  FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Introduction() {
  return (
  
    <main id='home' className='bg-gradient-to-b from-gray-100 to-gray-200 h-[550px] md:h-[717px]  flex flex-col text-center justify-center items-center space-y-10 relative'>
        <h1 className='font-extrabold text-3xl md:text-6xl  uppercase tracking-widest'>hey i'm sankalpa Neupane</h1>
        <p className='font-light tracking-wider md:font-normal md:text-lg text-gray-800 px-4 md:w-1/2'> A MERN Developer focused on building beautiful web applications using various modern tools and libraries</p>
        <button className='bg-yellow-400 hover:-translate-y-1 shadow-xl tracking-wider uppercase font-bold text-gray-800 py-3 px-16 transition-all duration-500 rounded-lg'>projects</button>
        <section className='absolute left-0  bg-white rounded-full shadow-sm px-3 py-4 hidden lg:flex flex-col space-y-6'>
        <a target='_blank' rel="noopener noreferrer"  href='https://www.linkedin.com/in/sankalpa-neupane-215639208/'><FaLinkedin className='h-8 w-8 cursor-pointer hover:text-[#0e76a8]'/></a>
        <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/Sankhalifa.33/'><FaFacebook className='h-8 w-8 cursor-pointer hover:text-[#4267B2]'/></a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.youtube.com/channel/UCaFCokjzNa0QLTQ8ZAOyU_g"><FaYoutube className='h-8 w-8 cursor-pointer hover:text-[#c4302b]'/></a>
        <a target='_blank' rel="noopener noreferrer" href="https://github.com/sankalpa-sys"><FaGithub className='h-8 w-8 cursor-pointer hover:text-black'/></a>
       <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/_sankalpa_neupane/?hl=en"> <FaInstagram className='h-8 w-8 cursor-pointer hover:text-[#C13584]'/></a>
    </section>
        
    </main>
   

  )
}

export default Introduction 