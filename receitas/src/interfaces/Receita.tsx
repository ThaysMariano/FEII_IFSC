interface IReceita {
    nome: string;
    ingredientes: {
        nome: string;
        quantidade: number;
        medida: string;
    }[];
    instrucoes: string[];
}

export type { IReceita };