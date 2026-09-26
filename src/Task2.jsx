import { useState } from "react";
import "./Task2.css";

function Task2() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function addTask() {

        if (task === "") {
            alert("Please enter a task");
            return;
        }

        setTasks([...tasks]);

        setTask("");
    }

    function deleteTask(index) {

        const updatedTasks = tasks.filter(
            (item, i) => i !== index
        );

        setTasks(updatedTasks);
    }

    return (
        <div className="todo-container">

            <h1>Todo App</h1>

            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>
                Add Task
            </button>

            <h2>My Tasks</h2>

            <ul>
                {
                    tasks.map((item, index) => (
                        <li key={index}>

                            {item}

                            <button
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>

                        </li>
                    ))
                }
            </ul>

        </div>
    );
}

export default Task2;