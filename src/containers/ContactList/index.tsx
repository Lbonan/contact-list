import { useSelector } from 'react-redux'
import ContactCards from '../../components/ContactCard'
import { AiOutlineUser } from 'react-icons/ai'
import { ButtonSave, Input, MainContainer } from '../../styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <MainContainer>
      <div>
        <Input type="text" placeholder="Search" />
        <ButtonSave>+ novo contato</ButtonSave>
      </div>
      <div>
        <h2>
          <AiOutlineUser />
          Contatos
        </h2>
        <ul>
          {itens.map((c) => (
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
