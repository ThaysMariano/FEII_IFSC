
import { Fragment } from "react/jsx-runtime";
import Cabecalho from "./componentes/Cabecalho";
import Principal from "./componentes/Principal";
import { ReceitaProvider } from "./contextos/ReceitaContext";

const App = () => {


    return (
        <>
            <Cabecalho texto="Comidinhas da Magali"></Cabecalho>
            <ReceitaProvider>
                <Principal/>
            </ReceitaProvider>
            
        </>
    )
}

export default App;