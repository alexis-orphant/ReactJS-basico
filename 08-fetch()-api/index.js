// importar la biblioteca y empezar con react
import React from "react";
import ReactDOM from "react-dom/client";

import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <>
        <Post/>
    </>
);