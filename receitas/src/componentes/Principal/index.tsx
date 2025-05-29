
//corpo da página

import { useState } from "react"
import type { IReceita } from "../../interfaces/Receita"
import Receita from "../Receita"
import "./style.css"
import Formulario from "../Formulario"



const Principal = () => {


    const apagarReceita =(id: number)=>{
       setReceitas(receitas.filter(receita => receita.id != id));
    }

    const atualizarReceita = (receita : IReceita)=>{
        setReceitas(receitas.map(r => (r.id === receita.id ? receita : r)))
        setReceitaSelecionada(receita)
    }

    const aoEditar=(id: number)=>{
        setReceitaSelecionada(receitas.find(receita => receita.id === id))
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

             <Formulario receita={receitaSelecionada} aoAtualizar={atualizarReceita}/>      
    </main>)


}


export default Principal;