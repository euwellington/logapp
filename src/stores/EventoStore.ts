import { makeAutoObservable, runInAction } from "mobx";
import { Evento } from "../interface/Evento.interface";
import EventoAPI from "../api/EventoAPI";

class EventoStore
{

    loading: boolean = false;
    eventos: Evento[] = [];
    selecionado: Evento | null = null;

    constructor()
    {
        makeAutoObservable(this);
    }

    async listar() 
    {
        this.loading = true;
        try
        {
            const { data } = await EventoAPI.listarEventos();
            runInAction(() => {
                this.eventos = data;
                this.loading = false;
            })
           
        }
        catch(e)
        {
            console.log(e);
            this.loading = false;
        }
    }

    async selecionarEvento(eventoId: string)
    {
        let selecionado = this.eventos.find((evt) => evt.id === eventoId);
        if(selecionado)
        {
            this.selecionado = selecionado;
        }
    }

}

export default EventoStore;