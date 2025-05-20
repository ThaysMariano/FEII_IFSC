
//corpo da página

import Receita from "../Receita"


const Principal = () => {


    const receitas = [
        {
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
        }
    ]



    //primeiro elemento apenas
    return <Receita nome={receitas[0].nome} ingredientes={receitas[0].ingredientes} instrucoes={receitas[0].instrucoes}/>
}

export default Principal;