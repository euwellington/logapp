import { useState } from "react";
// import { socket } from "../services/socket";

interface Message 
{
    text: string;
}


class Socket
{
    ip: string | null = null;

    getIPBoard()
    {
        // socket.on('getIp', (retorno) => {
        //     // console.log(retorno);
        //     if(retorno)
        //     {
        //         let selecionado = retorno;
        //         global.ipboard = selecionado;
        //         // if(this.ip === null) this.ip = selecionado;
        //         // this.ip = selecionado;
        //     }
        // })    
    }
}


export default new Socket();