import React from "react";

const Employee = (props) => {
  return (
    <div>
      <h4> {props.name} </h4>
      <h4> Phone: {props.phone}</h4>
      <h4> Location: {props.location}</h4>
      <h4> Email: {props.email}</h4>
      <img src={props.pic}></img>
    </div>
  );
};

export default Employee;
