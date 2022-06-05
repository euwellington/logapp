import { Usuario } from "../interface/Usuario.interface";
import api from "../services/api";

class UsuarioAPI
{
    listarUsuario = async (usuarioId: string) => await api.get<Usuario>(`/usuario/${usuarioId}`);
}

export default new UsuarioAPI();