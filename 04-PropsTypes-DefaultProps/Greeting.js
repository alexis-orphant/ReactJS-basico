// propsTypes y defaultProps
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

