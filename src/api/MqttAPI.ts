import api from "../services/api";

class MqttAPI 
{
    acionar = async (mensagem: string) => await api.get(`/mesagem/${mensagem}`); 
}

export default new MqttAPI();