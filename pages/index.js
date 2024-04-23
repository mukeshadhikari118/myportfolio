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
    <main className={`${mode ? "bg-gray-900 text-white" : "bg-white"} snap-y`}>
      <Head>
        <title>Sankalpa Neupane</title>
          <meta name='description'
                content="Explore the creative portfolio of Sankalpa Neupane, featuring imaginative web designs and innovative software projects that blend artistry and technology."
                lang="en">
          </meta>
          <meta property="og:title" content="Sankalpa Neupane Portfolio" />
          <meta property="og:type" content='website' />
          <meta property="og:description" content='Explore the creative portfolio of Sankalpa Neupane, featuring imaginative web designs and innovative software projects that blend artistry and technology.' />
          <meta property="og:url" content='https://www.sankalpaneupane.com.np'/>
          <meta property="og:image" content='https://image.hamropatro.com/f1GgaqW7kO2CUEgm76Fxoj7n8jLywR0sXEz1TGl9REk/rs:fit:0:0/g:no/aHR0cHM6Ly9ldmVyZXN0ZGIuc2dwMS5jZG4uZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS9wYXJld2EvaW1hZ2UtcHJveHktY29udmVyc2lvbi8yOGNkYWFjMi1mNzRjLTQ2MmItOGI0YS1kYTJjN2I4MDViNTA.webp' />
          <link rel="canonical" href='https://www.sankalpaneupane.com.np' />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico"/>
          <meta name="theme-color" content="#ffffff"/>
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
    </main>
  );
}
