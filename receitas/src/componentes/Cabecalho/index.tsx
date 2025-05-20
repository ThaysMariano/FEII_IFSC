
//header

interface CabecalhoProps{
    texto: string
}


const Cabecalho = ({ texto }: CabecalhoProps) => {

    return (
    <header>
        <h1>{texto}</h1>
    </header>
    )


}

export default Cabecalho;