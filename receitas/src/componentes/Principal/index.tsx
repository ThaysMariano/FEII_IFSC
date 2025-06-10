
//corpo da página

import { useContext, useState } from "react"
import type { IReceita } from "../../interfaces/Receita"
import Receita from "../Receita"
import "./style.css"
import Formulario from "../Formulario"
import { ReceitaContext } from "../../contextos/ReceitaContext"
import useReceita from "../../hooks/useReceita"



const Principal = () => {

    const {  receitas,  apagarReceita, aoEditar, atualizarReceita} = useReceita(); 

    
    //primeiro elemento apenas
    return (
    <main className="receitas">
        {receitas.map((receita: IReceita) => 
        (
            <Receita 
            key={receita.id} 
            id = {receita.id}
            aoDeletar={apagarReceita} 
            aoEditar={aoEditar}/>

           ))}

             <Formulario />      
    </main>)


}


export default Principal;