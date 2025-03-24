
import request from "../utils/request"

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    
    const login = async (email, password) =>
        request.post(
            `${baseUrl}/login`,
            { email, password },
        );

    return {
        login,
    }
};