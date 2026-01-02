import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import StudentForm from "./pages/StudentForm";
import StudentView from "./pages/StudentView";
import StudentCard from "./components/StudentCard";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <StudentForm onAdd={(s) => setStudents([...students, s])} />
              <div className="cards">
                {students.map(s => (
                  <StudentCard key={s.id} student={s} />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/view/:id" element={<StudentView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
