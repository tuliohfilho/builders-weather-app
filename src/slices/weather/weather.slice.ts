import { createSlice } from '@reduxjs/toolkit'
import { WeatherState, Weather, Current, Alert, WeatherDay } from './weather.interfaces'
import { fetchWeather } from './weather.thunks'

export const initialState: WeatherState = {
    weather: {} as Weather,
    current: {} as Current,
    alerts: [] as Array<Alert>,
    weatherDays: [] as Array<WeatherDay>,
    loading: false
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {
        //Actions para acessar o reduces diretamente
    },
    extraReducers(builder) {
        builder?.addCase(fetchWeather?.pending, (state) => {
            state.weather = {} as Weather
            state.loading = true
        })
        builder.addCase(fetchWeather?.fulfilled, (state, action) => {
            state.weather = action.payload
            state.alerts = action.payload.alerts
            state.current = action.payload.current
            state.weatherDays = action.payload.daily
            state.loading = false
        })
        builder.addCase(fetchWeather?.rejected, (state) => {
            state.loading = false
        })
    }
})

export const { } = weatherSlice.actions

export default weatherSlice.reducer