import ContactList from './containers/ContactList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ContactList />
      </Container>
    </>
  )
}

export default App
