import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'

import About from '../components/About'
import axios from 'axios'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function Home() {


  return (
   <div className='bg-gray-100'>
    <Head>
      <title>Sankalpa Neupane</title>
    </Head>
    <Navbar/>
    <Introduction/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
   </div>
  )
}
