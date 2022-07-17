import React from 'react'
import { useSelector } from 'react-redux'

function PageIntro({title,description}) {
  const mode = useSelector(state=>state.theme?.theme)
  return (
    <main className={`w-full ${mode?"text-white":"  const mode = useSelector(state=>state.theme?.theme)"} items-center flex flex-col space-y-4 my-24`}>
        <h1 className='uppercase text-4xl tracking-widest font-extrabold'>{title}</h1>
        <div className=' bg-yellow-400 h-1 w-6  rounded-full '></div>
        <p className='text-center  md:text-base md:w-1/2 text-sm text-lighter tracking-wide px-2'>{description}</p>
    </main>
  )
}

export default PageIntro