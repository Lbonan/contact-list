import { useDispatch, useSelector } from 'react-redux'
import ContactCards from '../../components/ContactCard'
import { AiOutlineUser } from 'react-icons/ai'
import { StickerContainer, Titulo } from './styles'
import { ButtonLink, Input, MainContainer } from '../../styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const ContactList = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefa = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase() || '') >= 0
    )
  }
  const contatos = filtraTarefa()
  return (
    <MainContainer>
      <StickerContainer>
        <Input
          type="text"
          placeholder="Search"
          onChange={(ev) => dispatch(alteraTermo(ev.target.value))}
        />
        <ButtonLink to="/novo">+ novo contato</ButtonLink>
      </StickerContainer>
      <Titulo>
        <AiOutlineUser />
        Contatos - {termo}
      </Titulo>

      <div>
        <ul>
          {contatos.map((c) => (
            <li key={c.titulo}>
              <ContactCards
                titulo={c.titulo}
                email={c.email}
                telefone={c.telefone}
                id={c.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  )
}

export default ContactList
