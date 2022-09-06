// importar la biblioteca y empezar con react
import React from "react";
import ReactDOM from "react-dom/client";
// forma de importar modulos
import {Suma, User} from "./Suma"
// import Product from "./product"
import Product, {Navbar} from "./product";

const root = ReactDOM.createRoot(document.getElementById("root"));

// siempre debe haber un elemento que contenga a todos los demas
// crear componentes
// los componentes son funciones y la primer letra va en mayuscula
// function Greeting(){
//     return <h1>Este es un componente de React</h1>
// }

// function Greeting() {
//     return <h1>Este es un componente de React</h1>;
// }
// function Componente(){
//     return <div>
//         <h1>Este es un componente</h1>
//         <p>lorem 123</p>
//     </div>
// }

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
    
//     return (
//         <div>
//             <h1>{user.firstName + " " + user.lastName}</h1>
//             <h2>{user.lastName}</h2>
//         </div>
//     );
// }

// function Suma(){
//     function num(a, b){
//         return a +b
//     }

//     return <h1>{num(10,20)}</h1>
// }


//las llaves nos permiten interpretar codigo {Greeting()}
// tambien se puede poner <Greeting></Greeting> o si no se coloca nada dentro de la etiqueta <Greetin/>
// <> </> se usa para contener los componentes 
root.render(
    <>
        <Suma/>
        <User/>
        <Product/>
        <Navbar/>
    </>
);
