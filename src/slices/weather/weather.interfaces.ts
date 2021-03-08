export interface Weather {
    lat: Number
    lon: Number
    timezone: String
}

export interface Current {
    temp: Number
    wind_speed: Number
    humidity: Number
    feels_like: Number
}


interface State {
    weather: Weather
    loading: boolean
    current: Current
}

export type WeatherState = State