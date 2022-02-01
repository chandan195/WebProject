import React from 'react';
 import { Link } from 'react-router-dom';

const Home= ()=>{
    return(
        <div className='container'>
            <p> My Home page</p>
         <div>
             <Link className="btn btn-success" to="/Form"> click me</Link>
         </div>
          
        </div>
    );
};

export default Home;
