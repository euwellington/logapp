import { Equipamento } from "../interface/Equipamento.Interface";
import api from "../services/api";

class EquipamentoAPI
{
    listarPorId = async (equipamentoId: string) => await api.get<Equipamento>(`/equipamento/${equipamentoId}`);
}

export default new EquipamentoAPI();