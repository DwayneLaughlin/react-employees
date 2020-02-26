import React, { Component } from "react";
import "./App.css";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <table className="table-style">
        <thead>
          <tr className="table-row">
            <th>
              <button>First Name</button>
            </th>
            <th>
              <button>Last Name</button>
            </th>
            <th>
              <button>Title</button>
            </th>
            <th>
              <button>Salary</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(row => (
            <tr>
              <td>{row.first_name}</td>
              <td>{row.last_name}</td>
              <td>{row.title}</td>
              <td>{row.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
