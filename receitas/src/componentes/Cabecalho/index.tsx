import MenuNavegacao from '../MenuNavegacao';
import './style.css';

//header

interface CabecalhoProps {
    texto: string;
}

const Cabecalho = ({ texto }: CabecalhoProps) => {
    return (
        <header>
            <h1>{texto}</h1>
            <MenuNavegacao />
        </header>
    );
};

export default Cabecalho;
