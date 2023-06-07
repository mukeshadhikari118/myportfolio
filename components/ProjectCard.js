import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import {motion} from 'framer-motion'

function ProjectCard({ title, img, desc, tools, livelink, index, length }) {
  const mode = useSelector((state) => state.theme?.theme);
  const router = useRouter();
  const handleClick = (link) => {
    if (!link) {
      toast.error("Link not available!", {
        id: "clipboard",
      });
    } else {
      router.push(link);
    }
  };

  return (
      <main className="  snap-center  py-4 flex flex-col md:flex-row items-center md:space-y-0 z-40  space-y-14 w-full shrink-0 relative px-6 md:px-0  ">
        <Toaster position="bottom-left" />
        <motion.div initial={{
          opacity:0,
          y:-200
        }} whileInView={{
          opacity:1,
          y: 0
        }} transition={{
          duration: 1.2
        }} className="relative h-72 md:h-[500px] w-3/4 md:w-[50%] mx-auto z-40">
          <Image
              alt=""
              src={img}
              className="object-cover select-none rounded-md"
              layout="fill"
          />
        </motion.div>

        <section className="flex items-center md:items-start flex-col z-40 space-y-5 md:space-y-10 md:w-[40%]">
          <h1 className="font-extrabold text-xl md:text-4xl selection:bg-yellow-400 decoration-yellow-400"><span className="text-base text-gray-400 no-underline">{index+1} of {length}. </span>{title}</h1>
          <p
              className={`text-sm text-gray-500 ${
                  mode ? "text-gray-200" : "text-gray-500"
              } tracking-wide selection:bg-yellow-400 md:w-[85%] md:text-base`}
          >
            {desc}
          </p>

          <section className="w-full">
            <h1 className="font-bold text-xl mb-3  tracking-wide selection:bg-yellow-400">Tech Stack</h1>
            <div className="text-sm md:w-[90%] w-full font-semibold grid md:grid-cols-4 grid-cols-3 md:gap-6 gap-4">
              {tools.map((tool) => (
                  <div
                      key={tool}
                      className={` ${
                          mode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"
                      } flex items-center justify-center md:px-3 px-8 py-2 rounded-md selection:bg-yellow-400`}
                  >
                    {tool}
                  </div>
              ))}
            </div>
          </section>
          <button
              onClick={() => handleClick(livelink)}
              className="bg-yellow-400 select-none text-sm   hover:-translate-y-1 shadow-xl tracking-wider uppercase font-bold text-gray-800 py-3 px-10 transition-all duration-500 rounded-lg"
          >
            live link
          </button>
        </section>
        {/* <div className={`h-64 pr-20 w-full bg-pink-400/10 absolute  z-10 ${index%2===0?"-skew-y-12":"skew-y-12"}  overflow-hidden`}></div> */}
      </main>
  );
}

export default ProjectCard;
