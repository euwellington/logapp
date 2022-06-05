export interface Equipamento
{
    id: string;
    nome: string;
    ip: string;
    chip: string;
    versao: string;
    dataCadastro: string;
};

export interface EquipamentoRequest extends Partial<Equipamento> {};