import React from "react";
// import { Link } from "react-router-dom";
//  import { Link } from 'react-router-dom';
// import "../CssFile/Main.css"

const Footer = () => {
  const myStyle={
    position: "fixed",
    padding: "10px 10px 0px 10px",
    bottom: "0",
    width:" 100%",
    /* Height of the footer*/ 
    height: "40px",

  };
  return (
    <footer  style={myStyle} className=" bg-primary text-light ">
      <p className="text-center">Copyright &copy; MyFirstReactApp.com</p>
    </footer>
  );
};

export default Footer;
