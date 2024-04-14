import axios from "axios";
import React, { useEffect, useState } from "react";
import PageIntro from "./PageIntro";
import ProjectCard from "./ProjectCard";
import {useRouter} from "next/router";
function Projects() {
    const router = useRouter()
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const res = await axios.get("/api/projects");
      setProjects(res.data);
    };
    getProjects();
  }, []);

  const handleMoreProjects = () => {
      router.push("https://github.com/sankalpa-sys?tab=repositories")
    }
  return (
    <div id="projects">
      <PageIntro
        title="projects"
        description="Here are some of my personal projects with their respective tech stack. For a comprehensive list of all projects, visit my GitHub: "
        link={<a href="https://github.com/sankalpa-sys?tab=repositories">here</a>}
      />
       <div className='flex item-center justify-center '>
       </div>
      <section className="flex items-start overflow-scroll snap-x snap-mandatory relative scrollbar-hide space-x-4 px-5 ">
        {projects.map((project,index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            img={project.img}
            desc={project.desc}
            tools={project.tools}
            livelink={project.livelink}
            index={index}
            length={projects.length}
          />
        ))}
      </section>

    </div>
  );
}

export default Projects;
