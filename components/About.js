import axios from "axios";
import React, { useEffect, useState } from "react";
import PageIntro from "./PageIntro";
import { Link as Link2 } from "react-scroll";
import { useSelector } from "react-redux";

function About() {
  const mode = useSelector((state) => state.theme?.theme);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getSkills = async () => {
      const res = await axios.get("/api/skills");
      setSkills(res.data);
    };
    getSkills();
  }, []);

  return (
    <div id="about">
      <PageIntro
        title="About me"
        description="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
      />
      <main className="h-auto md:max-w-6xl mx-auto md:flex   md:space-x-10 py-4  px-5">
        <section className="md:w-1/2  md:p-2">
          <h1 className="font-bold text-xl mb-6 tracking-wide selection:bg-yellow-400 selection:text-black">
            Get to know me!
          </h1>
          <div
            className={` ${
              mode ? "text-white" : "text-gray-600"
            } tracking-wide text-[14.5px] flex flex-col space-y-3`}
          >
            <p className="selection:bg-yellow-400 ">
              I&apos;m a <span className="font-bold">MERN Developer</span>{" "}
              focused on building beautiful web applications that leads to the
              success of the overall product. Check out some of my work in the{" "}
              <Link2 to="projects" smooth={true}  offset={-120}  className="font-bold cursor-pointer hover:text-yellow-400">Projects</Link2> section.
            </p>
            <p className="selection:bg-yellow-400 ">  
              I also like helping others with the stuff that I have
              learned over the years in{" "}
              <span className="font-bold">Web Development </span> and I am a <span className="font-bold">Problem solver</span>. Feel free to Connect or Follow
              me on my LinkedIn.
            </p>
            <p className="selection:bg-yellow-400 ">
              I&apos;m open to <span className="font-bold">Job</span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don&apos;t hesitate to <span className="font-bold">contact</span>{" "}
              me.
            </p>
          </div>
          <Link2 to="contact" smooth={true} offset={-20}>
            {" "}
            <button className=" select-none bg-yellow-400 hover:-translate-y-1 shadow-xl tracking-wider text-sm uppercase font-bold text-gray-800 py-3 px-12 transition-all duration-500 rounded-lg my-10">
              contact
            </button>
          </Link2>
        </section>

        <section className="md:w-1/2  px-2 py-2">
          <h1 className="font-bold text-xl selection:bg-yellow-400 mt-10 md:mt-0 mb-6  tracking-wide">
            My Skills
          </h1>
          <div className="text-sm  font-semibold flex space-x-4 flex-wrap">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={` ${
                  mode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"
                } my-2  p-3  max-w-fit rounded-md selection:bg-yellow-400`}
              >
                {skill.title}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
