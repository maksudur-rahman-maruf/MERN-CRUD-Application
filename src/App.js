import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';


function App() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setEmployeeList(response.data);
    })
  });

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      name: name,
      designation: designation,
      email: email,
      phone: phone,
      age: age
    });
  };

  return (
    <div className="App">
      <h1>CRUD App with MERN</h1>

      <label>Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <label>Designation:</label>
      <input
        type="text"
        onChange={(event) => {
          setDesignation(event.target.value);
        }}
      />

      <label>Email:</label>
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <label>Phone:</label>
      <input
        type="text"
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />

      <label>Age:</label>
      <input
        type="number"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />

      <button onClick={addToList}>Add to List</button>

      <h1>Employee List</h1> 

      {employeeList.map((val, key) => {
        return (
          <div key={key}>
            <h2> {val.name} </h2>
            <h2> {val.designation}</h2>
            <h2> {val.email} </h2>
            <h2> {val.phone} </h2>
            <h2> {val.age} </h2> <br/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
