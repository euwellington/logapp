import EquipamentoAPI from "../api/EquipamentoAPI";
import { Equipamento } from "../interface/Equipamento.Interface";

class EquipamentoStore
{

    equipamento: Equipamento | null = null;
    loading: boolean = false;


    async definirSelecionado(equipamentoId: string)
    {
        try
        {
            const { data } = await EquipamentoAPI.listarPorId(equipamentoId);
            this.equipamento = data;
        }
        catch(e)
        {
            console.log(e);
        }
    }

}

export default EquipamentoStore;