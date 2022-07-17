import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'

import About from '../components/About'
import axios from 'axios'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import { useSelector } from 'react-redux'

export default function Home() {
  const mode = useSelector(state=>state.theme?.theme)


  return (
   <div className={`${mode?"bg-gray-900 text-white":"bg-white"}`}>
    <Head>
      <title>Sankalpa Neupane</title>
    </Head>
    <Navbar/>
    <Introduction/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    <script src="//code.tidio.co/dvp9qw1ryzdx86e6ytqmus8xexakp8ak.js" async></script>
   </div>
  )
}
