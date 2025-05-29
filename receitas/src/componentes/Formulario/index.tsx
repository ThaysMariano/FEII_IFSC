
import type { IReceita } from "../../interfaces/Receita"

interface FormProp {
    receita: IReceita | undefined;
    aoAtualizar: (r: IReceita) => void
}


const Formulario = ({ receita, aoAtualizar }: FormProp) => {


        return (<>{ receita && <form>
            <h2>Editar Receita</h2>
            <input type="text" name="nome" value={receita.nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => aoAtualizar({ ...receita, nome: e.target.value })}/>
                <h3>Ingredientes</h3>
                {receita.ingredientes.map((ingrediente, i) =>
                    <li key={i}>
                        <input type="text" name="ingrediente" value={ingrediente.nome}></input>
                        <input type="number" name="quantidade" value={ingrediente.quantidade}></input>
                        <input type="text" name="medida" value={ingrediente.medida}></input>

                    </li>)}
                <h3>Modo de Preparo</h3>
                <ol>
                    {receita.instrucoes.map((instrucao, i) => (
                    <li key={i}>
                        <input type="text" name="instrucao" value={instrucao} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const instrucoes = receita.instrucoes.map((inst, j) => i===j ? e.target.value : inst); 
                            aoAtualizar({...receita, instrucoes })                             //p cada elm se for msm indice pega o evento, se nao retorna o original
                        }} />
                    </li>

                ))}
                </ol>
                
        </form>}</>);
}


export default Formulario;