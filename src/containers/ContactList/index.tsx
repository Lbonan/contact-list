import { useDispatch, useSelector } from 'react-redux'
import ContactCards from '../../components/ContactCard'
import { AiOutlineUser } from 'react-icons/ai'
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
      <div>
        <Input
          type="text"
          placeholder="Search"
          onChange={(ev) => dispatch(alteraTermo(ev.target.value))}
        />
        <ButtonLink to="/novo">+ novo contato</ButtonLink>
      </div>
      <div>
        <h2>
          <AiOutlineUser />
          Contatos
        </h2>
        <span>{termo}</span>
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
