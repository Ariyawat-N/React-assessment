import React from 'react'
import App from './App'



const HomeUser = () => {
  
 
  return (
    <div>
      <App />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>Manager</td>
          </tr>
            <tr>
              <td>Jane</td>
              <td>Doe</td>
              <td>CEO</td>
            </tr>
          <tr>
              <td>Jack</td>
              <td>Doe</td>
              <td>CTO</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HomeUser