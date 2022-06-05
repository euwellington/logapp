export interface Usuario
{
    id: string;
    equipamentoId: string;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
}

export interface usuarioRequest extends Partial<Usuario> {}