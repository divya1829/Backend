import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

function StudentView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});

  // Fetch student details
  useEffect(() => {
    axios
      .get(`${BASE_URL}/students/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  // Handle input change (edit)
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Update student
  const updateStudent = async () => {
    await axios.put(`${BASE_URL}/students/${id}`, student);
    alert("Student details updated successfully");
  };

  // Delete student
  const deleteStudent = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      await axios.delete(`${BASE_URL}/students/${id}`);
      navigate("/");
    }
  };

  return (
    <div className="details-container">
      <h2>Student Full Details</h2>

      {Object.keys(student).map(
        (key) =>
          key !== "id" && (
            <input
              key={key}
              name={key}
              value={student[key] || ""}
              onChange={handleChange}
              placeholder={key.toUpperCase()}
            />
          )
      )}

      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <button onClick={updateStudent}>Edit / Update</button>

        <button
          onClick={deleteStudent}
          style={{
            marginLeft: "10px",
            backgroundColor: "#d32f2f",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentView;
