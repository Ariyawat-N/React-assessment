import React from "react";
import Layout from "./Layout";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  
  
  
 
  return (
    <>
    
      <Layout>
      <h1>Generation Thailand React - Assessment</h1>
        <button>
          <Link to={"/homeuser"}>User Home Sector</Link>
        </button>
        <button>
          <Link to={"/homeadmin"}>Admin Home Sector</Link>
        </button>
      </Layout>
      
    </>
  );
}

export default App;
