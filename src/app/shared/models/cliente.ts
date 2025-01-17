import { Endereco } from "./endereco";

export interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    observacoes: Endereco;
    ativo: boolean;
}