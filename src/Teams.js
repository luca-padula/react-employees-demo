import React, {Component} from 'react';
import MainContainer from './MainContainer';
const axios = require('axios');

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }
  componentDidMount() {
    axios.get('https://damp-sands-52459.herokuapp.com/teams').then((response) => {
        this.setState({
          teams: response.data
        });
      }).catch(function(err) {
        console.log("unable to get teams");
      });
  }
  render() {
    return (
      <MainContainer sidebar="Teams">
        <h1 className="page-header">Teams</h1>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Name</th><th>Projects</th><th>Employees</th><th>Team Lead</th></tr>
            </thead>
            <tbody>
              {this.state.teams.map((team, index) => {
                return (
                  <tr key={team._id}>
                    <td>{team.TeamName}</td>
                    <td>
                      <ul>
                        {team.Projects.map((project, idx) => {
                          return (
                            <li key={project._id}>{project.ProjectName}</li>
                          );
                        })}
                      </ul>
                    </td>
                    <td>{team.Employees.length} Employees</td>
                    <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
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

export default Teams;