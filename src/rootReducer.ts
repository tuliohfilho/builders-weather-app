import { combineReducers } from '@reduxjs/toolkit'
import weatherSlice from './slices/weather/weather.slice'

const rootReducers = combineReducers({
    weather: weatherSlice
})

export type RootState = ReturnType<typeof rootReducers>

export default rootReducers