import { Auth } from "../interface/Auth.interface";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import { makeAutoObservable, runInAction } from "mobx";
import { Usuario } from "../interface/Usuario.interface";
import UsuarioAPI from "../api/UsuarioAPI";
import jwt from 'jwt-decode';

class AuthStore
{

    loading: boolean = false;
    usuario: Usuario | null = null;
    token: string | null = null;
    authenticate: boolean = true;

    constructor()
    {
        makeAutoObservable(this);
        this.listarUsuario = this.listarUsuario.bind(this);
    }

    async verifyToken()
    {
        this.loading = true;
        try
        {
            let value = await AsyncStorage.getItem('@token');
            runInAction(() => 
            {
                if(value !== null)
                {
                    this.token = value;
                    this.loading = false;
                    this.authenticate = true;
                    this.listarUsuario();
                }
                else
                {
                    this.authenticate = false;
                }
            })
            this.loading = false;
        }
        catch(e)
        {
            this.token = null;
            this.loading = false;
        }
    }

    async listarUsuario() 
    {
        try
        {
            if(this.token)
            {
                let user: any = jwt(this.token);
                const { data } = await UsuarioAPI.listarUsuario(user.user);
                runInAction(() => {
                    this.usuario = data;
                })
            }
           
        }
        catch(e)
        {
            console.log(e);
        }
    }

    async selecionarUsuario(usuario: Usuario)
    {
        if(usuario)
        {
            this.usuario = usuario;
        }
    }

}

export default AuthStore;