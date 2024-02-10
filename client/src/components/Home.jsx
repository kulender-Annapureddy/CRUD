import React from 'react'
import Navbar from './Navbar'
import '../styles/home.css'
import { useState } from 'react'
import axios from 'axios'

const Home =({onSubmit}) => {
  const [data, setData] = useState({
    username:'',
    email:'',
    city:'',
    occupation:'',
    address:'',
    phonenumber: '',
  });
  // const [details,setDetails] = useState([]);

  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  //post data
  const formSubmit = () => {
axios.post('http://localhost:3005/details', data)
 .then(response => {
  console.log(response.data);
  alert("user created successfully :)");

  onSubmit(data);

  })
 .catch(error => {
  console.log(error)
});
  };


  return (
    <div>
      <Navbar />
      <div className='homecontainer'>
      <h1 className='headers'>Create user</h1>
      <div className='forming'>
      
        <form onSubmit={formSubmit}>
          <div className='form-control'>
            <label>Name:</label>
            <input
             type='text' 
             placeholder='enter your name'
             name='username'
             value={data.username}
             onChange={handleChange}
             />
          </div>
          <div className='form-control'>
            <label>Email:</label>
            <input type='email'
             placeholder='enter your email'
             name='email'
             value={data.email}
             onChange={handleChange}
              />
          </div>
          <div className='form-control'>
            <label>city:</label>
            <input type='text'
             placeholder='enter your city'
             name='city'
             value={data.city}
             onChange={handleChange}
              />
          </div>
          <div className='form-control'>
            <label>Occupation:</label>
            <input type='text' 
            placeholder='enter you occupation'
            name='occupation'
            value={data.occupation}
            onChange={handleChange}
             />
          </div>
          <div className='form-control'>
            <label>Address:</label>
            <input type='text'
             placeholder='enter you address' 
             name='address'
             value={data.address}
             onChange={handleChange}
             />
          </div>
          <div className='form-control'>
            <label>Phone Number:</label>
            <input type='number'
             placeholder='enter you address'
             name='phonenumber' 
             value={data.phonenumber}
             onChange={handleChange}
             />
          </div>
          <div className='btnsclass'>
          <button type='submit' className='btns'>Submit</button>
          </div>
        </form>
        
      </div>
      </div>
    </div>
  )
}

export default Home