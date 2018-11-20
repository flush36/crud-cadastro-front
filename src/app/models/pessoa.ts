import { Telefone } from "./telefone";

export class Pessoa {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    email: string;  
    telefones: Telefone[];
}
