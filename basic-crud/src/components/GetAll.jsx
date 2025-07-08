import React, {useState, useEffect} from 'react'
import axios from 'axios';


function GetAll() {
  const [student, setStudent] = useState([]);

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:8080/students');
    setStudent(response.data);
  }

  const handleDelete = async(id) => {
    if(window.confirm("Do you want to delete the student")){
      try{
        await axios.delete(`http://localhost:8080/students/${id}`);
        fetchStudents();
      }catch(err){
        console.error("Unable to delete the student: ",err);
      }
    }
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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {student.map(u =>(
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>
              <button onClick={() => handleDelete(u.id)}>
                Delete
              </button></td>
          </tr>
        ) )}
      </tbody>
    </table>
    </>
  )
}

export default GetAll