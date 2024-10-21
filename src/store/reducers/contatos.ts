import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContatosClass from '../../models/ContatosClass'

type ContatoState = {
  itens: ContatosClass[]
}

const initialState: ContatoState = {
  itens: [
    {
      titulo: 'Lucas',
      email: 'lucas@gmail.com',
      telefone: '(22) 98134-6677',
      id: 1
    },
    {
      titulo: 'Maria',
      email: 'Maria@gmail.com',
      telefone: '(77) 98134-6600',
      id: 2
    },
    {
      titulo: 'Joao',
      email: 'joao@gmail.com',
      telefone: '(22) 9813434-6677',
      id: 3
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatoSlice.actions
export default contatoSlice.reducer
