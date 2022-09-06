// la forma correcta es con async y await de js
export const Post = () =>{
    return (
        <button onClick={() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error =>console.error(error))
        }}>
            traer datos
        </button>
    );
}

// // <ul>
//             <li>titulo deuna publicacion</li>
//             <li>titulo deuna publicacion 2</li>
//         </ul>