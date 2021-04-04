import React, { useState, useEffect } from "react";
import "./App.css";
import Employee from "./components/Employee";
import Header from "./components/Header";
import SortButtons from "./components/SortButtons";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";
function App() {
  // Setting state for employees
  const [employees, setEmployees] = useState([]);
  // Calling API to initialize on page load to have all the data available
  useEffect(() => {
    API.search().then((res) => {
      setEmployees(
        res.data.results.map((emp) => {
          return {
            name: emp.name.first + " " + emp.name.last,
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

  console.log(employees);
  return (
    <div>
      <Header />
      <SortButtons />
      <Wrapper>
        <div className="emp">
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
      </Wrapper>
    </div>
  );
}

export default App;
