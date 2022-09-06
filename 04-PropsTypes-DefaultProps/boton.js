// default props y prop types
// los props types se descargar desde npm props-types
import PropTypes from "prop-types";

export function Button({text, name = "user"}){
    return <button>
        {text} - {name}
    </button>
}

// aca definimos los props types
Button.prototype = {
    text: PropTypes.string.isRequired
}
Button.defalutProps = {
    name: 'algun usuario'
}