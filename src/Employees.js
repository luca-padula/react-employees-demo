import React, {Component} from 'react';
import MainContainer from './MainContainer';
const axios = require('axios');
const moment = require('moment');

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  componentDidMount() {
    axios.get('https://damp-sands-52459.herokuapp.com/employees').then((response) => {
      this.setState({
        employees: response.data
      });
    }).catch(function(err) {
      console.log(err);
    });
  }
  render() {
    return (
      <MainContainer sidebar="Employees">
        <h1 className="page-header">Employees</h1>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Name &amp; Position</th><th>Address</th><th>Phone Num</th><th>Hire Date</th><th>Salary Bonus</th></tr>
            </thead>
            <tbody>
              {this.state.employees.map(function(employee, index) {
                return (
                  <tr key={employee._id}>
                    <td>{employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                    <td>{employee.AddressStreet}, {employee.AddressCity} {employee.AddressState}, {employee.AddressZip}</td>
                    <td>{employee.PhoneNum} ext. {employee.Extension}</td>
                    <td>{moment(employee.HireDate).utc().format("LL")}</td>
                    <td>$ {employee.SalaryBonus}</td>
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

export default Employees;