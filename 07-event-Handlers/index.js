// importar la biblioteca y empezar con react
import React from "react";
import ReactDOM from "react-dom/client";

import {Button} from "./Boton"

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <>
        <Button text="saludar" name="mundo"/>
        <form onSubmit={(e) =>{e.preventDefault()
            console.log("enviado")}}>
            <h1>registo de usuarios</h1>
            <button>send</button>
        </form>
    </>
);