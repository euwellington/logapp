export interface Nota
{
    id: string;
    equipamentoId: string;
    usuarioId: string;
    descricao: string;
    dataHora: string;
    tipo: number;
};

export interface NotaRequest extends Partial<Nota> {};