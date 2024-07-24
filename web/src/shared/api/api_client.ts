import axios, { AxiosInstance } from 'axios'

class ApiClient {
    private axios: AxiosInstance

    constructor() {
        this.axios = axios.create({
            baseURL: process.env.apiUrl,
            params: {},
            headers: {},
        })
    }
}

export const $apiClient = new ApiClient()
