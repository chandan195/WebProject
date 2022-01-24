import React from "react";
// import ReactDOM from 'react-dom';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/Layout.js/Navbar";
import Footer from "./components/Layout.js/Footer";
import Form from "./components/pages/Form";
// import { BrowserRouter as Router, Routes  } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllUserDetails from "./components/pages/AllUserDetails";
// switch is not allow 6... version of router dom,it volid only 6< versions
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <div className="App"> */}
        {/* do not use div under the Routes */}

        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Form" element={<Form />} />
        <Route exact path="/AllUserDetails" element={<AllUserDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById("root"));
