import React from "react";
// import { Link, NavLink } from "react-router-dom";
import "../CssFile/Form.css";
// import $ from 'jquery';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";







const Form = () => {
  
  

  const {
    register,
    handleSubmit,
    // to handle the submit of the form
    // use in onsubmit
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (datat) => {
    console.log(datat);
    reset();
    // let url =" ";
   // let dataValue = data;
    fetch("https://gorest.co.in/public/v1/users",{
      method:'POST',
      headers: {
        "Authorization": "Bearer 21fe67cd781faf84f607ee648e2a689e904e937e5981184175e7e62f994d4836",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(datat)
    }).then((result)=>{
      result.json().then((resp)=>{
        
        console.log(resp.data);
        console.log("id :",resp.data.id)
        localStorage.setItem('id', resp.data.id);  
      })
    })

  };
  // ....................................

  return (
    <div className="container">
      <div className="Col xs={12} md={8} lg={6} xl={4}">
        <div className="col-md-4 offset-md-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="title"> your form</div>
            <div className="input-field">
              <label>User Name</label>
              <input
              id="username"
                type="text"
                placeholder="Enter Your Name"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", {
                  required: "Name is Required",

                  // pattern: {
                  //   value: /^[A-Za-z]\.{3, 29}$/i,
                  //   message: "length is short ",
                  // },
                })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            {/* <!-- userName div close --> */}
            <div className="input-field">
              <label>Email</label>
              <input
              id="email"
                type="text"
                placeholder="Enter Your Email"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            {/* <!-- email div close --> */}
            <div id="gender">
              <label>Gender : </label>
              <input
                type="radio"
                id="r1"
                name="select"
                {...register("gender")}
                value="female"
              />{" "}
              Female
              <input
                type="radio"
                id="r2"
                name="select"
                {...register("gender")}
                value="male"
                checked
              />{" "}
              Male
              <input
                type="radio"
                id="r3"
                name="select"
                {...register("gender")}
                value="trans"
              />{" "}
              Trans
            </div>
            {/* <!-- gender div close --> */}
            <div className="input-field">
              Status :
              <select {...register("status")}>
                <option value="Inactive">Inactive</option>
                <option value="Active">Active</option>
              </select>
            </div>
            {/* <!-- status div close --> */}
            <div>
              <button id="submit" type="submit" value="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
             <Link className="btn btn-success" to="#"> click me</Link>
         </div>
    </div>
  );
};

export default Form;
