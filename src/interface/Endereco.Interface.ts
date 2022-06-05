export interface Endereco
{
    id: string;
    equipamentoId: string;
    endereco: string;
    cidade: string;
    bairro: string;
    obs: string;
};

export interface EnderecoRequest extends Partial<Endereco> {};