import { useState } from "react";
import studentsData from "./data";
import "./Task1.css";

function Task1() {

    const [students, setStudents] = useState(studentsData);
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");

    function addStudent() {

        if (name === "" || marks === "") {
            alert("Please enter name and marks");
            return;
        }

        const newStudent = {
            id: students.length + 1,
            name: name,
            marks: Number(marks)
        };

        setStudents([...students, newStudent]);

        setName("");
        setMarks("");
    }

    function deleteStudent(id) {

        const updatedStudents = students.filter(
            (student) => student.id !== id
        );

        setStudents(updatedStudents);
    }

    return (
        <>
            <h1>Student Management</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Enter Marks"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                />

                <button onClick={addStudent}>
                    Add Student
                </button>
            </div>

            <h2>Student List</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Result</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.marks}</td>

                            <td>
                                {student.marks >= 40
                                    ? "Pass"
                                    : "Fail"}
                            </td>

                            <td>
                                <button
                                    onClick={() =>
                                        deleteStudent(student.id)
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Task1;