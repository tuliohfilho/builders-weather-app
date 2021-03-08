import { configureStore } from '@reduxjs/toolkit'

import rootReducers from './rootReducer'

const store = configureStore({
    reducer: rootReducers
})

export type RootState = ReturnType<typeof rootReducers>

export default store