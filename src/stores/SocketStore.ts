import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { makeAutoObservable, runInAction } from 'mobx';
// import { socket } from '../services/socket';
import AsyncStorage from '@react-native-async-storage/async-storage';


class SocketStore
{
    
    ip: string | null = null;
    loading: boolean= false;

    constructor()
    {
        makeAutoObservable(this);
    }

    getIpBoard()
    {
        this.loading = true;
        // try
        // {
        //     socket.on('getIp', (retorno) => {
        //         this.loading = false;
        //         runInAction( async () => {
        //             await AsyncStorage.setItem('@ip', retorno);
        //             this.ip = retorno;
        //             await AsyncStorage.removeItem('@ip');
        //             // AsyncStorage.setItem('@ip', retorno);
        //             // this.getIpBoard();
        //         });
        //     });
        //     this.loading = false;
        // }
        // catch(e) 
        // {
        //     console.log('chegou aqui');
        //     this.loading = false;
        // }
    }

    definirIpSelecionado(ip: string)
    {
        if(ip)
        {
            runInAction(() => {
                
                // AsyncStorage.removeItem('@ip');
                // AsyncStorage.setItem('@ip', ip);
                this.ip = ip;
            })
        }
    }

}

export default SocketStore;