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
    },
    editar: (state, action: PayloadAction<ContatosClass>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<ContatosClass, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (contatoExiste) {
        alert('Esse contato já existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
