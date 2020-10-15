import React from "react";
import Card from "../../Component/Card";
import data from "../../data/projectData";
import { TextField } from "@material-ui/core";
import { Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./project-list.scss";

const ProjectList = () => {
  let history = useHistory();

  const handleCardClick = () => {
    history.push("projects");
  };

  return (
    <div className="item_list">
      <Grid container spacing={1}>
        <Grid container item>
          <TextField></TextField>
        </Grid>
      </Grid>
      {data.map(d => (
        <Link
          to={`/projects/${d.id}`}
          key={d.id}
          textDecoration="none"
          className="item"
        >
          <Card title={d.title} summary={d.summary} id={d.id} date={d.date} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
