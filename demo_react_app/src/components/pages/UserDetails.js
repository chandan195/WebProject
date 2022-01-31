import { useState, useEffect } from "react";

const UserDetails = () => {
  let id = localStorage.getItem("id");
  //......... get data in local Storage
  console.log(id);
  const [data, setdata] = useState([]);

  useEffect(() => {
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
          {/* {data && data.map((item) => {
            return (
              <tr>
                <th >
                  {item.id}
                </th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
              </tr>
            );
          })} */}
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                // className={classes.row}
                // component={RouterLink}
              >
                <td scope="row">{item.id}</td>
                <td scope="row">{item.name}</td>
                <td scope="row">{item.email}</td>
                <td scope="row">{item.gender}</td>
                <td scope="row">{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;

// import {React, useEffect} from "react";
// //

// const UserDetails = () => {
//   let id = localStorage.getItem("id");
//   //......... get data in local Storage
//   console.log(id);
// //   const [data, setdata] = useState([]);

//   useEffect(() => {
//     fetch("https://gorest.co.in/public/v1/users/" + id, {
//       method: "GET",

//       headers: {
//         Authorization:
//           "Bearer 21fe67cd781faf84f607ee648e2a689e904e937e5981184175e7e62f994d4836",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json.data);
//         console.log(json.data.id);
//         console.log(json.data.name);
//         console.log(json.data.email);
//         console.log(json.data.gender);
//         console.log(json.data.status);

//         document.getElementById("id").innerHTML = json.data.id;
//         document.getElementById("name").innerHTML = json.data.name;
//         document.getElementById("email").innerHTML = json.data.email;
//         document.getElementById("gender").innerHTML = json.data.gender;
//         document.getElementById("status").innerHTML = json.data.status;

//       })
//       .catch((e) => {
//         console.log("e", e);
//       });
//   }, []);
//   return (
//     <div>
//       <table className="table table-bordered table-dark">
//         <thead>
//           <tr>
//             <th scope="col">Id</th>
//             <th scope="col">UserName</th>
//             <th scope="col">Email</th>
//             <th scope="col">Gender</th>
//             <th scope="col">status</th>
//             <th scope="col">Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           <td id="id"></td>
//           <td id="name"></td>
//           <td id="email"></td>
//           <td id="gender"></td>
//           <td id="status"></td>
//           <td id="action"></td>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserDetails;
