import styled, { createGlobalStyle } from 'styled-components'

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
  background-color: #3d3d3d;
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
    border: 1px solid #3d3d3d;
    color: #3d3d3d;
    transform: scale(1);
  }
`

export const ButtonSave = styled(Button)`
  background-color: #3ae374;

  margin-left: 8px;

  &:hover {
    border: 1px solid #3ae374;
    color: #3ae374;
  }
`

export const ButtonRemove = styled(Button)`
  background-color: #ff3838;
  margin-left: 8px;

  &:hover {
    border: 1px solid #ff3838;
    color: #ff3838;
  }
`
export const Input = styled.input`
  border: 1px solid #3d3d3d;
  border-radius: 8px;
  padding: 4px;
  margin-right: 12px;
  margin-bottom: 30px;
`

export default GlobalStyle
