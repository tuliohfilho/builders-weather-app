import { createAsyncThunk } from '@reduxjs/toolkit'
import { get } from '../../services/api'

export const fetchWeather = createAsyncThunk(
    'Weather/fetchWeather',
    async (coors: { lat: number, lon: number }) => {
        return await get<any>(`onecall`, coors)
    }
)