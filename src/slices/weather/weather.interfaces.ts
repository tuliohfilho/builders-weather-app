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
    rain: Number
}

export interface Alert {
    event: String
    description: String
}


interface State {
    weather: Weather
    loading: boolean
    current: Current
    alerts: Array<Alert>
}

export type WeatherState = State