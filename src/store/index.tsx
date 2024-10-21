import { configureStore } from '@reduxjs/toolkit'
import contatosReducers from './reducers/contatos'
import filroReducers from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducers,
    filtro: filroReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
