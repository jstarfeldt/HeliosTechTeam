import React, { useState } from "react";
import Card from "../../Component/Card";
import data from "../../data/projectData";
<<<<<<< HEAD
import { TextField, Select } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom";
=======
>>>>>>> origin/AlexP
import "./project-list.scss";
import { SettingsOverscanTwoTone } from "@material-ui/icons";

/**
 * Expects a state passed in 
 * @param {*} props 
 */
const ProjectSearchBar = ({setSearchFunction}) => {

  const [ inputStates, setInputStates ] = useState({});

  const buildSearchFunction = ( newState ) => {
    
    let newStates = {...inputStates, ...newState}

    /// Build filter Function
    function search( data ){

      /// Filter the data array
      let dataFilter = ( dataPiece ) => {
        let isValid = true;

        if("title" in newStates){
          let inputStandard = newStates.title.toLowerCase();
          let titleStandard = dataPiece.title.toLowerCase();

          isValid = isValid && (
              newStates.title == "" || titleStandard.indexOf(inputStandard) != -1
            )
        }
        
        return isValid;
      }

      const filteredData = data.filter(dataFilter);

      let dataSort = ( piece0, piece1 ) => {

        if( newStates.sort == "DATE ASC"){
          return piece0.date.diff(piece1.date);
        } else if( newStates.sort == "DATE DESC"){
          return -1*(piece0.date.diff(piece1.date));
        }

      }

      let searchData = filteredData;

      if( 'sort' in newStates ){
        searchData = filteredData.sort(dataSort);
      }
      
      return searchData
    }
    /// Set filter function
    setSearchFunction(() => search);
    setInputStates( newStates )
  }

  return (
    <Container>
      <Row>
        <Col
          md={{
            xs:1
          }}
        >
          <TextField
            id="title" 
            label="Title" 
            variant="filled" 
            onChange={(input) => buildSearchFunction({ 'title' : input.target.value })}
          />
        </Col>
        <Col md={{xs:5}}></Col>
        <Col
          md={{
            xs: 1,
          }}
        >
          <Select
            onChange={(input) => buildSearchFunction({ 'sort' : input.target.value })}
          >
            <option value="DATE ASC">Date ASC</option>
            <option value="DATE DESC">Date DESC</option>
          </Select>
        </Col>
      </Row>
    </Container>
  )
}

const ProjectList = () => {
<<<<<<< HEAD
  let history = useHistory();

  const [searchFunction, setSearchFunction] = useState(() => (data) => data);
  
  const handleCardClick = () => {
    history.push("projects");
  };

  return (
    <div className="item_list">
      <ProjectSearchBar setSearchFunction={setSearchFunction}/>
      {searchFunction( data ).map(d => (
        <Link
          to={`/projects/${d.id}`}
          key={d.id}
          textDecoration="none"
          className="item"
        >
          <Card project={d} />
        </Link>
=======
return (
    <div className="item_list">
      {data.map(project => (
          <a href={`/projects/${project.id}`} className="itemLink" ><Card project={project}/></a>
>>>>>>> origin/AlexP
      ))}
    </div>
  );
};

export default ProjectList;
