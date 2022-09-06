// formas de exportar 
// de esta forma se exporta todo del archivo 

function Product(){
    return <div>
        <h1>Producto</h1>
    </div>
}

// se exporta "aparte", pero cambia la forma de importar
export function Navbar(){
    return <nav>
        navegacion
    </nav>
}

export default Product