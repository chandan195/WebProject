import React, { useState, useEffect } from "react";
//  import { button } from "react-router-dom";


const AllUserDetails = () => {
  function deleteUser(){
    
    console.log("hello")
  }



  const [data3, setdata] = useState([]);
  const url = "https://gorest.co.in/public/v1/users";
  // const url = "https://jsonplaceholder.typicode.com/todos"
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json.data);

        setdata(json.data);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  return (
    <div>
      <table className="table table-bordered table-dark" id="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">status</th>
            <th scope="col">Activity</th>
          </tr>
        </thead>
        <tbody>
          {/* {data3.map((item) => { */}
          {data3.map((item,i) => {
            return (
              // <tr key={item.id}>
              <tr key={i}>
                <td scope="item" >
                  {item.id}
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
                <td>
                  
                  <button  className="btn btn-primary" onClick={deleteUser}>View </button>
                  <button  className="btn btn-warning" >Edit </button>
                  {/* <button  className="btn btn-danger" onClick={() => this.deleteUser(item.id)}>Delete </button> */}
                 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUserDetails;
