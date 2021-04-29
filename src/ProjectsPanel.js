import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios');
const moment = require('moment');

class ProjectsPanel extends Component {
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
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Projects</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.projects.map(function(project, index) {
                  return (
                    <tr key={project._id}>
                      <td>{project.ProjectName}</td>
                      <td>Active {moment().diff(moment(project.ProjectStartDate), 'days')} Days</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
        </div>
      </div>
    );
  }
}

export default ProjectsPanel;