
import { Fragment } from "react/jsx-runtime";
import Cabecalho from "./componentes/Cabecalho";
import Principal from "./componentes/Principal";

const App = () => {


    return (
        <>
            <Cabecalho texto="Comidinhas da Magali"></Cabecalho>
            <Principal/>
        </>
    )
}

export default App;