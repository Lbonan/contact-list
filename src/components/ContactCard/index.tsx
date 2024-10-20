import { useState } from 'react'
import { Button, ButtonRemove, ButtonSave } from '../../styles'
import * as S from './styles'

const ContactCards = () => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <S.Card>
      <S.Titulo>Lucas Bonan</S.Titulo>
      <S.Email>lucas@gmail.com</S.Email>
      <S.Telefone>(22) 22222-2222</S.Telefone>
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
            <ButtonRemove>Remover</ButtonRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default ContactCards
