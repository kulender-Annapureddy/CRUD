import React, { useState, useEffect} from 'react';
import Navbar from './Navbar';
import '../styles/users.css';
import { Link } from 'react-router-dom';
import axios from 'axios'



function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Use a flag to determine if it's the initial mount
    let isMounted = true;

    const fetchData = () => {
      axios.get('http://localhost:3005/userdetails')
        .then(response => {
          console.log('Fetched data:', response.data);
          const userData = response.data.users;
          if (isMounted && Array.isArray(userData)) {
            setUsers(userData);
          } else {
            console.error('Error: Data from server is not an array');
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    fetchData();

    // Cleanup function to update the mounted flag
    return () => {
      isMounted = false;
    };
  }, []);

  const deleteUser = (userId) => {
    axios.delete(`http://localhost:3005/userdetails/${userId}`)
    .then(response => {
      alert('User deleted successfully:', response.data);
      setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
    })
    .catch(error => console.error('error deleting user:', error));
  }
  
  // ...
  
  return (
    <div>
      <Navbar />
      <div className='userdata'>
        <div className='tabledata'>
          <h1 className='header'>User Details</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>UserName</th>
              <th>Email</th>
              <th>City</th>
              <th>Occupation</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) ? (
              users.map((user, index) => (
                <tr key={`${user._id}`}>
                  <td>{index + 1}</td>
                  <td >{user.username}</td>
                  <td >{user.email}</td>
                  <td >{user.city}</td>
                  <td >{user.occupation}</td>
                  <td >{user.address}</td>
                  <td >{user.phonenumber}</td>
                  <td className='btnsclass2'>
        <button type='button' className='btns1'>
          <Link className='links1' to={`/edit/${user._id}`}  >
            edit
          </Link>
        </button>
        <button type='button' className='btns1' onClick={() => deleteUser(user._id)}>
          <Link className='links1' >
            delete
          </Link>
        </button>
      </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails

