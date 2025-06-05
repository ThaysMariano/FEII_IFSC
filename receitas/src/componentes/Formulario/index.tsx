
import type { IReceita } from "../../interfaces/Receita"
import InputIngrediente from "../inputIngrediente";
import { IoClose } from "react-icons/io5";
import useReceita from "../../hooks/useReceita";
import "./style.css"

interface FormProp {
    aoAtualizar: (r: IReceita) => void
}


const Formulario = ({ aoAtualizar }: FormProp) => {


    const {receitaSelecionada, fecharForm} = useReceita()

    return (<>{receitaSelecionada && <form>
        <div className="titulo-form">
            <h2>Editar Receita</h2>
            <IoClose onClick={fecharForm} className="icon-fechar-form" />
        </div>
        
        <input type="text" name="nome" value={receitaSelecionada.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => aoAtualizar({ ...receitaSelecionada, nome: e.target.value })} />
        <h3>Ingredientes</h3>
        {receitaSelecionada.ingredientes.map((ingrediente, i) =>
            <li key={i}>
                <InputIngrediente nome={ingrediente.nome} quantidade={ingrediente.quantidade} medida={ingrediente.medida} aoAtualizar={
                    (ingredienteAtualizado) => {
                        const ingredientes = receitaSelecionada.ingredientes.map((ing, j) => i === j ? ingredienteAtualizado : ing);
                        aoAtualizar({ ...receitaSelecionada, ingredientes })
                    }}/>
            </li>)}
        <h3>Modo de Preparo</h3>
        <ol>
            {receitaSelecionada.instrucoes.map((instrucao, i) => (
                <li key={i}>
                    <input type="text" name="instrucao" value={instrucao} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const instrucoes = receitaSelecionada.instrucoes.map((inst, j) => i === j ? e.target.value : inst);
                        aoAtualizar({ ...receitaSelecionada, instrucoes })                                                        //p cada elm se for msm indice pega o evento, se nao retorna o original
                    }} />
                </li>

            ))}
        </ol>

    </form>}</>);
}


export default Formulario;