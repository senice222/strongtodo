import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, todoSlice)
export const store = configureStore({
  reducer: {
    todo: persistedReducer
  },
})

export let persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

