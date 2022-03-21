import React, {useState} from "react";
import TaskForm from "./TaskForm";

function TaskList() {
    const [todo, setTodos] = useState([])

    return(
        <div>
            <h1>What Task do we have Today?</h1>
            <TaskForm />
        </div>
    )
}