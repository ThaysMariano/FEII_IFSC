
//corpo da página

import { useContext, useState } from "react"
import type { IReceita } from "../../interfaces/Receita"
import Receita from "../Receita"
import "./style.css"
import Formulario from "../Formulario"
import { ReceitaContext } from "../../contextos/ReceitaContext"



const Principal = () => {

    const {  receitas, receitaSelecionada, setReceitas, setReceitaSelecionada  } = useContext(ReceitaContext)


    const apagarReceita =(id: number)=>{
       setReceitas(receitas.filter(receita => receita.id != id));
    }

    const atualizarReceita = (receita : IReceita)=>{
        setReceitas(receitas.map(r => (r.id === receita.id ? receita : r)));
        setReceitaSelecionada(receita);
    }

    const aoEditar=(id: number)=>{
        const receita =receitas.find((receita: IReceita) => receita.id === id)
        !receita ? setReceitaSelecionada(null) : setReceitaSelecionada(receita);
    }

    //primeiro elemento apenas
    return (
    <main className="receitas">
        {receitas.map((receita) => 
        (
            <Receita key={receita.id} 
            id={receita.id} 
            nome={receita.nome} 
            ingredientes={receita.ingredientes} 
            instrucoes={receita.instrucoes} 
            aoDeletar={apagarReceita} 
            aoEditar={aoEditar}/>

           ))}

             <Formulario aoAtualizar={atualizarReceita}/>      
    </main>)


}


export default Principal;