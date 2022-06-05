import { Evento } from "../interface/Evento.interface";
import api from "../services/api";

class EventoAPI
{
    listarEventos = async () => await api.get<Evento[]>(`/evento`);
    listarEventoPorId = async (eventoId: string) => await api.get<Evento>(`/evento/${eventoId}`);
}

export default new EventoAPI();