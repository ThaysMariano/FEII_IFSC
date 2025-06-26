import { useState } from 'react';
import Estrela from '../estrela';

const Avaliacao = () => {
    const numEstrelas = 5;
    const estrelas = [...Array(numEstrelas)];

    // avalicao e o valor e setAvaliacao e a funcao que age sobre a avaliacao
    const [avaliacao, setAvaliacao] = useState(0);

    return (
        <div className="avaliacao">
            {estrelas.map((_, i) => (
                <Estrela
                    key={i}
                    selecionada={avaliacao > i}
                    aoSelecionar={() =>
                        avaliacao == i ? setAvaliacao(i + 1) : setAvaliacao(0)
                    }
                />
            ))}
        </div>
    );
};

export default Avaliacao;
