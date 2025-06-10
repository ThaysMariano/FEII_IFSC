
import type { IReceita } from "../../interfaces/Receita"
import InputIngrediente from "../inputIngrediente";
import { IoClose } from "react-icons/io5";
import useReceita from "../../hooks/useReceita";
import "./style.css"
import { useLocation } from "react-router";
import { useContext } from "react";

interface FormProp{
    id?: number;
}


const Formulario = ({ id }: FormProp) => {

    const localizacao = useLocation();

    console.log(localizacao);

    const { receitaSelecionada, fecharForm, setReceitaSelecionada } = useReceita()

    const { atualizarReceita } = useReceita();

    if (localizacao.pathname === "/adicionar") {
        const receitaVazia: IReceita ={
            id: 0,
            nome: "",
            ingredientes: [{
                    nome: "",
                    quantidade: 0,
                    medida: "",
                }],
            instrucoes: [" "]
            }
            setReceitaSelecionada(receitaVazia)
    }

    // if(!receitaSelecionada) return <h2>Não há receita selecionada :p</h2>

    return (<>{receitaSelecionada && <form>
        <div className="titulo-form">
            <h2>Editar Receita</h2>
            <IoClose onClick={fecharForm} className="icon-fechar-form" />
        </div>

        <input type="text" name="nome" value={receitaSelecionada.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => atualizarReceita({ ...receitaSelecionada, nome: e.target.value })} />
        <h3>Ingredientes</h3>
        {receitaSelecionada.ingredientes.map((ingrediente, i) =>
            <li key={i}>
                <InputIngrediente nome={ingrediente.nome} quantidade={ingrediente.quantidade} medida={ingrediente.medida} aoAtualizar={
                    (ingredienteAtualizado) => {
                        const ingredientes = receitaSelecionada.ingredientes.map((ing, j) => i === j ? ingredienteAtualizado : ing);
                        atualizarReceita({ ...receitaSelecionada, ingredientes })
                    }} />
            </li>)}
        <h3>Modo de Preparo</h3>
        <ol>
            {receitaSelecionada.instrucoes.map((instrucao, i) => (
                <li key={i}>
                    <input type="text" name="instrucao" value={instrucao} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const instrucoes = receitaSelecionada.instrucoes.map((inst, j) => i === j ? e.target.value : inst);
                        atualizarReceita({ ...receitaSelecionada, instrucoes })                                                        //p cada elm se for msm indice pega o evento, se nao retorna o original
                    }} />
                </li>

            ))}
        </ol>

    </form>}</>);
}


export default Formulario;