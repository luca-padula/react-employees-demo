import React, {Component} from 'react';
import MainContainer from './MainContainer';
const axios = require('axios');
const moment = require('moment');

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    axios.get('https://damp-sands-52459.herokuapp.com/projects').then((response) => {
      this.setState({
        projects: response.data
      });
    }).catch(function(err) {
      console.log(err);
    });
  }
  render() {
    return (
      <MainContainer sidebar="Projects">
        <h1 className="page-header">Projects</h1>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Name</th><th>Description</th><th>Start Date</th><th>End Date</th></tr>
            </thead>
            <tbody>
              {this.state.projects.map(function (project, index) {
                return (
                  <tr key={project._id}>
                    <td>{project.ProjectName}</td>
                    <td>{project.ProjectDescription}</td>
                    <td>{moment(project.ProjectStartDate).utc().format("LL")}</td>
                    <td>{project.ProjectEndDate ? moment(project.ProjectEndDate).format("LL") : "n/a"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </MainContainer>
    );
  }
}

export default Projects;