import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

function ProjectCard({title,img,desc,tools,livelink}) {
  const mode = useSelector(state=>state.theme?.theme)
  const router = useRouter()
  const handleClick = (link) => {
    if(!link){
      toast.error("Link not available!")
    }else{
      router.push(link)
    }
  }

  return (
    <main className=' px-6 md:px-20  py-4 flex flex-col md:flex-row items-center md:space-y-0  space-y-14'>
      <Toaster  position="bottom-right"/>
        <div className='relative h-72 md:h-[500px] w-3/4 md:w-[50%] mx-auto'>
            <Image alt='' src={img} className='object-cover rounded-md' layout='fill'/>
        </div>

       <section className='flex items-center md:items-start flex-col space-y-5 md:space-y-10 md:w-[40%]' >
       <h1 className='font-extrabold text-xl md:text-4xl'>{title}</h1>
        <p className={`text-sm text-gray-500 ${mode?"text-gray-200":"text-gray-500"} tracking-wide md:w-[85%] md:text-base`} >{desc}</p>

        <section className='w-full'>
          <h1 className='font-bold text-xl mb-3  tracking-wide'>Tools used</h1>
        <div className='text-sm  w-full font-semibold flex space-x-4 flex-wrap'>
                    {tools.map((tool) => (
                         <div key={tool} className={` ${mode?"bg-gray-800 text-white":"bg-gray-200 text-gray-700"} my-2  p-3  max-w-fit rounded-md`}>
                        {tool}
                     </div>
                    ))}

                    

                </div>
        </section>
        <button onClick={()=>handleClick(livelink)}  className='bg-yellow-400 text-sm   hover:-translate-y-1 shadow-xl tracking-wider uppercase font-bold text-gray-800 py-3 px-10 transition-all duration-500 rounded-lg'>live link</button>
       </section>
    </main>
  )
}

export default ProjectCard