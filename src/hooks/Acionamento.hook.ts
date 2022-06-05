import { useContext, useState } from "react";
import { ToastAndroid } from "react-native";
import AcionamentoAPI from "../api/AcionamentoAPI";
import MqttAPI from "../api/MqttAPI";
import { Acionamento, AcionamentoRequest } from "../interface/Acionamento.Interface";
import { storeContext } from "../stores";

export const useAcionamento = () => {

    const { acionamentoStore } = useContext(storeContext);
    const [loading, setLoading] = useState(false);

    const acionar = async (acionamento: Acionamento, value?: number) => {
        setLoading(true);
        try {

            if(acionamento.tipo === 0)
            {
                const { data } = await AcionamentoAPI.acionar(acionamento.id);
                setLoading(false);
                acionamentoStore.listar();
                ToastAndroid.show(`Acionamento ${acionamento.nome} ${!acionamento.estado ? 'ligado' : 'desligado'} sucesso!`, ToastAndroid.SHORT);
            }
            else if(acionamento.tipo === 1)
            {
                const { data } = await AcionamentoAPI.acionar(acionamento.id, value?.toString());
                setLoading(false);
                console.log(data)
                console.log(`valor do led: ${value}`)
            }

            
        } catch(e) {
            console.log(e);
            setLoading(false);
        }        
    }

    return {
        acionar,
        loading
    }

}