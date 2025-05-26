
//corpo da página

import type { IReceita } from "../../interfaces/Receita"
import Receita from "../Receita"
import "./style.css"



const Principal = () => {


    const receitas: IReceita[] = [
        {
            id: 1,
            nome: "Salmão Assado",
            ingredientes: [
                { nome: "Salmão", quantidade: 1, medida: "grande" },
                { nome: "Pinoli", quantidade: 1, medida: "xícara" },
                { nome: "Alface Manteiga", quantidade: 2, medida: "xícaras" },
                { nome: "Abobrinha Amarela", quantidade: 1, medida: "média" },
                { nome: "Azeite de Oliva", quantidade: 0.5, medida: "xícara" },
                { nome: "Alho", quantidade: 3, medida: "dentes" },
            ],
            instrucoes: [
                "Preaqueça o forno a 180°C.",
                "Espalhe o azeite de oliva em uma assadeira de vidro.",
                "Adicione a abobrinha amarela e leve ao forno por 30 minutos.",
                "Adicione o salmão, o alho e os pinolis à assadeira.",
                "Asse por 15 minutos.",
                "Retire do forno. Adicione a alface e sirva.",
            ],
        },
        {
            id: 2,
            nome: "Tacos de Peixe",
            ingredientes: [
                { nome: "Peixe Branco", quantidade: 1, medida: "grande" },
                { nome: "Queijo", quantidade: 1, medida: "xícara" },
                { nome: "Alface Americana", quantidade: 2, medida: "xícaras" },
                { nome: "Tomates", quantidade: 2, medida: "grandes" },
                { nome: "Tortilhas", quantidade: 3, medida: "médias" },
            ],
            instrucoes: [
                "Grelhe o peixe até que esteja completamente cozido.",
                "Coloque o peixe sobre as 3 tortilhas.",
                "Cubra com alface, tomates e queijo.",
            ],
        }
    ];



    //primeiro elemento apenas
    return (<main className="receitas">
        {receitas.map((receita, i) => (
            <Receita key={i} id={receita.id} nome={receita.nome} ingredientes={receita.ingredientes} instrucoes={receita.instrucoes} />
        ))}
    </main>)

}


export default Principal;