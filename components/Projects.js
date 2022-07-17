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
        description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />
      <section className="space-y-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            img={project.img}
            desc={project.desc}
            tools={project.tools}
            livelink={project.livelink}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
