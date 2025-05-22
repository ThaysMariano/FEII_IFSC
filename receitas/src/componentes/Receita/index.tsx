
// receitas

import type { IReceita } from "../../interfaces/Receita";
import Avaliacao from "../avaliacao";
import "./style.css"
import { FaTrashCan } from "react-icons/fa6";



//nomes das prop definidas pelo array de receitas em "principal"
const Receita = ({ nome, ingredientes, instrucoes }: IReceita) => {

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
                <FaTrashCan />
              
            </div>

        </article>
    )
}

export default Receita;