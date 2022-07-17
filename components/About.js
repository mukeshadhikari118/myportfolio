import axios from 'axios'
import React, { useEffect,useState } from 'react'
import PageIntro from './PageIntro'
import { Link as Link2 } from 'react-scroll'

function About() {
    const [skills, setSkills] = useState([])
    useEffect(() => {
      const getSkills = async() => {
        const res = await axios.get('/api/skills')
        setSkills(res.data)
      }
      getSkills()
    }, [])
    
  return (
    <div id='about' className=''>
        <PageIntro title="About me" description='Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'/>
        <main className='h-auto md:max-w-6xl mx-auto md:flex   md:space-x-10 py-4  px-5'>
           <section className='md:w-1/2  md:p-2'>
           <h1 className='font-bold text-xl mb-6 tracking-wide'>Get to know me!</h1>
            <div className='text-gray-600 tracking-wide text-[14.5px] flex flex-col space-y-3'>
                <p>
                I&apos;m a <span className='font-bold'>MERN Developer</span> focused on building beautiful web applications that leads to the success of the overall product. Check out some of my work in the <span className='font-bold'>Projects</span> section.
                </p>
                <p>I also like sharing content related to the stuff that I have learned over the years in <span className='font-bold'>Web Development </span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to  Web Development and Programming.</p>
                <p>I&apos;m open to <span className='font-bold'>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <span className='font-bold'>contact</span> me.</p>
            </div>
           <Link2 to='contact' smooth={true} offset={-20}> <button className='bg-yellow-400 hover:-translate-y-1 shadow-xl tracking-wider text-sm uppercase font-bold text-gray-800 py-3 px-12 transition-all duration-500 rounded-lg my-10'>contact</button></Link2>
           </section>

           <section className='md:w-1/2  px-2 py-2'>
           <h1 className='font-bold text-xl mt-10 md:mt-0 mb-6  tracking-wide'>My Skills</h1>
                <div className='text-sm text-gray-700 font-semibold flex space-x-4 flex-wrap'>
                    {skills.map((skill) => (
                         <div key={skill.id} className='bg-gray-200 my-2  p-3  max-w-fit rounded-md '>
                        {skill.title}
                     </div>
                    ))}

                    

                </div>
           </section>
        </main>
    </div>
  )
}

export default About