export interface Auth
{
    email: string;
    senha: string;
};

export interface AuthRequest extends Partial<Auth> {};