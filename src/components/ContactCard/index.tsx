import { useState } from 'react'
import { Button, ButtonRemove, ButtonSave } from '../../styles'
import * as S from './styles'
import ContatosClass from '../../models/ContatosClass'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/contatos'

type Props = ContatosClass

const ContactCards = ({ titulo, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  return (
    <S.Card>
      <S.Titulo disabled={!isEditing} value={titulo}></S.Titulo>
      <S.Email disabled={!isEditing} value={email}></S.Email>
      <S.Telefone disabled={!isEditing} value={telefone}></S.Telefone>
      <S.ActionBar>
        {isEditing ? (
          <>
            <ButtonSave>Salvar</ButtonSave>
            <ButtonRemove onClick={() => setIsEditing(false)}>
              Cancelar
            </ButtonRemove>
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
