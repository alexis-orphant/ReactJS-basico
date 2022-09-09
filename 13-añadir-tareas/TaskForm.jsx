import { useState } from "react";

function TaskForm({ createTask }) {
    const [title, setTitle] = useState("");

    const manejarEvento = (e) => {
        e.preventDefault();
        
        createTask(title)
    };

    return (
        <form onSubmit={manejarEvento}>
            <input
                type="text"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;
