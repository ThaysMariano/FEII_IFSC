import { FaStar } from 'react-icons/fa6';

interface Estrelaprops {
    selecionada?: boolean;
    aoSelecionar?: () => void;
}

const Estrela = ({ selecionada = false, aoSelecionar }: Estrelaprops) => {
    return (
        <FaStar
            data-testid = "estrela"
            color={selecionada ? 'coral' : 'lightgray'}
            onClick={aoSelecionar}
        />
    );
};

export default Estrela;
