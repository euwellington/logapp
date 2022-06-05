import { useContext, useEffect, useState } from "react";
import AuthAPI from "../api/AuthAPI";
import { Auth } from "../interface/Auth.interface";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import { ParamListBase, Link } from "@react-navigation/native";
import UsuarioAPI from "../api/UsuarioAPI";
import { utilToken } from "../utils/decodeToken";
import { storeContext } from "../stores";


const useAuth = () =>
{

    const { authStore } = useContext(storeContext);
    const { decodeToken } = utilToken();
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(false);
    const [erropw, setErroPw] = useState(false);
    const [next, setNext] = useState(false);

    const toggleNext = () => setNext(!next);

    const verificarCpf = async (cpf: string) =>
    {
        setLoading(true);
        try
        {
            const { data } = await AuthAPI.verificarCpf(cpf);
            authStore.selecionarUsuario(data);
            setLoading(false);
            setNext(true);
        }
        catch(e)
        {
            setLoading(false);
            setErro(true);
            setTimeout(() => setErro(false), 1000)
        }
    }

    const login = async (auth: Auth, navigate: any) =>
    {
        setLoading(true);
        try
        {
            if(authStore.usuario)
            {
                const retorno = await AuthAPI.login(auth);
                await AsyncStorage.setItem('@token', retorno.data);
                if(retorno.data)
                {
                    let user: any = decodeToken(retorno.data)
                    const { data } = await UsuarioAPI.listarUsuario(user.user.id);
                    if(data)
                    {
                        await AsyncStorage.setItem('@equipamento', data.equipamentoId);
                        authStore.selecionarUsuario(data);
                        navigate.navigate('home');
                        console.log(data)
                        setLoading(false);

                    }
                }
                else
                {
                    setErroPw(true);
                    setLoading(false);
                }
            }
            else
            {
                setErroPw(true);
                setLoading(false);
            }
            
    }
        catch(e)
        {
            setErroPw(true);
            setLoading(false);
            setTimeout(() => setErroPw(false), 1000)
        }
    }


    return {
        login,
        verificarCpf,
        toggleNext,
        next,
        loading,
        erro,
        erropw,
        setErro
    }

}

export { useAuth };