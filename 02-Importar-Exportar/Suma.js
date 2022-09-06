// exportar modulos para usar en el archivo js principal
// los componentes tambien debenempezar con mayusculas

export function Suma() {
    function num(a, b) {
        return a + b;
    }

    return <h1>{num(25, 20)}</h1>;
}

export function User(){
    return <h1>Usuario</h1>
}