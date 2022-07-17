import Image from 'next/image'
import React from 'react'

function ProjectCard({title,img,desc}) {
  return (
    <main className=' px-6 md:px-20  py-4 flex flex-col md:flex-row items-center md:space-y-0  space-y-14'>
        <div className='relative h-72 md:h-[500px] w-3/4 md:w-[50%] mx-auto'>
            <Image alt='' src={img} className='object-cover rounded-md' layout='fill'/>
        </div>

       <section className='flex items-center md:items-start flex-col space-y-5 md:space-y-10 md:w-[40%]' >
       <h1 className='font-extrabold text-xl md:text-4xl'>{title}</h1>
        <p className='text-sm text-gray-500 tracking-wide md:w-[85%] md:text-base '>{desc}</p>
        <button className='bg-yellow-400 text-sm   hover:-translate-y-1 shadow-xl tracking-wider uppercase font-bold text-gray-800 py-3 px-10 transition-all duration-500 rounded-lg'>case study</button>
       </section>
    </main>
  )
}

export default ProjectCard