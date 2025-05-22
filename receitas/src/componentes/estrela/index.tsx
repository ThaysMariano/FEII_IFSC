import { FaStar } from "react-icons/fa6";

interface Estrelaprops{
    selecionada: boolean,
    aoSelecionar: ()=> void
        
}


const Estrela = ( {selecionada, aoSelecionar}: Estrelaprops)=>{


    return <FaStar color={selecionada ? "coral" : "lightgray"} onClick={aoSelecionar}/>




}


export default Estrela;