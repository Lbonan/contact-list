import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  list-style: none;
 }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const MainContainer = styled.main`
  height: 100vh;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  background-color: ${variaveis.preto};
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 8px;
  transition:
    0.3s ease,
    0.3s ease,
    0.2s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid ${variaveis.preto};
    color: ${variaveis.preto};
    transform: scale(1);
  }
`

export const ButtonSave = styled(Button)`
  background-color: ${variaveis.verde};

  margin-left: 8px;

  &:hover {
    border: 1px solid ${variaveis.verde};
    color: ${variaveis.verde};
  }
`

export const ButtonRemove = styled(Button)`
  background-color: ${variaveis.vermelho};
  margin-left: 8px;

  &:hover {
    border: 1px solid ${variaveis.vermelho};
    color: ${variaveis.vermelho};
  }
`
export const ButtonLink = styled(Link)`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  background-color: ${variaveis.verde};
  color: #fff;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
  margin-left: 8px;
  transition:
    0.3s ease,
    0.3s ease,
    0.2s ease;

  &:hover {
    background-color: transparent;
    border: 1px solid ${variaveis.verde};
    color: ${variaveis.verde};
    transform: scale(1);
  }
`

export const Input = styled.input`
  border: 1px solid ${variaveis.preto};
  border-radius: 8px;
  padding: 4px;
  margin-right: 12px;
  margin-bottom: 30px;
`

export default GlobalStyle
