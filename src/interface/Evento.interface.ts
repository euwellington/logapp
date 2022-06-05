export interface Evento
{
    id: string;
    equipamento: string;
    usuarioNome: string;
    acionamentoNome: string;
    dataHoraEvento: string;
}

export interface EventoRequest extends Partial<Evento> {}
