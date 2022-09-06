// importar la biblioteca y empezar con react
import React from "react";
import ReactDOM from "react-dom/client";
// forma de importar modulos
// import {Suma, User} from "./Suma"
import { Usercard } from "./Greeting";
// // import Product from "./product"
// import Product, {Navbar} from "./product";

const root = ReactDOM.createRoot(document.getElementById("root"));

// siempre debe haber un elemento que contenga a todos los demas
// crear componentes
// los componentes son funciones y la primer letra va en mayuscula
// function Greeting() {
//     const name = "Alexis";
//     // las llaves son para interpretar codigo
//     return <h1>Hola {name}</h1>;
// }
// function Married() {
//     const married = true;
//     // usamos el operador ternario y no un if else....
//     return <h1>{married ? "estoy casado" : "estoy soltero"}</h1>;
// }

// como usar los objetos en react
// podemos convertir el objeto con JSON.stringify() o accediendo a las propiedades del objeto Ej(obj.name)
// function Obj(){
//     const user = {
//         firstName: 'Alexis',
//         lastName: 'Orphant'
//     }

//las llaves nos permiten interpretar codigo {Greeting()}
// tambien se puede poner <Greeting></Greeting> o si no se coloca nada dentro de la etiqueta <Greetin/>
// <> </> se usa para contener los componentes
// root.render(
//     <>
//         <Usercard
//             name="alexis"
//             monto={300}
//             married={false}
//             puntos={[99, 33.3, 22]}
//             addres={{ street: "123 Main Street", city: "New York" }}
//         />
//     </>
// );

// tambien le puedo pasar funciones
root.render(
    <>
        <Usercard
            name="alexis"
            monto={300}
            married={false}
            puntos={[99, 33.3, 22]}
            addres={{ street: "123 Main Street", city: "New York" }}
            greet= {function(){ alert('hola') }}
        />
    </>
);