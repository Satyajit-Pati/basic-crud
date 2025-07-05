import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Insert() {

  const [students, setStudents] = useState({name: '', email: ''});

  const handleChange = (e) => {
    setStudents({
      ...students,[e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/students', students);
    alert('Student added successfully');
    setStudents({name: '', email: ''});
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label >Name: </label>
        <input name='name' type="text" onChange={handleChange}/>
      </div>

      <div>
        <label >Email: </label>
        <input name='email' type="text" onChange={handleChange}/>
      </div>
      <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Insert