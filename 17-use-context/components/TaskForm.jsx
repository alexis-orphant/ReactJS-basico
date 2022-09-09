import { useState, useContext} from "react";
import {TaskContext} from '../context/TaskContext';

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {createTask} =useContext(TaskContext)

    const manejarEvento = (e) => {
        e.preventDefault();
        
        createTask({
            title,
            description
        })
        setTitle("")
        setDescription("")
    };

    return (
        <form onSubmit={manejarEvento}>
            <input
                type="text"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                value={title}
                autoFocus
            />
            <textarea
                placeholder="Descripcion de la tarea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;
