import HttpService from './http.service';
import StorageService from "./storage.service";

class AuthService {
    keyName = 'user';

    async login(credentials) {
        const { cd_cliente, ds_login, ds_senha } = credentials;

        const payload = {
            cd_cliente,
            ds_login,
            ds_senha
        }

        const { data } = await HttpService.post('/auth/login', payload);

        if (data.access_token) {
            StorageService.set(this.keyName, data, true);
        }

        return data;
    }

    logout() {
        StorageService.destroy(this.keyName);
    }

    async register(user) {
        const { data } = HttpService.post('/auth/register', user);

        return data;
    }
}
export default new AuthService();