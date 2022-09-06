// event Handlers

export function Button({text, name = "some user"}){
    return <button onClick={function () {console.log("hola mundo")}}>
        {text} - {name}
    </button>
}

// <input onChange={(e) =>{ console.log(e.target.value)}}/>
// tambien se puede pasar el evento como una funcion normal de js
