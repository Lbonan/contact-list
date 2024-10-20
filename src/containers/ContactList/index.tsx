import { AiOutlineUser } from 'react-icons/ai'

import ContactCards from '../../components/ContactCard'
import { ButtonSave, Input, MainContainer } from '../../styles'

const ContactList = () => {
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
          <li>
            <ContactCards />
          </li>
          <li>
            <ContactCards />
          </li>
        </ul>
      </div>
    </MainContainer>
  )
}

export default ContactList
