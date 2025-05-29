

interface Ingrediente{
    nome: string,
    quantidade: number,
    medida: string,
}


interface InputIngredienteProps{
    nome: string,
    quantidade: number,
    medida: string,
    aoAtualizar: (ingrediente: Ingrediente)=>void
}



const InputIngrediente = ({nome, quantidade, medida, aoAtualizar}: InputIngredienteProps) =>{

    return (
        <>
            <input type="text" name="ingrediente" value={nome} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> aoAtualizar({nome: e.target.value, quantidade, medida})}></input>
            <input type="number" name="quantidade" value={quantidade} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> aoAtualizar({nome, quantidade: e.target.valueAsNumber, medida})}></input>
            <input type="text" name="medida" value={medida} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> aoAtualizar({nome, quantidade, medida: e.target.value})}></input>
        </>
    )
}

export default InputIngrediente;