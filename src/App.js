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
  // Sets the state for the cycling of employees by last name
  const [sortName, setSortName] = useState("nameLast");

  // Variables holding filter data for different countries
  const filterAu = employees.filter((emp) => emp.nat === "AU");
  const filterGb = employees.filter((emp) => emp.nat === "GB");
  const filterUs = employees.filter((emp) => emp.nat === "US");
  // Variables to hold ID's for displaying data
  const empAllId = document.getElementById("all");
  const empAuId = document.getElementById("au");
  const empGbId = document.getElementById("gb");
  const empUsId = document.getElementById("us");

  // Buttton click event for sorting array data
  const handleSort = () => {
    const index = document.getElementById("countries").selectedIndex;
    const dropDownText = document.getElementById("countries").options[index].text;
    // const sortIndex = document.getElementById("sorting").selectedIndex;
    // const dropDownTextSort = document.getElementById("sorting").options[index].text;
    // if (dropDownTextSort === "Ascending (A-Z)") {

    // }
    if (dropDownText === "Australia") {
      empAllId.classList.add("empAll");
      empGbId.classList.add("empAll");
      empUsId.classList.add("empAll");
      empAuId.classList.remove("empAll");
    } else if (dropDownText === "Great Britain") {
      empAllId.classList.add("empAll");
      empAuId.classList.add("empAll");
      empUsId.classList.add("empAll");
      empGbId.classList.remove("empAll");
    } else if (dropDownText === "USA") {
      empAllId.classList.add("empAll");
      empGbId.classList.add("empAll");
      empAuId.classList.add("empAll");
      empUsId.classList.remove("empAll");
    } else if (dropDownText === "All Employees") {
      empAuId.classList.add("empAll");
      empGbId.classList.add("empAll");
      empUsId.classList.add("empAll");
      empAllId.classList.remove("empAll");
    }
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
        <li className="country">
          <label>Sort employees:</label>
          <select id="sorting">
            <option value="5">Ascending (A-Z)</option>
            <option value="6">Descending (Z-A)</option>
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
        <div id="all" className="empAll">
          {employees.map((emp) => (
            <Employee
              name={emp.name}
              pic={emp.pic}
              email={emp.email}
              phone={emp.phone}
              location={emp.location}
            />
          ))}
        </div>
        <div id="au" className="empAll">
          {filterAu.map((emp) => (
            <Employee
              name={emp.name}
              pic={emp.pic}
              email={emp.email}
              phone={emp.phone}
              location={emp.location}
            />
          ))}
        </div>
        <div id="gb" className="empAll">
          {filterGb.map((emp) => (
            <Employee
              name={emp.name}
              pic={emp.pic}
              email={emp.email}
              phone={emp.phone}
              location={emp.location}
            />
          ))}
        </div>
        <div id="us" className="empAll">
          {filterUs.map((emp) => (
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
