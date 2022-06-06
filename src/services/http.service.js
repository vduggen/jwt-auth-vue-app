import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL_API,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

function success({ data }) {
	return data;
}

function error({ response }) {
	console.log(response.data.message);
}

httpClient.interceptors.response.use(success, error)

export default httpClient;