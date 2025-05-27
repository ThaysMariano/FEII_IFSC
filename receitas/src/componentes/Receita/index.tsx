
// receitas

import type { IReceita } from "../../interfaces/Receita";
import { FaEdit } from "react-icons/fa";
import Avaliacao from "../avaliacao";
import "./style.css"
import { FaTrashCan } from "react-icons/fa6";

interface ReceitaProps{
    id: number,
    nome: string,
    ingredientes: {nome: string, quantidade: number, medida:string}[]
    instrucoes: string[],
    aoDeletar: (id:number)=>void;
    aoEditar: (id: number)=> void;
}



//nomes das prop definidas pelo array de receitas em "principal"
const Receita = ({id, nome, ingredientes, instrucoes, aoDeletar, aoEditar }: ReceitaProps) => {

    return (
        <article className="receita">
            <h2>{nome}</h2>
            <h3>Ingredientes:</h3>

            <ul>
                {/* para cada ingredinete sao dispostas suas informações em uma LI*/}
                {ingredientes.map((ingrediente, i) => (<li key={i}>{ingrediente.quantidade} {ingrediente.medida} {ingrediente.nome}</li>))}
            </ul>

            <h3>Instruções:</h3>

            <ol>
                {/* para cada instrucao da lista, cada uma cria uma LI cujo conteudo é a propria instrucao. Key é o indice na lista */}
                {instrucoes.map((instrucao, i) => (<li key={i}>{instrucao}</li>))}
            </ol>

            <div className="receita-rodape">
                  <Avaliacao/>
                  <div>
                    <FaEdit onClick={() => aoEditar(id)}/>
                    <FaTrashCan onClick={()=>aoDeletar(id)}/>
                  </div>
            </div>

        </article>
    )
}

export default Receita;