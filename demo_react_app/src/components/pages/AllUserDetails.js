import React, { useState, useEffect } from "react";
//  import { button } from "react-router-dom";

const AllUserDetails = () => {
  const myButtonStyle = {
    margin: "10px 3px 3px 3px",

    width: " 32%",

    height: "40px",
  };
  function deleteUser(id) {
    console.log("hello " + id);
    fetch("https://gorest.co.in/public/v1/users/" + id, {
      method: "DELETE",

      headers: {
        Authorization:
          "Bearer 21fe67cd781faf84f607ee648e2a689e904e937e5981184175e7e62f994d4836",
        "Content-Type": "application/json",
      },
      body:JSON.stringify()
      // details delete ho ja raha hai but console  me faild so kar raha hai
    })

    .then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getdata();
        console.log("do it");
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
    })
  
  }

  const [data3, setdata] = useState([]);
  const url = "https://gorest.co.in/public/v1/users";
  // const url = "https://jsonplaceholder.typicode.com/todos"
  useEffect(() => {
    getdata();
  }, []);
  function getdata() {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json.data);

        setdata(json.data);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }

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
          {data3.map((item, i) => {
            return (
              <tr key={item.id}>
                {/* <tr key={i}> */}
                <td scope="item">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
                <td>
                  {/* <button  className="btn btn-primary" onClick={deleteUser}>View </button> */}
                  <button className="btn btn-warning"  onClick={() => {
                      deleteUser(item.id);
                    }} style={myButtonStyle}>Edit </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(item.id);
                    }}
                    style={myButtonStyle}
                  >
                    Delete{" "}
                  </button>
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
