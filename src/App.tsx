import { Provider } from 'react-redux'
import ContactList from './containers/ContactList'
import GlobalStyle, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
