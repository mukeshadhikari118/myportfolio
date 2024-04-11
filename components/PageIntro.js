import React from "react";
import { useSelector } from "react-redux";

function PageIntro({ title, description }) {
  const mode = useSelector((state) => state.theme?.theme);
  return (
    <main
      className={`w-full ${
        mode
          ? "text-white"
          : "  const mode = useSelector(state=>state.theme?.theme)"
      } items-center flex flex-col space-y-4  md:my-24 my-14`}
    >
      <h2 className="uppercase text-4xl selection:bg-yellow-400 tracking-widest font-extrabold">
        {title}
      </h2>
      <div className=" bg-yellow-400 h-1 w-6  rounded-full "></div>
      <p className="text-center selection:bg-yellow-400  md:text-base md:w-1/2 text-sm text-lighter tracking-wide px-2">
        {description}
      </p>
    </main>
  );
}

export default PageIntro;
