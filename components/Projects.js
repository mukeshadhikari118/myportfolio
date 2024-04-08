import axios from "axios";
import React, { useEffect, useState } from "react";
import PageIntro from "./PageIntro";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const res = await axios.get("/api/projects");
      setProjects(res.data);
    };
    getProjects();
  }, []);
  return (
    <div id="projects">
      <PageIntro
        title="projects"
        description="Here you will find some of the personal projects that I created with each project containing all of the tech stacks used"
      />
      <section className="flex items-start overflow-scroll snap-x snap-mandatory relative scrollbar-hide ">
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
