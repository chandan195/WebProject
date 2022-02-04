import { useState, useEffect } from "react";

const UserDetails = () => {

  
  let id = localStorage.getItem("id");
  //......... get data in local Storage
  console.log(id);
  const [data, setdata] = useState([]);
  function getData(){
    fetch("https://gorest.co.in/public/v1/users/" + id, {
      method: "GET",

      headers: {
        Authorization:
          "Bearer 21fe67cd781faf84f607ee648e2a689e904e937e5981184175e7e62f994d4836",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        console.log(json.data.id);
        console.log(json.data.name);
        console.log(json.data.email);
        console.log(json.data.gender);
        console.log(json.data.status);

        setdata(json.data);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }

  useEffect(() => {
    getData();
    
  }, []);
  return (
    <div>
      <table className="table table-bordered table-dark">
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
         
              
          
         
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
