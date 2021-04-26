import React, { useState } from "react";
import Card from "./ProjectCard";
import data from "../../data/projectData";
import { TextField, Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"
import "./project-list.scss";

/**
 * Expects a state passed in  
 * @param {*} props 
 */
const ProjectSearchBar = ({setSearchFunction}) => {

  const [ inputStates, setInputStates ] = useState({ "sort" : "DATE DESC" });

  const buildSearchFunction = ( newState ) => {
    
    let newStates = {...inputStates, ...newState}

    /// Build filter Function
    function search( data ){

      // Create the filter function
      let dataFilter = ( dataPiece ) => {
        let isValid = true;

        if("title" in newStates){
          let inputStandard = newStates.title.toLowerCase();
          let titleStandard = dataPiece.title.toLowerCase();

          isValid = isValid && (
              newStates.title == "" || titleStandard.indexOf(inputStandard) != -1
            )
        }

        if("team" in newStates){
          
          let input = newStates.team;
          let data = dataPiece.team;

          isValid = isValid && (
              input == "" || data == input
            )
           
        }
        
        return isValid;
      }

      // Filter the data
      const filteredData = data.filter(dataFilter);
      
      // Create the sort function
      let dataSort = ( piece0, piece1 ) => {

        if( newStates.sort == "DATE ASC"){
          return piece0.date.diff(piece1.date);
        } else if( newStates.sort == "DATE DESC"){
          return -1*(piece0.date.diff(piece1.date));
        }

      }

      // If valid sort is requested
      if( 'sort' in newStates && newStates['sort'] != "" ){
        return filteredData.sort(dataSort);

      // Else return the filtered data
      } else {
        return filteredData;
      }
      
      
    }
    /// Set filter function
    setSearchFunction(() => search);
    setInputStates( newStates )
  }

  const Spacer = () => {
    return(<Col md={{xs:5}}></Col>);
  }

  const styles = {
    'select' : {
      'container' : {
        marginLeft : 'auto'
      },
      'input' : {
        minWidth: 80,
      }
    }
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
            onChange={(input) => buildSearchFunction({ 'title' : input.target.value })}
          />
        </Col>

        <Spacer/>
        <Col
          md={{
            xs: 1,
          }}
          style={{display : 'flex'}}
        >
          <FormControl
            style={styles.select.container}
          >
            <InputLabel id="project-sort-label">Sort By
            </InputLabel>
            <Select
              labelId='project-sort-label'
              id="project-sort"
              onChange={(input) => buildSearchFunction({ 'sort' : input.target.value })}
              style={styles.select.input}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="DATE ASC">Date ASC</MenuItem>
              <MenuItem selected value="DATE DESC">Date DESC</MenuItem>
            </Select>
          </FormControl>
        </Col>
      </Row>
    </Container>
  )
}

const ProjectList = () => {
  let history = useHistory();

  const [searchFunction, setSearchFunction] = useState(() => (data) => data);

  return (
    <div className="item_list">
      <ProjectSearchBar setSearchFunction={setSearchFunction}/>
      {searchFunction( data ).map(project => (
        <a className="itemLink" onClick={() => history.push(`/projects/${project.id}`)}>
          <Card project={project} />
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
