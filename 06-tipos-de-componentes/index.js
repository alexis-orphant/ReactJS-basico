// importar la biblioteca y empezar con react
import React from "react";
import ReactDOM from "react-dom/client";

import {Saludar} from "./Saludar"

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <>
        <Saludar/>
    </>
);