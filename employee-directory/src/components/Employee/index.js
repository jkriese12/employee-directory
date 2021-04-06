import React from "react";
import "./style.css";

const Employee = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="img-container">
              <img alt={props.name} src={props.pic} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {props.name}
                </li>
                <li>
                  <strong>Phone:</strong> {props.phone}
                </li>
                <li>
                  <strong>Location:</strong> {props.location}
                </li>
                <li>
                  <strong>Email:</strong> {props.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
