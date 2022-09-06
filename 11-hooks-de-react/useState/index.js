// importar la biblioteca y empezar con react
import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));


// function Counter() {
//     const [counter, setCounter] = useState(0)
    
//     return (
//         <>
//             <h1>Counter: {counter}</h1>
//             <button onClick={() => {
//                 setCounter(counter + 1)
//             }}>Sumar</button>
//             <button onClick={() => {
//                 setCounter(counter - 1)
//             }}>Restar</button>
//             <button onClick={() => {
//                 setCounter(0)
//             }}>Reiniciar</button>
//         </>
//     );
// }

function Input(){

    const [mensaje, setMensaje] = useState("")

    return <>
        <input onChange={e => setMensaje(e.target.value)}/>
        <button onClick={() => {
            alert('el mensaje es: ' + mensaje)
        }}>Save</button>
    </>
}

root.render(<>
    <Input/>
</>);
