import { Link } from 'react-router';
import './style.css';

const MenuNavegacao = () => {
    return (
        <nav className="menu-navegacao">
            <Link to="/" className="link">
                Home
            </Link>
            <Link to="adicionar" className="link">
                Nova Receita
            </Link>
        </nav>
    );
};

export default MenuNavegacao;
