import { useContext } from "react";
import { ReceitaContext } from "../contextos/ReceitaContext";
import type { IReceita } from "../interfaces/Receita";

//hook -> funcao react q fornece outras funcoes ou funcionalidades

const useReceita = () => {

    const {receitas, setReceitas, receitaSelecionada, setReceitaSelecionada} = useContext(ReceitaContext);


    const apagarReceita = (id: number) => {
        setReceitas(receitas.filter(receita => receita.id != id));
    }

    const atualizarReceita = (receita: IReceita) => {
        setReceitas(receitas.map(r => (r.id === receita.id ? receita : r)));
        setReceitaSelecionada(receita);
    }

    const aoEditar = (id: number) => {
        const receita = receitas.find((receita: IReceita) => receita.id === id)
        !receita ? setReceitaSelecionada(null) : setReceitaSelecionada(receita);
    }



    return {receitas, setReceitas, receitaSelecionada, setReceitaSelecionada, apagarReceita, atualizarReceita, aoEditar};


}

export default useReceita;
