import React from "react";
import Card from "./ProjectCard";
import data from "../../data/projectData";
import "./project-list.scss";

const ProjectList = () => {
return (
    <div className="item_list">
      {data.map(project => (
          <a href={`/projects/${project.id}`} className="itemLink"><Card project={project}/></a>
      ))}
    </div>
  );
};

export default ProjectList;
