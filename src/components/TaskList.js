import React, {useState} from "react";
import TaskForm from "./TaskForm";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)) {
            return
        }
    
    const newTasks = [task, ...tasks]

    setTasks(newTasks)
    console.log(...tasks);
    };

    return(
        <div>
            <h1>What Task do we have Today?</h1>
            <TaskForm onSubmit={addTask}/>
        </div>
    )
}

export default TaskList;