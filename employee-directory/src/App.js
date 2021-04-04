import React, { useState, useEffect } from "react";
import "./App.css";
import Employee from "./components/Employee";
import API from "./utils/API";
function App() {
  // Setting state for employees
  const [employees, setEmployees] = useState([]);
  // Calling API to initialize on page load to have all the data available
  useEffect(() => {
    API.search().then((res) => {
      setEmployees(
        // console.log(res.data.results);
        res.data.results.map((emp) => {
          return {
            name: emp.name.first + " " + emp.name.last,
            pic: emp.picture.large,
            email: emp.email,
            phone: emp.cell,
            location: emp.location.city + ", " + emp.location.state,
          };
        })
      );
    });
  }, []);

  console.log(employees);
  return (
    <div>
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
  );
}

export default App;
