import React from 'react'
import { useState } from 'react';
import App from './App'

const Homeadmin = () => {
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        position: '',
      });
    
      const [usersList, setUsersList] = useState([]); // To store the list of users
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setUser((prevUser) => {
          return { ...prevUser, [name]: value };
        });
      }
    
      function handleSave() {
        // Save the current user to the list of users
        setUsersList([...usersList, user]);
        
        // Clear the input fields
        setUser({
          name: '',
          lastname: '',
          position: '',
        });
      }
    
      function handleDelete(index) {
        // Create a copy of the users list without the user at the specified index
        const updatedUsersList = [...usersList];
        updatedUsersList.splice(index, 1);
        
        // Update the users list state
        setUsersList(updatedUsersList);
      }
    
      return (
        <div>
          <App />
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={user.name} // Bind the input value to the state
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastname"
            value={user.lastname} // Bind the input value to the state
          />
          <input
            type="text"
            placeholder="Position"
            onChange={handleChange}
            name="position"
            value={user.position} // Bind the input value to the state
          />
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.position}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }


export default Homeadmin

