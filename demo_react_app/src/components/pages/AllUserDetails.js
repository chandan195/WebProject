import { useState, useEffect } from "react";

const AllUserDetails = () => {
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
          {data3.map((item) => {
            return (
              <tr>
                <th scope="item" key={item.id}>
                  {item.id}
                </th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status}</td>
                {/* <td>{item.status}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUserDetails;
