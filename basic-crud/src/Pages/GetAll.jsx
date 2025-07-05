import React, {useState, useEffect} from 'react'
import axios from 'axios';


function GetAll() {
  const [student, setStudent] = useState([]);

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:8080/students');
    setStudent(response.data);
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
    <h4>All Students</h4>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {student.map(u =>(
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
          </tr>
        ) )}
      </tbody>
    </table>
    </>
  )
}

export default GetAll