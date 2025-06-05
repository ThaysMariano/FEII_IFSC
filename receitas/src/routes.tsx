
import { Fragment } from "react/jsx-runtime";
import Cabecalho from "./componentes/Cabecalho";
import Principal from "./componentes/Principal";
import { ReceitaProvider } from "./contextos/ReceitaContext";
import { BrowserRouter, Route, Routes } from "react-router";
import Formulario from "./componentes/Formulario";

const AppRoutes = () => {


    return (
        <> <BrowserRouter>
            <Cabecalho texto="Comidinhas da Magali"></Cabecalho>
            <ReceitaProvider>
                <Routes>
                    <Route index element={<Principal/>}/> 
                    <Route path="adicionar" element={<Formulario/>}/>
                    <Route path="*" element={<h1>Poxa, página não encontrada :/</h1>}/>
                </Routes>
            </ReceitaProvider>
        </BrowserRouter>
        </>
    )
}

export default AppRoutes;