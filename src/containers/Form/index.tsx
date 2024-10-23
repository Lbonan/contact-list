import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import { ButtonSave, MainContainer } from '../../styles'
import { BackButton, Form, Titulo, Campo } from './styles'

const Formulario = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastraContato = (ev: FormEvent) => {
    ev.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato +</Titulo>
      <Form onSubmit={cadastraContato}>
        <Campo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="nome"
        />

        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email@gmail.com"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="text"
          placeholder="(xx) xxxxx-xxxx"
        />
        <ButtonSave type="submit">Salvar contato</ButtonSave>
        <BackButton to="/">Voltar</BackButton>
      </Form>
    </MainContainer>
  )
}

export default Formulario
