import React, { useState, useEffect } from "react";
import "./App.css";
import Employee from "./components/Employee";
import Header from "./components/Header";
// import SortButtons from "./components/SortButtons";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";
function App() {
  // Setting state for all employees and based on country
  const [employees, setEmployees] = useState([]);
  const [employeesAu, setEmployeesAu] = useState([]);
  const [employeesGb, setEmployeesGb] = useState([]);
  const [employeesUs, setEmployeesUs] = useState([]);
  // Sets the state for the cycling of employees by last name
  const [sortAz, setSortAz] = useState(true);
  const [sortName, setSortName] = useState("nameLast");
  // Variables holding filter data for different countries
  const filterAu = employees.filter((emp) => emp.nat === "AU");
  const filterGb = employees.filter((emp) => emp.nat === "GB");
  const filterUs = employees.filter((emp) => emp.nat === "US");
  // Buttton click event for sorting array data
  const handleSort = () => {
    const index = document.getElementById("countries").selectedIndex;
    const dropDownText = document.getElementById("countries").options[index].text;
    setSortAz(!sortAz);
    if (dropDownText === "Australia") {
      setEmployeesAu(filterAu);
      console.log(employeesAu);
    } else if (dropDownText === "Great Britain") {
      setEmployeesGb(filterGb);
      console.log(employeesGb);
    } else if (dropDownText === "USA") {
      setEmployeesUs(filterUs);
      console.log(employeesUs);
    } else console.log(employees);
  };

  // Calling API to initialize on page load to have all the data available
  useEffect(() => {
    API.search().then((res) => {
      setEmployees(
        res.data.results.map((emp) => {
          return {
            name: emp.name.first + " " + emp.name.last,
            nameLast: emp.name.last,
            pic: emp.picture.medium,
            email: emp.email,
            phone: emp.cell,
            location: emp.location.city + ", " + emp.location.state,
            nat: emp.nat,
          };
        })
      );
    });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <li className="country">
          <label>Select Country:</label>
          <select id="countries">
            <option value="1">All Employees</option>
            <option value="2">USA</option>
            <option value="3">Great Britain</option>
            <option value="4">Australia</option>
          </select>
        </li>
        <li className="lastName">
          <label>Sort By Lastname:</label>
          <select id="sort">
            <option> Ascending (A-Z) </option>
            <option> Descending (Z-A) </option>
          </select>
        </li>
      </div>
      <div className="button">
        <button className="btn btn-primary btn-lg" type="button" onClick={handleSort}>
          {" "}
          Search
        </button>
      </div>
      <Wrapper>
        <div className="emp">
          {employees
            .sort((a, b) => {
              if (sortAz) {
                return a[sortName].localeCompare(b[sortName]);
              } else {
                return b[sortName].localeCompare(a[sortName]);
              }
            })
            .map((emp) => (
              <Employee
                name={emp.name}
                pic={emp.pic}
                email={emp.email}
                phone={emp.phone}
                location={emp.location}
              />
            ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
