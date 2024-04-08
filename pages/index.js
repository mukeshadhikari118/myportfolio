import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import { useSelector } from "react-redux";

export default function Home() {
  const mode = useSelector((state) => state.theme?.theme);

  return (
    <div className={`${mode ? "bg-gray-900 text-white" : "bg-white"} snap-y`}>
        <meta name='Sankalpa Neupane Portfolio' content='Discover the creative journey of Sankalpa Neupane through a captivating portfolio. From imaginative web designs to intricate software projects, delve into the fusion of artistry and technology. With a commitment to excellence and a passion for innovation, explore how Sankalpa Neupane brings ideas to life, leaving a lasting impact in the world of design and technology.'></meta>
      <Head>
        <title>Sankalpa Neupane</title>
      </Head>
      <Navbar />
     
      <Introduction />
     <About/>
      <Projects />
        <Experience/>
      <Contact />
      <Footer />
      <script
        src="//code.tidio.co/dvp9qw1ryzdx86e6ytqmus8xexakp8ak.js"
        async
      ></script>
    </div>
  );
}
