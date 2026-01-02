import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className="card">
      <h4>{student.name}</h4>
      <p>Roll: {student.roll}</p>
      <Link to={`/view/${student.id}`}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default StudentCard;
