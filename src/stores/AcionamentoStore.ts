import AcionamentoAPI from "../api/AcionamentoAPI";
import { Acionamento } from "../interface/Acionamento.Interface";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import { makeAutoObservable, runInAction } from "mobx";

class AcionamentoStore
{

    acionamentos: Acionamento[] = [];
    selecionado: Acionamento | null = null;
    estado: boolean | null = null;
    loading: boolean = false;

    constructor()
    {
        makeAutoObservable(this);
    }

    async listar()
    {
        this.loading = true;
        try
        {
            let equipamento = await AsyncStorage.getItem('@equipamento');
            if(equipamento)
            {
                const { data } = await AcionamentoAPI.listarPorEquipamento(equipamento);
                runInAction(() => {
                    this.acionamentos = data;
                    this.loading = false;
                })
            }
        }
        catch(e)
        {
            this.loading = false;
            console.log(e);
        }
    }
    
    definirSelecionado(acionamentoId: string)
    {
        let selecionado = this.acionamentos.find((acio) => acio.id === acionamentoId);
        if(selecionado)
        {
            this.selecionado = selecionado;
        }
    }

}

export default AcionamentoStore;