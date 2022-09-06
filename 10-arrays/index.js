// importar la biblioteca y empezar con react
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// los arrays no se recoren con bucles for como en js vanilla. Usan los metodos de array (map, filter, find, etc)
const users = [
    {
        id: 1,
        name: "ale",
        image: "https://robohash.org/user1",
    },
    {
        id: 2,
        name: "amil",
        image: "https://robohash.org/amil",
    },
    {
        id: 3,
        name: "user 3",
        image: "https://robohash.org/user3",
    },
];

root.render(
    <>
        {users.map((user, i) => {
            return (
                <div key={i} id={user.id}>
                    <h1>{user.name}</h1>
                    <img src={user.image}/>
                </div>
            );
        })}
    </>
);
