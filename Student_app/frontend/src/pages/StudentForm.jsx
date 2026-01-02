import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

function StudentForm({ onAdd }) {
  const [student, setStudent] = useState({
    name: "", roll: "", gender: "", department: "",
    year: "", section: "", email: "", phone: "",
    address: "", status: ""
  });

  const handleChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const submitForm = async () => {
    const res = await axios.post(`${BASE_URL}/students`, student);
    onAdd(res.data);
    setStudent({
      name: "", roll: "", gender: "", department: "",
      year: "", section: "", email: "", phone: "",
      address: "", status: ""
    });
  };

  return (
    <div className="form-box">
      <h2>Student Registration Form</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="roll" placeholder="Roll Number" onChange={handleChange} />

      <select name="gender" onChange={handleChange}>
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select name="department" onChange={handleChange}>
        <option value="">Department</option>
        <option>CSE</option>
        <option>ECE</option>
        <option>EEE</option>
      </select>

      <select name="year" onChange={handleChange}>
        <option value="">Year</option>
        <option>1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
      </select>

      <input name="section" placeholder="Section" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />

      <select name="status" onChange={handleChange}>
        <option value="">Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default StudentForm;
