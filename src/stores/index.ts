import { configure } from 'mobx';
import { createContext } from 'react';
import AcionamentoStore from './AcionamentoStore';
import AuthStore from './AuthStore';
import EquipamentoStore from './EquipamentoStore';
import EventoStore from './EventoStore';
import SocketStore from "./SocketStore";

configure({
    enforceActions: "never",
})

export const storeContext = createContext({
    socketStore: new SocketStore(),
    authStore: new AuthStore(),
    eventoStore: new EventoStore(),
    acionamentoStore: new AcionamentoStore(),
    equipamentoStore: new EquipamentoStore(),
});