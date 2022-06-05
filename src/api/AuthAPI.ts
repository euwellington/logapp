import { Auth } from "../interface/Auth.interface";
import { Usuario } from "../interface/Usuario.interface";
import api from "../services/api";

class AuthAPI
{
    verificarCpf = async (cpf: string) => await api.get<Usuario>(`/app/verificarCpf/${cpf}`);
    login = async (auth: Auth) => await api.post('/auth', auth);
}

export default new AuthAPI();