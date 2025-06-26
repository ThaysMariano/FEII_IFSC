import { test, expect, vi, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import Estrela from ".";

describe("Deve renderizar", () => {

    test("com a cor lightgray quando não selecianada", () => {

        //arrange
        //renderiza a estrela
        render(<Estrela></Estrela>);

        //act
        //pega o elemento da tela para analise
        const estrela = screen.getByTestId("estrela");

        //assert
        //verificacao com o que se espera
        expect(estrela).toHaveAttribute("color", "lightgray");
    });


    test("com a cor coral quando selecianada", () => {

        //arrange
        //renderiza a estrela
        render(<Estrela selecionada={true}></Estrela>);

        //act
        //pega o elemento da tela para analise
        const estrela = screen.getByTestId("estrela");

        //assert
        //verificacao com o que se espera
        expect(estrela).toHaveAttribute("color", "coral");
    });



    test("e chamar 'aoSelecionar' quando pressionada", () => {

        //arrange
        //renderiza a estrela

        const mockSelecionar = vi.fn();
        render(<Estrela aoSelecionar={mockSelecionar}></Estrela>);

        //act
        //pega o elemento da tela para analise
        const estrela = screen.getByTestId("estrela");
        fireEvent.click(estrela); //simular evento de clique


        //assert
        //verificacao com o que se espera
        expect(mockSelecionar).toHaveBeenCalledTimes(1);

    });

});
