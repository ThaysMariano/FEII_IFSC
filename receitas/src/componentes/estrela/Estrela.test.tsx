import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import Estrela from ".";

test("Deve renderizar com a cor lightgray quando não selecianada", ()=>{

    //arrange
    //renderiza a estrela
    render(<Estrela></Estrela>);

    //act
    //pega o elemento da tela para analise
    const estrela = screen.getByTestId("estrela");    

    //assert
    //verificacao com o que se espera
    expect(estrela).toHaveAttribute("color", "lightgray");
})