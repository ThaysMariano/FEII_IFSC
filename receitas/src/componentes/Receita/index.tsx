
// receitas

interface Ingredientes{
    nome: string,
    quantidade: number,
    medida: string,
}

interface ReceitaProps {
    nome : string, 
    ingredientes: Ingredientes[],
    instrucoes: string[],
}


//nomes das prop definidas pelo array de receitas em "principal"
const Receita = ({ nome, ingredientes, instrucoes }: ReceitaProps) => {

    return (
        <article>
            <h2>{nome}</h2>
            <h3>Ingredientes:</h3>

                <ul>

                    <li></li>
                </ul>

            
            <h3>Instruções:</h3>

                <ol>
                    {/* para cada instrucao da lista, cada uma cria uma LI cujo conteudo é a propria instrucao */}
                    {instrucoes.map(instrucao => (<li>{instrucao}</li>))}
                </ol>
            
            
        </article>
    )
}

export default Receita;