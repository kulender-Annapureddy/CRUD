import React, { useState, useEffect} from 'react';
import Navbar from './Navbar';
import '../styles/edit.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EditDetails() {
 const [userDetails, setUserDetails] = useState({})
 const  {id} = useParams();


 useEffect(() => {
  console.log('fetch user details for id:', id);
   fetchUserById(id)
 }, [id])
    
 const fetchUserById = (Id) => {
  console.log("Fetching user details from the server for id:", Id);
   axios.get(`http://localhost:3005/userdetails/${Id}`)
   .then(response =>{
    console.log("data fetch by id : ", response.data)
    setUserDetails(response.data)
   })
   .catch (error => console.error("server error:", error))

 }
 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUserDetails((prevDetails) => ({ ...prevDetails, user: { ...prevDetails.user, [name]: value } }));
};
 const handleUpdate = () => {
  axios.put(`http://localhost:3005/userdetailsup/${id}`,userDetails.user)
  .then(response => {
  alert('userdetails updated successfully:', response.data);
  fetchUserById(id);
  })
  .catch(error => console.error('update error', error));
 };
  return (
    <div>
      <Navbar />
    
      <div className='homecontainer  heading'>
      <div className='label'>
        <h1>Update UserDetails</h1>
      </div>
        {/* <h1>Update UserDetails</h1> */}
      <div className='forming'>
        <form>
          <div className='form-control'>
            <label>Name:</label>
            <input 
            type='text'
            name='username'
            placeholder='enter your name'
            value={userDetails.user?.username || ''}
            onChange={handleInputChange}
             />
          </div>
          <div className='form-control'>
            <label>Email:</label>
            <input type='email'
             name='email'
              placeholder='enter your email'
            value={userDetails.user?.email || ''}
            onChange={handleInputChange}
            />
          </div>
          <div className='form-control'>
            <label>city:</label>
            <input type='text'
            name='city'
             placeholder='enter your city'
            value={userDetails.user?.city || ''}
            onChange={handleInputChange}
            />
          </div>
          <div className='form-control'>
            <label>Occupation:</label>
            <input type='text'
            name='occupation'
            placeholder='enter you occupation'
            value={userDetails.user?.occupation  || ''}
            onChange={handleInputChange}
            />
          </div>
          <div className='form-control'>
            <label>Address:</label>
            <input type='text'
             name='address'
            placeholder='enter you address' 
            value={userDetails.user?.address || ''}
            onChange={handleInputChange}
            />
          </div>
          <div className='form-control'>
            <label>Phone Number:</label>
            <input type='number'
            name='phonenumber'
            placeholder='enter you address' 
            value={userDetails.user?.phonenumber || ''}
            onChange={handleInputChange}
            />
          </div>
          <div className='btnsclass1'>
          <button type='submit' className='btns' onClick={handleUpdate}>
            <Link className='linksof' to={'/users'}>Save</Link>
            </button>
          </div>
        </form>
        
      </div>
      </div>
    </div>
  )
}

export default EditDetails

