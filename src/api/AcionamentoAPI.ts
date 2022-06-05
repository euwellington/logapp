import { Acionamento } from "../interface/Acionamento.Interface";
import api from "../services/api";

class AcionamentoAPI
{
    acionar = async (acionamentoId: string, flag?: string) => await api.get(`/acionamento/acionar/${acionamentoId}/${flag?.length !== 0 ? flag : 'vazio'}`);
    listar = async () => await api.get<Acionamento[]>(`/acionamento`);
    listarPorEquipamento = async (equipamentoId: string) => await api.get<Acionamento[]>(`/acionamento/equipamentoId/${equipamentoId}`);
}

export default new AcionamentoAPI();