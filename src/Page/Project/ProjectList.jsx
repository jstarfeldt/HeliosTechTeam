import React, { useState } from "react";
import Card from "../../Component/Card";
import data from "../../data/projectData";
import "./project-list.scss";
import { SettingsOverscanTwoTone } from "@material-ui/icons";
import Layout from "../../Layout";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Select from 'react-select';
import Col from 'react-bootstrap/Col'
import TextField from '@material-ui/core/TextField';

import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
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
return (
    <div className="item_list">
      {data.map(project => (
          <a href={`/projects/${project.id}`} className="itemLink" ><Card project={project}/></a>
      ))}
    </div>
  );
};

export default ProjectList;
