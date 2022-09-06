// aplicando stilos
// export function TaskCard(){
//     return <div style={{background : "black", color: "white", padding: "20px"}}>
//         <h1 style={{fontStyle: "revert", fontWeight: "bold"}}>mi primer tarea</h1>
//         <p>tarea realizada</p>
//     </div>
// }

// otra forma es:
// export function TaskCard(){

//     const divStyle = { background: "black", color: "white", padding: "20px" };
//     const h1Style = {fontStyle: "revert", fontWeight: "bold"}

//     return <div style={divStyle}>
//         <h1 style={h1Style}>mi primer tarea</h1>
//         <p>tarea realizada</p>
//     </div>
// }

// stilos con css
// import "./tasks.css"
// export function TaskCard(){
//     return <div className="card">
//         <h1>mi primer tarea</h1>
//         <p>tarea realizada</p>
//     </div>
// }

// utilizando las props para los estilos
// import "./tasks.css";
// export function TaskCard({ ready }) {
//     return (
//         <div className="card">
//             <h1>mi primer tarea</h1>
//             <span
//                 style={ready ? { backgroundColor: "green" } : { backgroundColor: "black" }}
//             >
                
//                 {ready ? "tarea realizada" : "tarea incompleta"}
//             </span>
//         </div>
//     );
// }


import "./tasks.css";
export function TaskCard({ ready }) {
    return (
        <div className="card">
            <h1>mi primer tarea</h1>
            <span
                className={
                    ready
                        ? "bg-green"
                        : "bg-black"
                }
            >
                {ready ? "tarea realizada" : "tarea incompleta"}
            </span>
        </div>
    );
}
