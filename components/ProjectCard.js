import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

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
      <div className="snap-center  flex flex-col md:flex-row items-center md:space-y-0 z-40 space-y-8 w-[87%] shrink-0 relative px-6 md:px-0  ">
        <Toaster position="bottom-left" />
        <div  className="relative h-60 md:h-[500px] w-full md:w-[50%] mx-auto z-40">
            <div className='absolute flex items-center justify-center inset-0 h-full w-full'>
                <p className='text-xs text-gray-400'>Image Loading...</p>
            </div>
          <Image
              title={title}
              loading='lazy'
              alt=""
              src={img}
              className="object-contain select-none rounded-md"
              layout="fill"
          />
        </div>

        <section className="flex items-center md:items-start flex-col z-40 space-y-5 md:space-y-10 md:w-[40%]">
          <p className="font-extrabold text-xl md:text-4xl selection:bg-yellow-400 decoration-yellow-400"><span className={`text-base ${mode ? "text-gray-300" : "text-gray-500"} text-gray-400 no-underline`}>{index+1} of {length}. </span>{title}</p>
          <p
              className={`text-sm ${
                  mode ? "text-gray-100" : "text-gray-500"
              } tracking-wide selection:bg-yellow-400 md:w-[85%] md:text-base`}
          >
            {desc}
          </p>

          <section className="w-full">
            <p className="font-bold text-xl mb-3  tracking-wide selection:bg-yellow-400">Tech Stack</p>
            <div className="text-sm md:w-[90%] w-full font-semibold grid md:grid-cols-4 grid-cols-3 md:gap-6 gap-4">
              {tools.map((tool) => (
                  <div
                      key={tool}
                      className={` ${
                          mode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"
                      } flex items-center justify-center md:px-3 px-8 py-2 rounded-md selection:bg-yellow-400 whitespace-nowrap`}
                  >
                    {tool}
                  </div>
              ))}
            </div>
          </section>
          <div className='w-full'>
              <button
                  onClick={() => handleClick(livelink)}
                  className="bg-yellow-400 select-none text-sm   hover:-translate-y-1 shadow-xl tracking-wider uppercase font-bold text-gray-800 py-3 px-10 transition-all duration-500 rounded-lg"
              >
                  live link
              </button>
          </div>
        </section>
      </div>
  );
}

export default ProjectCard;
