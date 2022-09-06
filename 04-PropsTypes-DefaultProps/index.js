// importar la biblioteca y empezar con react
import React from "react";
import ReactDOM from "react-dom/client";

// import { Usercard } from "./Greeting";
import {Button} from "./boton"
// import { object } from "prop-types";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <>
        <Button text="click" />
        <Button text="pagar" />
        <Button text="" name="joe"/>
    </>
);