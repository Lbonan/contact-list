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

  body{
    background-color: #00d8d6;
  }
}
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const MainContainer = styled.main`
  height: 60vh;
  padding: 10px 40px;
  border-radius: 8px;
  background-color: #fff;
`

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  background-color: ${variaveis.amarelo};
  color: #fff;
  box-shadow: 0px 0px 8px #c1c1c1;
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
    border: 1px solid ${variaveis.amarelo};
    color: ${variaveis.amarelo};
    transform: scale(1);
  }

  @media (max-width: 764px) {
    display: inline-block;
    margin-left: 0px;
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

  @media (max-width: 374px) {
    display: block;
    padding: 4px 8px;
    margin-left: 0;
    width: 60%;
    margin-bottom: 16px;
  }
`

export const Input = styled.input`
  border: 1px solid ${variaveis.preto};
  border-radius: 8px;
  padding: 4px;
  margin-right: 12px;
  margin-bottom: 30px;
  background-color: #fcfcfc;
`

export default GlobalStyle
