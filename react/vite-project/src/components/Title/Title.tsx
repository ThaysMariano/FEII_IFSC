
interface TitleProps{
    conteudo: string
}

const Title = ({ conteudo }: TitleProps)=>{
    return <h1>{conteudo}</h1>
}

export default Title;