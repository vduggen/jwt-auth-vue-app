import StorageService from "./storage.service";

export default function authHeader() {
    const user = StorageService.get('user', true);
    const header = { Authorization: `'Bearer ${user.accessToken}` };
    const EXIST_USER_AND_TOKEN = user && user.accessToken;
    
    if (EXIST_USER_AND_TOKEN) return header;

    return {};
}