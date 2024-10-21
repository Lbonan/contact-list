import { configureStore } from '@reduxjs/toolkit'
import contatosReducers from './reducers/contatos'

const store = configureStore({
  reducer: {
    contatos: contatosReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
