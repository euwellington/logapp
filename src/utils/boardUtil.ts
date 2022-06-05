import AsyncStorage from '@react-native-async-storage/async-storage';
export function ramalIpSelecionado(currentIp: string | null, ip: string) {
    let ipSelecionado = null;

    
    if(ip && currentIp === null || currentIp === '')
    {
        ipSelecionado = ip;
    } else {
        ipSelecionado = ip;
    }
  
    return ipSelecionado;
  }