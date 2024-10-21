import { useEffect, useState } from 'react'
import { Button, ButtonRemove, ButtonSave } from '../../styles'
import * as S from './styles'
import ContatosClass from '../../models/ContatosClass'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'

type Props = ContatosClass

const ContactCards = ({
  titulo: tituloOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (tituloOriginal.length > 0) {
      setTitulo(tituloOriginal)
    }
  }, [tituloOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setIsEditing(false)
    setTitulo(tituloOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Titulo
        disabled={!isEditing}
        value={titulo}
        onChange={(ev) => setTitulo(ev.target.value)}
      ></S.Titulo>
      <S.Email
        disabled={!isEditing}
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      ></S.Email>
      <S.Telefone
        disabled={!isEditing}
        value={telefone}
        onChange={(ev) => setTelefone(ev.target.value)}
      ></S.Telefone>
      <S.ActionBar>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    email,
                    telefone,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </ButtonSave>
            <ButtonRemove onClick={cancelarEdicao}>Cancelar</ButtonRemove>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <ButtonRemove onClick={() => dispatch(remover(id))}>
              Remover
            </ButtonRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default ContactCards
