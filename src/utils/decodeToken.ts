import jwt from 'jwt-decode';

export const utilToken = () =>
{
    const decodeToken = (token: string) =>
    {
        if(token)
        {
            let decode = jwt(token);
            return decode
        }
        else
        {
            return 'Token vazio!'
        }
    }


    return {
        decodeToken
    }
}

