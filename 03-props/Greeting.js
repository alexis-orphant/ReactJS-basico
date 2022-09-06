// props (son parametros que le paso a la funcion, pero se ven como atributos html)
// export function Greeting(props){
//     console.log(props) //devuelve un objeto con la props que se le esta pasando (key, value)
//     // usamos la prop como un objeto para obtener los valores
//     return <h1>Hola {props.title}</h1>
// }

// aca ya no muestro un objeto, muestro el valor de la propiedad
// export function Greeting({title}){
//     return <h1>{title}</h1>
// }

// se puden pasar mas de una prop
// export function Greeting({ title, name = "user" }) {
//     return <h1>{title + " " + name}</h1>;
// }

// <Greeting nombre = valor/>
//  <Greeting title="hola" />
//         <Greeting y="bye" />
//         <Greeting x={30} />
//         <Greeting z={true} />
//         <Greeting a={[1,2,3]} /> *

// tipos de props que se pueden pasar
// export function Usercard(props){
//     console.log(props)
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>💵${props.monto} </p>
//             <p>{props.married ? 'casado' : 'soltero'}</p>
//             <ul>
//                 <li>Calle: {props.addres.street}</li>
//                 <li>Ciudad: {props.addres.city}</li>
//             </ul>
//         </div>
//     );
// }

// se puede estructurar lo de arriba y queda asi 
export function Usercard({name, monto, married, addres, greet}) {
    console.log(name, monto, married, addres, greet);
    return (
        <div>
            <h1>{name}</h1>
            <p>💵${monto} </p>
            <p>{married ? "casado" : "soltero"}</p>
            <ul>
                <li>Calle: {addres.street}</li>
                <li>Ciudad: {addres.city}</li>
            </ul>
        </div>
    );
}


// (string, numbers, boolean, arrays, objects, functions)
/* <Usercard
            name="alexis"
            monto={300}
            married={false}
            puntos={[99, 33.3, 22]}
            addres={{ street: "123 Main Street", city: "New York" }}
            greet= {function (){ alert('hola') }}
        />
*/