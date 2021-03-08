import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_WEATHER_MAP,
    timeout: 5000
})

export const get = async<T>(
    endpoint: string,
    options: Partial<T> | undefined = undefined) => {

    if (options) {
        options = {
            ...options,
            appid: process.env.REACT_APP_KEY_WEATHER_MAP
        }
    }

    try {
        const { data } = await api.get(endpoint, { params: options })
        return data
    } catch (error) {
        throw error
    }
}